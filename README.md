# Titled Games Website

🎮 **We Do Games** - Official website for Titled Games, a startup game company.

## 🌐 Live Website

Visit us at: [https://titledgames.github.io](https://titledgames.github.io)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [File Structure](#file-structure)
- [Editing the Website](#editing-the-website)
- [Sections](#sections)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Contributing](#contributing)

## 🎯 About

This is the official website for Titled Games, showcasing our company, values, and upcoming games. The site is built with vanilla HTML, CSS, and JavaScript for maximum compatibility and ease of maintenance.

## ✨ Features

- **Modern, Dynamic Design**: Animated particles, smooth transitions, and engaging visual effects
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Well-Documented Code**: Extensive comments throughout all files for easy maintenance
- **Performance Optimized**: Minimal dependencies, fast load times, optimized animations
- **Accessibility**: Semantic HTML, keyboard navigation support, high contrast mode support
- **GitHub Integration**: Links back to our GitHub organization
- **WIP Status**: Clear indicators that games are in development

## 📁 File Structure

```
titledgames.github.io/
│
├── index.html          # Main HTML file - structure of the website
├── styles.css          # All styling - colors, layouts, animations
├── script.js           # Interactive features - navigation, particles, animations
├── README.md           # This file - documentation for the team
└── LICENSE             # Open source license
```

## 🛠️ Editing the Website

### Prerequisites

- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML/CSS/JavaScript
- A web browser for testing

### Making Changes

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/titledgames/titledgames.github.io.git
   cd titledgames.github.io
   ```

2. **Open the files in your editor**:
   - `index.html` - Edit content and structure
   - `styles.css` - Modify colors, spacing, animations
   - `script.js` - Change interactive behaviors

3. **Test locally**:
   - Simply open `index.html` in a web browser
   - Or use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (if you have http-server installed)
     npx http-server
     ```
   - Visit `http://localhost:8000` in your browser

4. **Commit and push changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

5. **Changes go live automatically** via GitHub Pages (usually within a few minutes)

## 📑 Sections

### Navigation Bar
- Fixed at the top of the page
- Smooth scrolling to sections
- Mobile-friendly hamburger menu
- **Edit in**: `index.html` (lines ~20-45)

### Hero Section
- Main landing area with animated particles
- Company name and motto
- Call-to-action buttons
- **Edit in**: `index.html` (lines ~47-85)
- **Particle settings**: `script.js` (lines ~60-80)

### About Section
- Company information
- Core values (Innovation, Creativity, Passion)
- **Edit in**: `index.html` (lines ~87-125)

### Games Section
- Showcase of upcoming games
- Status badges (Coming Soon, In Development)
- WIP notice with GitHub link
- **Edit in**: `index.html` (lines ~127-195)

### Team Section
- Join the team information
- Open positions
- **Edit in**: `index.html` (lines ~197-235)

### Contact Section
- Social links (GitHub)
- **Edit in**: `index.html` (lines ~237-260)

### Footer
- Quick links
- Copyright information
- GitHub link
- **Edit in**: `index.html` (lines ~262-290)

## 🎨 Customization Guide

### Changing Colors

All colors are defined as CSS variables in `styles.css` (lines 19-30):

```css
:root {
    --primary-color: #6C63FF;      /* Main purple */
    --secondary-color: #FF6584;    /* Pink accent */
    --accent-color: #00D9FF;       /* Cyan accent */
    --dark-bg: #0F0F1E;            /* Background */
    /* ... more colors ... */
}
```

Simply change these values to update the entire color scheme.

### Adding a New Game

1. Find the games grid in `index.html` (around line 145)
2. Copy one of the existing game cards
3. Modify the content:
   ```html
   <div class="game-card coming-soon">
       <div class="game-image">
           <div class="placeholder-image">
               <span class="game-icon">🎮</span> <!-- Change emoji -->
           </div>
       </div>
       <div class="game-info">
           <h3>Your Game Name</h3> <!-- Change title -->
           <p>Your game description</p> <!-- Change description -->
           <span class="status-badge">Your Status</span> <!-- Change status -->
       </div>
   </div>
   ```

### Changing Animation Speed

In `styles.css`, find the transition speed variable (line 44):

```css
--transition-speed: 0.3s; /* Change this value */
```

### Adding Social Links

1. Find the social links section in `index.html` (around line 249)
2. Add a new link following the existing pattern:
   ```html
   <a href="your-url" target="_blank" class="social-link">
       <svg><!-- Your icon SVG --></svg>
       <span>Platform Name</span>
   </a>
   ```

### Modifying Particles

In `script.js`, find the particle configuration (around line 60):

```javascript
const particleCount = 50; // Change number of particles
const colors = [
    'rgba(108, 99, 255, 0.5)',  // Add or modify colors
    // ...
];
```

## 🚀 Deployment

This site is automatically deployed via **GitHub Pages**:

1. Push changes to the `main` branch
2. GitHub Pages automatically rebuilds the site
3. Changes are live at `https://titledgames.github.io` within minutes

### Deployment Settings

- **Source**: Main branch, root directory
- **Custom Domain**: Not configured (using default GitHub Pages URL)
- **HTTPS**: Automatically enabled

## 🌐 Browser Support

The website is tested and works on:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 👥 Contributing

We welcome contributions from the team! Here's how:

1. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test thoroughly

3. **Commit with a clear message**:
   ```bash
   git commit -m "Add: description of what you added"
   ```

4. **Push to GitHub**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub

### Coding Standards

- Use clear, descriptive comments
- Follow the existing code structure
- Test on multiple browsers and devices
- Keep commits focused and atomic
- Update this README if adding major features

## 📝 Common Tasks

### Update Company Motto
Edit `index.html` line ~70 and footer line ~276

### Change Hero Background
Edit `styles.css` lines related to `.hero` (around line 160)

### Add a New Section
1. Add HTML structure in `index.html`
2. Add CSS styling in `styles.css`
3. Add navigation link in the navbar
4. Update this README

### Modify Mobile Breakpoints
Edit media queries in `styles.css` (starting line 850)

## 🐛 Troubleshooting

### Changes not appearing?
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Wait a few minutes for GitHub Pages to rebuild
- Check browser console for errors

### Mobile menu not working?
- Check `script.js` is properly linked in `index.html`
- Verify no JavaScript errors in console

### Particles not showing?
- Check browser console for errors
- Verify the particles container exists in HTML
- Check if animations are disabled in browser settings

## 📞 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/titledgames/titledgames.github.io/issues)
- **Organization**: [github.com/titledgames](https://github.com/titledgames)

## 📄 License

This project is licensed under the terms in the LICENSE file.

---

**Made with ❤️ by the Titled Games team**

*Last updated: 2024*