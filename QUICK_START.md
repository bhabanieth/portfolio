# ⚡ Quick Start Guide - 5 Minute Setup

## What You Have

Your portfolio includes:
- 📄 **index.html** - Main portfolio page (ready to use!)
- 🎨 **styles.css** - All styling and animations
- ⚙️ **script.js** - JavaScript interactivity
- 📋 **config.js** - Easy customization
- 📖 **README.md** - Full documentation
- 🚀 **DEPLOYMENT_GUIDE.md** - GitHub hosting guide

---

## Step 1: Test Locally (2 minutes)

### Windows PowerShell

```powershell
cd D:\Portfolio
python -m http.server 8000
```

Then open browser to: `http://localhost:8000`

### Using VS Code Live Server

1. Right-click on `index.html`
2. Select "Open with Live Server"
3. Browser opens automatically ✨

---

## Step 2: Customize (3 minutes)

### Update Your Information

**In `index.html`:**
- Change email in contact section
- Update social links

**In `config.js`:**
```javascript
personal: {
    name: "Your Name",
    email: "your.email@example.com",
    github: "https://github.com/YOUR-USERNAME",
    linkedin: "https://linkedin.com/in/your-profile",
}
```

---

## Step 3: Deploy to GitHub Pages (5 minutes)

### Quick Deploy Commands

```powershell
# 1. Initialize git (only first time)
git init
git config --global user.name "Your Name"
git config --global user.email "your.email@github.com"

# 2. Add and commit
git add .
git commit -m "Portfolio website"

# 3. Set branch
git branch -M main

# 4. Connect to GitHub (replace USERNAME and REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# 5. Push
git push -u origin main
```

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: **main** branch, **/root** folder
4. Save ✅
5. Wait 2 minutes
6. Your site is live! 🎉

---

## Files Explained

| File | Purpose |
|------|---------|
| `index.html` | Main page - All content here |
| `styles.css` | Styling, animations, responsive design |
| `script.js` | Interactivity, animations, scroll effects |
| `config.js` | Easy configuration without editing HTML |
| `.gitignore` | Files to ignore when pushing to GitHub |

---

## Key Features Already Included

✅ Animated hero section
✅ 14 projects showcase
✅ Skills section with categories
✅ About section with stats
✅ Contact form
✅ Social links
✅ Mobile responsive
✅ Smooth animations
✅ Glassmorphism effects
✅ Bento UI design

---

## Common Customizations

### Change Colors

Edit `styles.css`:
```css
:root {
    --primary: #667eea;      /* Purple */
    --secondary: #764ba2;    /* Purple Dark */
    --accent: #f093fb;       /* Pink */
}
```

### Add Your Photo

1. Add an image in your portfolio folder
2. Find the "About" section in `index.html`
3. Replace the icon with an image:
```html
<img src="your-photo.jpg" alt="Your Name" class="profile-pic">
```

### Update Projects

Edit `config.js` - Add/remove projects in the `projects` array

### Change Social Links

Find this in `index.html`:
```html
<a href="https://github.com/BHABANISHANKAR-01" class="social-link">
```

Replace URL with your links

---

## Testing Checklist

- [ ] Open in Chrome, Firefox, Safari
- [ ] Test on mobile (F12 → Responsive Mode)
- [ ] Check all links work
- [ ] Verify social links point to your profiles
- [ ] Test contact form (opens email client)
- [ ] Scroll and check animations

---

## After Deployment

### Share Your Portfolio

- 📌 Add to GitHub bio
- 🐦 Tweet about it
- 💼 Add to LinkedIn
- 📧 Share with friends
- 🎯 Update your resume

### Keep it Updated

```powershell
# After making changes locally:
git add .
git commit -m "Describe your changes"
git push origin main

# Your site updates automatically in 1-2 minutes!
```

---

## URL After Deployment

### If repository is named `portfolio`:
```
https://YOUR-USERNAME.github.io/portfolio
```

### If repository is named `YOUR-USERNAME.github.io`:
```
https://YOUR-USERNAME.github.io
```

---

## Stuck?

1. Check `DEPLOYMENT_GUIDE.md` for detailed steps
2. See `README.md` for full documentation
3. Check browser console: `F12`
4. Look for typos in URLs

---

## Next Steps

✨ **Congratulations! Your portfolio is ready!**

1. Test locally
2. Customize with your info
3. Deploy to GitHub
4. Share with the world

---

**Built with ❤️ for your success! 🚀**

Questions? Refer to `DEPLOYMENT_GUIDE.md` or `README.md`
