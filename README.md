# Titled Games Website

**We Do Games** - Official website for Titled Games.

## Website

Visit us at: [https://titledgames.github.io](https://titledgames.github.io)

## Contents

- [About](#about)
- [Features](#features)
- [File Structure](#file-structure)
- [Editing the Website](#editing-the-website)
- [Sections](#sections)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Contributing](#contributing)

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

## Sections

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
