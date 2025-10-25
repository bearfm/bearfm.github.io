# Geographic Journal - Jekyll Theme

A stunning Jekyll theme inspired by geographic magazines, featuring a bold black, white, and yellow (#ffcc00) color scheme with magazine-quality typography and layout design.

## Features

- 🎨 **Geographic Magazine Design** - Inspired by National Geographic and other premium travel magazines
- 🖼️ **Hero Section** - Large, impactful hero image with overlay text
- 📰 **Magazine-Style Layout** - Professional typography and grid-based design
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Loading** - Optimized for performance
- 🔍 **SEO Optimized** - Built with SEO best practices
- 📧 **Newsletter Signup** - Integrated newsletter section
- 🎯 **Category Filtering** - Filter posts by category on archive page
- ✨ **Smooth Animations** - Subtle scroll effects and hover animations

## Installation

### For GitHub Pages

1. Fork this repository
2. Rename it to `yourusername.github.io`
3. Go to Settings > Pages and select your source branch
4. Your site will be live at `https://yourusername.github.io`

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and go to `http://localhost:4000`

## Configuration

### Site Settings

Edit `_config.yml` to customize your site:

```yaml
# Site settings
title: Your Site Title
description: Your site description
baseurl: ""
url: "https://yourusername.github.io"
author: Your Name
email: your.email@example.com

# Theme settings
theme_settings:
  primary_color: "#ffcc00"  # Your accent color
  hero_title: "Your Hero Title"
  hero_subtitle: "Your Hero Subtitle"
  hero_image: "/assets/images/hero-bg.jpg"
  
  # Social links
  social:
    github: "yourusername"
    twitter: "yourusername"
    instagram: "yourusername"
    email: "your.email@example.com"
```

### Adding Posts

Create new posts in the `_posts` directory with the following front matter:

```yaml
---
layout: post
title: "Your Post Title"
subtitle: "Your post subtitle"
date: 2024-10-14 10:00:00 +0000
category: Adventure
author: Your Name
featured_image: /assets/images/your-image.jpg
tags: [tag1, tag2, tag3]
---
```

### Adding Images

1. Place your images in the `assets/images/` directory
2. Reference them in your posts using the full path: `/assets/images/your-image.jpg`
3. For best results, use high-quality images that are at least 1200px wide

## Customization

### Colors

The theme uses a black, white, and yellow color scheme. You can customize this by:

1. Editing the CSS variables in `assets/css/main.css`
2. Updating the `primary_color` in `_config.yml`

### Typography

The theme uses Google Fonts (Playfair Display for headings, Source Sans Pro for body text). You can change these in:

- `assets/css/main.css` for the CSS
- `_layouts/default.html` for the font imports

### Hero Section

The hero section can be customized by:

1. Replacing `assets/images/hero-bg.jpg` with your own hero image
2. Updating the hero text in `_config.yml`
3. Modifying the hero layout in `_layouts/home.html`

## Pages

The theme includes several pre-built pages:

- **Home** (`index.html`) - The main landing page with hero section and featured posts
- **About** (`about.md`) - Information about your site or publication
- **Archive** (`archive.md`) - All posts with category filtering

## Features in Detail

### Newsletter Signup

The newsletter form in the footer is functional and can be connected to your email service provider. The form includes validation and success/error states.

### Category Filtering

The archive page includes JavaScript-powered category filtering, allowing visitors to filter posts by category with smooth animations.

### Responsive Design

The theme is fully responsive and includes:
- Mobile-optimized navigation
- Responsive typography
- Flexible grid layouts
- Touch-friendly interface elements

### Performance Optimizations

- Optimized images with lazy loading
- Minified CSS and JavaScript
- Efficient font loading
- Progressive enhancement

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This theme is open source and available under the [MIT License](LICENSE).

## Credits

- Typography: Google Fonts (Playfair Display, Source Sans Pro)
- Icons: Font Awesome (if used)
- Images: Generated or from Unsplash/Pexels
- Jekyll: Static site generator

## Support

If you have any questions or need help with the theme, please:

1. Check the existing documentation
2. Search for similar issues
3. Create a new issue in the repository

---

**Enjoy exploring the world with Geographic Journal!** 🌍📖✨