# Quick Reference Guide

A quick reference for common tasks when working on the Titled Games website.

## 🎨 Common CSS Changes

### Change Primary Color
```css
/* In styles.css, line ~31 */
:root {
    --primary-color: #FF9966;  /* Change this hex code */
}
```

### Change Text Color
```css
/* In styles.css, line ~39 */
:root {
    --light-text: #333333;     /* Main text color */
    --gray-text: #666666;      /* Secondary text color */
}
```

### Change Background Color
```css
/* In styles.css, line ~36 */
:root {
    --dark-bg: #FFFFFF;        /* Main background (light mode) */
    --dark-secondary: #F5F5F5; /* Alternate sections */
}
```

### Change Font
```css
/* In styles.css, line ~54 */
:root {
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Add a Shadow to Element
```css
.your-element {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    /* Format: horizontal vertical blur spread color */
}
```

### Make Element Rounded
```css
.your-element {
    border-radius: 10px;  /* Adjust number for more/less rounding */
}
```

### Add Hover Effect
```css
.your-element {
    transition: all 0.3s ease;  /* Smooth transition */
}

.your-element:hover {
    transform: translateY(-5px);  /* Move up on hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
```

---

## 📝 Common HTML Changes

### Add a New Section
```html
<section id="my-section" class="about">
    <div class="container">
        <h2 class="section-title">My Section Title</h2>
        <p>Section content goes here.</p>
    </div>
</section>
```

### Add a Button
```html
<button class="btn btn-primary">Click Me</button>
<!-- Or as a link -->
<a href="#section" class="btn btn-primary">Go to Section</a>
```

### Add an Image
```html
<img src="image.jpg" alt="Description of image" width="400" height="300">
```

### Add a Link
```html
<!-- Regular link -->
<a href="https://example.com">Link Text</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank">Link Text</a>

<!-- Link to section on same page -->
<a href="#about">About Section</a>
```

### Add a List
```html
<!-- Unordered list (bullets) -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Ordered list (numbers) -->
<ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>
```

### Add a Game Card
```html
<!-- Add to games-grid div in index.html -->
<div class="game-info">
    <h3>Game Name</h3>
    <p>Game description goes here.</p>
    <div class="game-action">
        <a href="game-page.html" class="btn btn-primary">Play Now</a>
    </div>
</div>
```

---

## ⚡ Common JavaScript Tasks

### Select an Element
```javascript
// By ID
const element = document.getElementById('elementId');

// By class (first match)
const element = document.querySelector('.className');

// By class (all matches)
const elements = document.querySelectorAll('.className');

// By tag name
const paragraphs = document.querySelectorAll('p');
```

### Add Click Event
```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    console.log('Button clicked!');
    // Your code here
});
```

### Change Text Content
```javascript
const element = document.getElementById('myElement');
element.textContent = 'New text';
```

### Change HTML Content
```javascript
const element = document.getElementById('myElement');
element.innerHTML = '<strong>Bold text</strong>';
```

### Show/Hide Element
```javascript
// Hide
element.style.display = 'none';

// Show
element.style.display = 'block';  // or 'flex', 'inline', etc.
```

### Add/Remove CSS Class
```javascript
// Add class
element.classList.add('className');

// Remove class
element.classList.remove('className');

// Toggle class (add if not present, remove if present)
element.classList.toggle('className');

// Check if has class
if (element.classList.contains('className')) {
    // Do something
}
```

### Change Style
```javascript
element.style.color = 'blue';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';
```

### Wait for Page to Load
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Code here runs after page loads
    console.log('Page loaded!');
});
```

---

## 🐛 Debugging Tips

### View Console Messages
1. Press `F12` to open Developer Tools
2. Click "Console" tab
3. Look for errors (red) or messages

### Inspect Element
1. Right-click any element on the page
2. Select "Inspect" or "Inspect Element"
3. See HTML structure and CSS styles
4. Try changes live (temporary)

### Test on Different Screen Sizes
1. Open Developer Tools (F12)
2. Click device/phone icon (Toggle Device Toolbar)
3. Select different device sizes
4. Test your changes on mobile, tablet, desktop

### Common Errors

**"Cannot read property of null"**
- Element doesn't exist when JavaScript tries to access it
- Check spelling of ID/class name
- Make sure element exists in HTML

**"Uncaught ReferenceError: X is not defined"**
- Variable or function doesn't exist
- Check spelling
- Make sure it's declared before use

**Styles not applying**
- Check CSS selector spelling
- Check if more specific rule is overriding
- Use `!important` as last resort: `color: blue !important;`

**Changes not showing**
- Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Check if you saved the file

---

## 📏 Responsive Design Values

### Breakpoints Used in Our CSS
```css
/* Tablet and below */
@media (max-width: 768px) {
    /* Styles for tablets and smaller */
}

/* Mobile */
@media (max-width: 480px) {
    /* Styles for mobile phones */
}
```

### Common Device Sizes
- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: 1025px+

---

## 🎨 Color Formats

```css
/* Hex (most common) */
color: #FF9966;

/* RGB */
color: rgb(255, 153, 102);

/* RGBA (with transparency) */
color: rgba(255, 153, 102, 0.5);  /* 0.5 = 50% transparent */

/* HSL */
color: hsl(20, 100%, 70%);

/* Named colors */
color: orange;
color: blue;
color: red;
```

---

## 📐 Sizing Units

```css
/* Absolute units */
width: 200px;        /* Pixels - fixed size */
width: 10cm;         /* Centimeters */

/* Relative units */
width: 50%;          /* Percentage of parent */
width: 10em;         /* Relative to font-size */
width: 10rem;        /* Relative to root font-size */
width: 50vw;         /* 50% of viewport width */
width: 50vh;         /* 50% of viewport height */
```

---

## ⌨️ Keyboard Shortcuts

### VS Code
- `Ctrl+S` / `Cmd+S`: Save file
- `Ctrl+F` / `Cmd+F`: Find in file
- `Ctrl+H` / `Cmd+H`: Find and replace
- `Ctrl+/` / `Cmd+/`: Comment/uncomment line
- `Alt+Up/Down`: Move line up/down
- `Ctrl+D` / `Cmd+D`: Select next occurrence

### Browser
- `F12`: Open Developer Tools
- `Ctrl+F5` / `Cmd+Shift+R`: Hard refresh (clear cache)
- `Ctrl+Shift+C` / `Cmd+Shift+C`: Inspect element
- `Ctrl+Shift+I` / `Cmd+Option+I`: Open DevTools

### Git
```bash
# See what changed
git status
git diff

# Stage changes
git add .
git add filename.html

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin branch-name

# Pull latest changes
git pull origin main
```

---

## 🔧 Useful CSS Patterns

### Center Element Horizontally
```css
.centered {
    margin: 0 auto;
    max-width: 1200px;
}
```

### Center Element with Flexbox
```css
.container {
    display: flex;
    justify-content: center;  /* Horizontal */
    align-items: center;      /* Vertical */
}
```

### Make Element Full Width
```css
.full-width {
    width: 100%;
}
```

### Create Two Columns
```css
.two-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;  /* Equal width */
    gap: 20px;
}
```

### Smooth Transitions
```css
.element {
    transition: all 0.3s ease;
}

