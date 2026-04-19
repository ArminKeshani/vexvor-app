'use client'

import { useEffect, useRef } from 'react'

interface SpiralAnimationProps {
  seed?: number
  starCount?: number
  className?: string
  mouseInfluence?: number   // 0–1, how strongly the camera reacts to mouse
}

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

export default function SpiralAnimation({
  seed = 1234,
  starCount = 4500,
  className = '',
  mouseInfluence = 0.6,
}: SpiralAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef   = useRef<number | null>(null)
  const timeRef   = useRef(0)
  // Smooth mouse position (−1 to 1)
  const mouseRef  = useRef({ x: 0, y: 0 })
  const targetMouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rng = seededRandom(seed)

    /* ── Star generation ──────────────────────────────── */
    interface Star {
      angle: number; radius: number; z: number
      speed: number; size: number; opacity: number
      spiralTightness: number; arm: number
    }

    const stars: Star[] = Array.from({ length: starCount }, () => {
      const arm = Math.floor(rng() * 4)
      const radius = Math.pow(rng(), 0.5) * 0.85
      const angle = arm * (Math.PI / 2) + radius * 8 + (rng() - 0.5) * 1.2
      return {
        angle,
        radius,
        z: rng() * 2 - 1,
        speed: 0.00008 + rng() * 0.00015,
        size: rng() * 1.8 + 0.3,
        opacity: rng() * 0.6 + 0.2,
        spiralTightness: 6 + rng() * 4,
        arm,
      }
    })

    /* ── Trail particles ──────────────────────────────── */
    interface Particle { x: number; y: number; life: number; maxLife: number; size: number }
    const particles: Particle[] = []

    /* ── Resize ───────────────────────────────────────── */
    let W = 0, H = 0
    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    /* ── Mouse tracking (global, to catch movement anywhere on page) ── */
    const onMouseMove = (e: MouseEvent) => {
      // Normalize to −1…+1 based on window size
      targetMouseRef.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    /* ── Touch support ────────────────────────────────── */
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      targetMouseRef.current = {
        x: (t.clientX / window.innerWidth  - 0.5) * 2,
        y: (t.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    /* ── Elastic easing ───────────────────────────────── */
    const elasticOut = (t: number) =>
      t === 0 ? 0 : t === 1 ? 1
        : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1

    /* ── 3D → 2D projection ───────────────────────────── */
    const project = (x: number, y: number, z: number, cameraZ: number) => {
      const fov = 400
      const dz = z - cameraZ
      if (Math.abs(dz) < 0.001) return null
      const scale = fov / (fov + dz * 100)
      return { sx: x * scale, sy: y * scale, scale }
    }

    /* ── Rotate 2D ────────────────────────────────────── */
    const rotate = (x: number, y: number, a: number) => ({
      rx: x * Math.cos(a) - y * Math.sin(a),
      ry: x * Math.sin(a) + y * Math.cos(a),
    })

    /* ── Animation loop ───────────────────────────────── */
    const CYCLE = 18 // seconds per camera cycle

    const draw = (ts: number) => {
      if (!ctx) return
      timeRef.current = ts

      // Smooth mouse interpolation (lerp)
      const lerpSpeed = 0.035
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * lerpSpeed
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * lerpSpeed

      const t = (ts / 1000 / CYCLE) % 1
      const baseCameraZ = -0.5 + t * 1.5

      // Apply mouse parallax to camera position
      const mx = mouseRef.current.x * mouseInfluence * 0.18
      const my = mouseRef.current.y * mouseInfluence * 0.18

      // Background fade — slightly more transparent for richer trails
      ctx.fillStyle = 'rgba(11,12,14,0.22)'
      ctx.fillRect(0, 0, W, H)

      // Camera center offset from mouse
      const cx = W / 2 + mx * W * 0.08
      const cy = H / 2 + my * H * 0.08
      const galaxyScale = Math.min(W, H) * 0.44

      // Subtle galaxy tilt from mouse
      const tiltX = my * 0.12 * mouseInfluence
      const tiltY = mx * 0.08 * mouseInfluence

      stars.forEach((star) => {
        star.angle += star.speed

        // 3-phase displacement
        const phase1 = Math.min(1, t * 3)
        const phase2 = Math.max(0, Math.min(1, (t - 0.3) * 3))
        const phase3 = Math.max(0, (t - 0.6) * 2.5)

        const r = star.radius * (0.3 + 0.7 * elasticOut(phase1))
        const spread = 0.6 * phase2
        const tightness = star.spiralTightness * (1 - phase3 * 0.3)

        const baseAngle = star.angle + r * tightness
        const { rx, ry } = rotate(r, 0, baseAngle)

        const spreadX = rx + (rng() - 0.5) * spread * 0.2
        const spreadY = ry + (rng() - 0.5) * spread * 0.2

        // Mouse tilt applied to 3D coords
        const tx = spreadX + tiltY * star.z
        const ty = spreadY + tiltX * star.z

        const proj = project(tx, ty, star.z, baseCameraZ)
        if (!proj) return

        const px = cx + proj.sx * galaxyScale
        const py = cy + proj.sy * galaxyScale

        if (px < -10 || px > W + 10 || py < -10 || py > H + 10) return

        const sz = star.size * proj.scale * (0.5 + phase1 * 0.5)
        const alpha = star.opacity * Math.min(1, phase1 * 2) * Math.max(0, 1 - Math.max(0, (proj.scale - 1.5) * 2))

        ctx.beginPath()
        ctx.arc(px, py, Math.max(0.1, sz), 0, Math.PI * 2)

        // Refined star color — slightly warm white with subtle gold near center
        const warmth = Math.max(0, 1 - star.radius * 1.2)
        const r_val = Math.round(250 + warmth * 4)
        const g_val = Math.round(250 + warmth * 2)
        const b_val = Math.round(247)
        ctx.fillStyle = `rgba(${r_val},${g_val},${b_val},${alpha * 0.88})`
        ctx.fill()

        // Refined gold trail — use new gold color #D4AF37
        if (star.arm === 0 && r > 0.4 && phase2 > 0.3) {
          if (Math.random() < 0.12) {
            particles.push({
              x: px, y: py,
              life: 0,
              maxLife: 50 + Math.random() * 70,
              size: sz * 1.4,
            })
          }
        }
      })

      // Draw + age particles — refined gold: rgba(212,175,55,…)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++
        const pf = p.life / p.maxLife
        if (pf >= 1) { particles.splice(i, 1); continue }
        const pa = (1 - pf) * 0.5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (1 - pf * 0.6), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,175,55,${pa})`
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      ro.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [seed, starCount, mouseInfluence])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  )
}
