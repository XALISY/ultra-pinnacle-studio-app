# Sync script for ultra-pinnacle-studio-app
# This script helps keep your local repository in sync with GitHub

# Ensure we're in the repository directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

# Store current branch name
$currentBranch = git rev-parse --abbrev-ref HEAD

Write-Host "💫 Syncing ultra-pinnacle-studio-app with GitHub..." -ForegroundColor Cyan
Write-Host "Current branch: $currentBranch" -ForegroundColor Yellow

# Stash any local changes
Write-Host "📦 Stashing local changes (if any)..." -ForegroundColor Blue
git stash

# Pull latest changes
Write-Host "⬇️ Pulling latest changes from GitHub..." -ForegroundColor Blue
git pull origin $currentBranch

# Pop stashed changes
Write-Host "📦 Restoring local changes (if any)..." -ForegroundColor Blue
git stash pop

# Status update
Write-Host "`n📊 Current Status:" -ForegroundColor Green
git status

Write-Host "`n✨ Sync complete! Remember to:" -ForegroundColor Cyan
Write-Host "1. Commit any local changes: git commit -m 'your message'" -ForegroundColor Yellow
Write-Host "2. Push to GitHub: git push origin $currentBranch" -ForegroundColor Yellow
Write-Host "3. On MacBook: Run git pull origin $currentBranch" -ForegroundColor Yellow

# Keep window open if run by double-click
if ($Host.Name -eq "ConsoleHost") {
    Write-Host "`nPress any key to continue..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}