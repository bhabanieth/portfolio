# Bhabanishankar Nayak - Portfolio Website

A stunning, animated portfolio website built with HTML5, CSS3, and JavaScript featuring modern UI effects, Bento design patterns, and smooth animations.

## 🌟 Features

- ✨ **Modern Bento UI Design** - Clean, organized card-based layout
- 🎨 **Glassmorphism Effects** - Frosted glass aesthetic with backdrop blur
- 🎯 **Smooth Animations** - Elegant transitions and entrance animations
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- ⚡ **Performance Optimized** - Fast loading with optimized assets
- 🌈 **Gradient Backgrounds** - Beautiful gradient color schemes
- 🎭 **Interactive Elements** - Hover effects, parallax scrolling, and more
- 📊 **Project Showcase** - 14+ featured projects with descriptions
- 📧 **Contact Form** - Integrated email functionality
- 🔗 **Social Links** - Connect on GitHub, LinkedIn, and more

## 📁 File Structure

```
Portfolio/
├── index.html       # Main HTML file
├── styles.css       # Styling and animations
├── script.js        # JavaScript interactivity
└── README.md        # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. That's it! No build process required

### Using a Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server

# Using Live Server VS Code extension
# Right-click on index.html → Open with Live Server
```

## 🌐 Deploy to GitHub Pages

### Method 1: Using GitHub Pages (Recommended)

1. **Create a GitHub repository** named `portfolio` or `BHABANISHANKAR-01.github.io`
2. **Push files to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select branch `main` and save
4. **Access your portfolio** at:
   - `https://YOUR-USERNAME.github.io/portfolio`
   - Or `https://YOUR-USERNAME.github.io` (if repo is named `BHABANISHANKAR-01.github.io`)

### Method 2: Using GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

## 🎨 Customization

### Update Your Information

Edit `index.html` to update:
- **Name and Title**: Hero section
- **Social Links**: Contact section (update URLs)
- **Email**: Contact form (update `your.email@example.com`)
- **Stats**: About section numbers

### Modify Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --accent: #f093fb;
    /* ... more colors */
}
```

### Add/Update Projects

Add new project cards in the projects section:

```html
<div class="project-card bento-card">
    <div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <i class="fas fa-icon"></i>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <a href="project-link" class="project-link" target="_blank">
            View Project <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</div>
```

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with animations
- **JavaScript (Vanilla)** - No frameworks, pure JavaScript
- **Font Awesome Icons** - Beautiful icons
- **CSS Grid & Flexbox** - Responsive layouts

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎯 Performance Tips

- Minify CSS and JavaScript for production
- Optimize images to reduce file size
- Use CDN for Font Awesome icons
- Enable gzip compression on your server

## 📝 SEO Optimization

Update meta tags in `index.html`:

```html
<meta name="description" content="Your description here">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
```

## 🔒 Privacy & Security

- No data collection from forms (redirects to email)
- No analytics scripts (can be added if needed)
- No tracking cookies
- GDPR compliant

## 📞 Support & Troubleshooting

### Issue: CSS not loading

- Check file paths in HTML
- Clear browser cache (Ctrl+Shift+Del)
- Use absolute paths instead of relative

### Issue: JavaScript not working

- Check browser console for errors (F12)
- Ensure JavaScript is enabled
- Check for conflicting scripts

### Issue: Mobile styling looks off

- Check viewport meta tag
- Test in different screen sizes
- Clear browser cache

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with passion and lots of coffee ☕

---

**Happy Coding!** 🚀

For questions or suggestions, feel free to reach out through the contact form!
