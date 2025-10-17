# Titled Games Website

**We do games** - Official website for Titled Games.

## Website

Visit us at: [https://titledgames.github.io](https://titledgames.github.io)

## About

This is the official website for Titled Games. The site is built with vanilla HTML, CSS, and JavaScript for maximum compatibility and ease of maintenance.

## Site Structure

```
titledgames.github.io/
│
├── index.html          # Main HTML file - structure of the website
├── styles.css          # All styling - colors, layouts, animations
├── script.js           # Interactive features - navigation, particles, animations
├── README.md           # This file - documentation for the team
└── LICENSE             # Open source license
```

## Customization Guide

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

## Deployment

This site is automatically deployed via **GitHub Pages**:

1. Push changes to the `main` branch
2. GitHub Pages automatically rebuilds the site
3. Changes are live at `https://titledgames.github.io` within minutes

### Deployment Settings

- **Source**: Main branch, root directory
- **Custom Domain**: Not configured (using default GitHub Pages URL)
- **HTTPS**: Automatically enabled

---

**Made with by the Titled Games team**

*Last updated: 2025*