/* Or specific properties */
.element {
    transition: background-color 0.3s ease,
                transform 0.3s ease;
}
```

---

## 📱 Testing Checklist

Before submitting changes, test:

- [ ] Desktop view (1920x1080)
- [ ] Tablet view (768px width)
- [ ] Mobile view (375px width)
- [ ] Dark mode toggle works
- [ ] All links work
- [ ] Mobile menu opens/closes
- [ ] No console errors (F12 → Console)
- [ ] Animations are smooth
- [ ] Text is readable
- [ ] Images load correctly

---

## 🆘 Quick Fixes

### Element Not Centering
```css
/* Try this */
.element {
    display: block;
    margin: 0 auto;
    text-align: center;
}
```

### Text Too Small on Mobile
```css
/* Use clamp for responsive text */
font-size: clamp(1rem, 3vw, 2rem);
/* min, preferred, max */
```

### Element Behind Another
```css
/* Increase z-index */
.element {
    position: relative;
    z-index: 10;
}
```

### Spacing Too Tight
```css
/* Add padding (inside) */
padding: 20px;

/* Or margin (outside) */
margin: 20px;

/* Or gap (for flex/grid) */
gap: 20px;
```

---

## 📚 More Help

- **Full Beginner Guide**: [docs/BEGINNER_GUIDE.md](BEGINNER_GUIDE.md)
- **Contributing Guide**: [CONTRIBUTING.md](../CONTRIBUTING.md)
- **Ask Questions**: [Discord](https://dsc.gg/titledgames) or [GitHub Issues](https://github.com/TitledGames/website/issues)

---

Remember: Start small, test often, and don't be afraid to experiment! 🚀
