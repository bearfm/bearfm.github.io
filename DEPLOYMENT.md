# Geographic Journal Theme - Deployment Guide

## Quick Start for GitHub Pages

### Method 1: Direct Upload (Easiest)

1. Download all files from this repository
2. Create a new repository on GitHub named `yourusername.github.io`
3. Upload all files to the repository (make sure to include the `.gitignore` file)
4. Go to Settings > Pages in your repository
5. Select "Deploy from a branch" and choose "main" branch
6. Your site will be live at `https://yourusername.github.io` within minutes

### Method 2: Git Clone (Recommended for Development)

1. Fork this repository
2. Clone it to your local machine:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```
3. Update `_config.yml` with your information
4. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Initial setup"
   git push origin main
   ```
5. Your site will automatically deploy to GitHub Pages

## Customization Steps

### 1. Update Site Information

Edit `_config.yml`:
```yaml
title: "Your Site Title"
description: "Your site description"
url: "https://yourusername.github.io"
author: "Your Name"
email: "your.email@example.com"
```

### 2. Customize Colors and Fonts

Edit `assets/css/main.css` to change:
- Primary color: `#ffcc00` (line ~15)
- Typography: Google Fonts imports (lines ~12-14)
- Layout and spacing throughout the file

### 3. Replace Images

Replace these images with your own:
- `assets/images/hero-bg.jpg` - Hero background image
- `assets/images/himalayas.jpg` - Sample post image 1
- `assets/images/desert.jpg` - Sample post image 2
- `assets/images/arctic.jpg` - Sample post image 3
- `assets/images/ocean.jpg` - Sample post image 4
- `assets/images/temple.jpg` - Sample post image 5
- `assets/images/savanna.jpg` - Sample post image 6

### 4. Update Content

- Edit `about.md` with your information
- Replace sample posts in `_posts/` with your own content
- Update navigation links in `_layouts/default.html`
- Modify footer information in `_layouts/default.html`

## File Structure

```
/
├── _config.yml              # Site configuration
├── _layouts/                # Page templates
│   ├── default.html         # Base template
│   ├── home.html           # Homepage template
│   ├── post.html           # Article template
│   └── page.html           # Static page template
├── _posts/                  # Blog posts
├── assets/                  # Static files
│   ├── css/main.css        # Stylesheet
│   ├── js/main.js          # JavaScript
│   └── images/             # Images
├── about.md                # About page
├── archive.md              # Archive page
├── index.html              # Homepage
├── index.md                # Homepage (alternative)
├── Gemfile                 # Ruby dependencies
├── .gitignore             # Git ignore rules
├── README.md              # Documentation
└── LICENSE                # License
```

## Features Included

### Design Features
- ✅ Geographic magazine-inspired design
- ✅ Black, white, and yellow (#ffcc00) color scheme
- ✅ Professional typography (Playfair Display + Source Sans Pro)
- ✅ Hero section with large background image
- ✅ Magazine-style article layouts
- ✅ Responsive design for all devices

### Functionality
- ✅ Jekyll-powered static site generation
- ✅ SEO optimization
- ✅ Social media integration
- ✅ Newsletter signup form
- ✅ Category filtering on archive page
- ✅ Smooth scroll animations
- ✅ Reading progress indicator
- ✅ Mobile-friendly navigation

### Content
- ✅ 6 sample blog posts with diverse topics
- ✅ About page template
- ✅ Archive page with filtering
- ✅ Contact information setup
- ✅ Sample images for all posts

## Troubleshooting

### Common Issues

1. **Site not displaying correctly**
   - Check that all files are uploaded
   - Verify `_config.yml` settings
   - Ensure proper file permissions

2. **Images not loading**
   - Check image paths in posts
   - Verify images are uploaded to `assets/images/`
   - Ensure image file extensions are correct

3. **CSS not applying**
   - Check `assets/css/main.css` is uploaded
   - Verify CSS file path in `_layouts/default.html`
   - Clear browser cache

4. **JavaScript not working**
   - Check `assets/js/main.js` is uploaded
   - Verify JavaScript file path in `_layouts/default.html`
   - Check browser console for errors

### Getting Help

- Check the README.md for detailed documentation
- Review the sample posts for formatting examples
- Test your site locally before deploying
- Use GitHub Issues for bug reports

## Performance Tips

1. **Optimize Images**
   - Use compressed images (under 500KB each)
   - Use appropriate dimensions (1200px+ width for featured images)
   - Consider WebP format for better compression

2. **Minimize JavaScript**
   - Remove unused code from `main.js`
   - Consider using a CDN for common libraries

3. **CSS Optimization**
   - Remove unused CSS rules
   - Consider using CSS minification

4. **Content Optimization**
   - Keep posts under 2,000 words for better loading
   - Use appropriate heading structure
   - Include relevant keywords for SEO

## Next Steps

After deployment:

1. **Replace all sample content** with your own
2. **Update social media links** in `_config.yml`
3. **Add Google Analytics** tracking code
4. **Set up a custom domain** (optional)
5. **Create a favicon** for your site
6. **Test all functionality** thoroughly

## Support

This theme is designed to work out of the box on GitHub Pages. If you encounter issues:

1. Check the GitHub Pages documentation
2. Verify all required files are present
3. Test locally using `jekyll serve` (if you have Jekyll installed)
4. Check the browser developer console for errors

---

**Your geographic journal is ready to explore the world!** 🌍✨