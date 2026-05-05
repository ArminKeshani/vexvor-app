# VexVor 2.0 — Aethel Canon deploy
# Run from PowerShell in C:\Users\armin\Documents\Claude\Projects\kiyasha-group\vexvor\code\vexvor-app

Write-Host ""
Write-Host "VexVor 2.0 — Aethel Canon deploy" -ForegroundColor Cyan
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""

# Clean stale git locks/tmp objects
Get-ChildItem -Path .git -Recurse -Filter "tmp_obj_*" -ErrorAction SilentlyContinue | Remove-Item -Force -ErrorAction SilentlyContinue
Remove-Item .git\index.lock -Force -ErrorAction SilentlyContinue
Write-Host "[1/5] Cleaned git locks" -ForegroundColor Green

# Stage every modified or new file
git add src/ deploy-vexvor.ps1
Write-Host "[2/5] Staged changes" -ForegroundColor Green

# Commit
$commitMsg = @"
VexVor 2.0 — Aethel Canon implementation

Visual system:
- Replace gold-everywhere palette with Aethel Symbolic Canon
- Void Black + Ash Grey + Field White as primary surfaces
- Forge Red reserved for critical actions only
- Ember Gold reserved exclusively for verified Prestance
- Cormorant Garamond for display, Inter for body, JetBrains Mono for receipts

Architecture:
- New 9-page structure: Home, Codex, Economy, Forge, Genesis, Patrons, Transparency, Apply, FAQ
- Nav rewritten with proper section links
- Footer with Stiftung disclosure, policy checksum, Kiyasha Group link

Content:
- Home: A Standard Against the Vortex (Mode B invitation tone)
- Codex: Three Foundational Virtues + Thirteen Principles + Anti-Cult Safeguards
- Economy: Proof-of-Prestance vs PoW/PoS, scoring formula, dual-asset Merit Firewall
- Forge: Today Path, Pods/Teams, Service Rail, Score Receipt anatomy, Kill-Switch
- Genesis: 4-phase quadrant with gate metrics and honest timing disclosure
- Patrons: Prestance Vow, Reserves Policy, Stiftung structure
- Transparency: Endpoint registry, engineering posture, privacy & legal anchors
- Apply: Vow-first form with kantara-style consent receipt language
- FAQ: 4 sections including explicit skeptical questions

Anti-Cult Safeguards:
- No messianic language ("World's first" removed)
- Critic-in-Residence section
- No founder photo / no idol culture
- Documented kill-switch (Read-Only Mode)
- Honest about uncertainty

Trust layer:
- Stiftung-in-formation banner everywhere
- Policy checksum (hash_policy_v6) in footer
- WCAG 2.2 AA focus styles
- Skip-link for screen readers
- Reduced-motion respected

Source: Master Blueprint v1.0 + Definitive Edition v1.0 + Public Introductions v9-11
"@

git commit -m "$commitMsg"
Write-Host "[3/5] Committed" -ForegroundColor Green

# Push - Vercel will auto-deploy
git push origin main
Write-Host "[4/5] Pushed to origin/main" -ForegroundColor Green

Write-Host ""
Write-Host "[5/5] Vercel auto-deploying..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Watch deploy: https://vercel.com/cerf-land/vexvor-app/deployments" -ForegroundColor Cyan
Write-Host "Live site:    https://www.vexvor.com" -ForegroundColor Cyan
Write-Host ""
