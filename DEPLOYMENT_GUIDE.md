# 🚀 GitHub Pages Deployment Guide

## Complete Step-by-Step Setup for Your Portfolio

### Prerequisites
- GitHub account
- Git installed on your computer
- Your portfolio files ready

---

## Step 1: Create a GitHub Repository

### Option A: Create a New Repository Named `portfolio`
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio`
3. Description: "My professional portfolio website"
4. Choose **Public**
5. Don't initialize with README (we have one)
6. Click **Create Repository**

### Option B: Create a Special Repository (Recommended for main portfolio)
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `BHABANISHANKAR-01.github.io`
3. This will automatically deploy to `https://BHABANISHANKAR-01.github.io`
4. Choose **Public**
5. Click **Create Repository**

---

## Step 2: Initialize Git Locally

Open terminal/PowerShell in your Portfolio folder:

```powershell
# Navigate to Portfolio folder
cd D:\Portfolio

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit - Bhabanishankar Nayak"

# Set main branch
git branch -M main
```

---

## Step 3: Connect to GitHub & Push

```powershell
# Replace BHABANISHANKAR-01 with your username and portfolio with repo name
git remote add origin https://github.com/BHABANISHANKAR-01/portfolio.git

# Push to GitHub
git push -u origin main
```

**Note:** On first push, you may need to authenticate:
- GitHub will open a browser window
- Or use a Personal Access Token

---

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** and **/root**
5. Click **Save**
6. Wait 1-2 minutes for deployment

---

## Step 5: Access Your Portfolio

- If repo is `BHABANISHANKAR-01.github.io`: Visit `https://BHABANISHANKAR-01.github.io`
- If repo is `portfolio`: Visit `https://BHABANISHANKAR-01.github.io/portfolio`

---

## Updating Your Portfolio

### Make local changes, then:

```powershell
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Update portfolio - describe changes here"

# Push to GitHub
git push origin main
```

Your site will automatically rebuild!

---

## Troubleshooting

### Issue: Site not appearing after push

**Solution:**
- Wait 2-3 minutes
- Check GitHub Actions tab for build errors
- Verify all files are pushed: `git status`

### Issue: CSS/JS not loading

**Solution:**
- Check file paths in `index.html`
- Try hard refresh: `Ctrl+Shift+R`
- Check browser console for errors: `F12`

### Issue: 404 errors

**Solution:**
- Verify correct repository URL
- Check if repository is Public, not Private
- Ensure Pages are enabled in Settings

---

## Advanced: Custom Domain

To use a custom domain (e.g., `portfolio.com`):

1. Register domain at any registrar
2. Go to repository **Settings > Pages**
3. Under "Custom domain", enter your domain
4. Update DNS records at your registrar (follow GitHub's instructions)
5. Enable HTTPS

---

## Setting Up Git on Your Computer (First Time)

If you haven't used Git before:

```powershell
# Configure Git globally
git config --global user.name "Bhabanishankar Nayak"
git config --global user.email "your.email@example.com"

# Verify
git config --list
```

---

## Using Git Bash or PowerShell?

### PowerShell
```powershell
# Standard PowerShell commands work fine
cd D:\Portfolio
git status
git push
```

### Git Bash (Recommended)
```bash
# More similar to Linux/Mac
cd /d/Portfolio
git status
git push
```

---

## Quick Reference: Common Git Commands

```powershell
# Check status
git status

# See your commits
git log --oneline

# Add specific file
git add filename.ext

# Remove from staging
git restore --staged filename.ext

# See changes
git diff

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main
```

---

## GitHub Actions Status

To check if your site is building:

1. Go to your repository
2. Click **Actions** tab
3. See build status
4. Click on workflow to see logs

---

## Setting Up SSH (Optional - Recommended)

For faster pushes without password prompts:

1. Generate SSH key:
   ```powershell
   ssh-keygen -t ed25519 -C "your.email@example.com"
   ```

2. Copy public key to GitHub:
   - Settings > SSH and GPG keys
   - New SSH key
   - Paste key

3. Update remote URL:
   ```powershell
   git remote remove origin
   git remote add origin git@github.com:BHABANISHANKAR-01/portfolio.git
   ```

---

## Performance Tips

1. **Minify files** (optional for GitHub Pages)
2. **Optimize images** before uploading
3. **Use relative paths** in HTML
4. **Enable caching** headers

---

## Privacy & SEO

### robots.txt (Optional)
Create `robots.txt` to optimize search engines:

```
User-agent: *
Allow: /
Sitemap: https://BHABANISHANKAR-01.github.io/sitemap.xml
```

### sitemap.xml (Optional)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://BHABANISHANKAR-01.github.io/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## Keep Your Portfolio Updated

```powershell
# 1. Make changes to files locally
# 2. Test in browser

# 3. Commit changes
git add .
git commit -m "Update: added new project"

# 4. Push to GitHub
git push origin main

# 5. Done! Site updates automatically in 1-2 minutes
```

---

## Need Help?

- **GitHub Docs**: https://docs.github.com/en/pages
- **Git Documentation**: https://git-scm.com/doc
- **GitHub Support**: https://support.github.com

---

## Contact & Social Links

Update these in `script.js` or `config.js`:
- Email: your.email@example.com
- GitHub: https://github.com/BHABANISHANKAR-01
- LinkedIn: https://linkedin.com/in/your-profile

---

**Happy Deploying! 🎉**

Your portfolio is now live on the internet! Share it everywhere! 🚀
