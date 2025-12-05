# Contributing to Titled Games Website

Thank you for your interest in contributing to the Titled Games website! This guide will help you get started, whether you're a complete beginner or an experienced developer.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Making Changes](#making-changes)
4. [Testing Your Changes](#testing-your-changes)
5. [Submitting Your Work](#submitting-your-work)
6. [Code Style Guidelines](#code-style-guidelines)
7. [Getting Help](#getting-help)

---

## Getting Started

### Prerequisites

You'll need:
- A GitHub account
- A text editor (we recommend [VS Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), or [Notepad++](https://notepad-plus-plus.org/))
- A web browser (like Chromium and Firefox)
- Git installed on your computer ([Download Git](https://git-scm.com/))

### First Time Setup

1. **Fork the repository**
   - Go to https://github.com/TitledGames/website
   - Click the "Fork" button in the top-right corner
   - This creates your own copy of the project

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/website.git
   cd website
   ```

3. **Open the project**
   - Open the `website` folder in your text editor
   - You should see files like `index.html`, `styles.css`, and `script.js`

4. **View the website locally**
   - Simply open `index.html` in your web browser
   - You can drag and drop the file into your browser
   - Or right-click the file and choose "Open with" → Your Browser

---

## Development Workflow

### Basic Git Workflow

Here's the typical process for making changes:

```bash
# 1. Make sure you have the latest code
git pull origin main

# 2. Create a new branch for your changes
git checkout -b my-feature-name

# 3. Make your changes to the files
# (edit HTML, CSS, or JavaScript)

# 4. Test your changes in the browser

# 5. Stage your changes
git add .

# 6. Commit your changes with a descriptive message
git commit -m "Add description of what you changed"

# 7. Push your changes to GitHub
git push origin my-feature-name

# 8. Create a Pull Request on GitHub
```

### Branch Naming

Use descriptive names for your branches:
- `add-new-game` - When adding a new game
- `fix-mobile-menu` - When fixing a bug
- `update-about-section` - When updating content
- `improve-animations` - When enhancing features

---

## Making Changes

### Common Tasks

#### 1. Changing Text Content

**Where**: `index.html`

Find the text you want to change and update it:

```html
<!-- Before -->
<p class="tagline">We do games</p>

<!-- After -->
<p class="tagline">We create amazing games</p>
```

#### 2. Changing Colors

**Where**: `styles.css`

Update the CSS variables at the top of the file:

```css
:root {
    /* Change the primary color */
    --primary-color: #FF9966;  /* Change this value */
    
    /* Or change text colors */
    --light-text: #333333;
}
```

Color formats you can use:
- Hex: `#FF9966`
- RGB: `rgb(255, 153, 102)`
- RGBA (with transparency): `rgba(255, 153, 102, 0.8)`
- Named colors: `orange`, `blue`, `red`

#### 3. Adding a New Game

**Where**: `index.html` in the Games section

```html
<div class="games-grid">
    <!-- Add your game here -->
    <div class="game-info">
        <h3>Your Game Name</h3>
        <p>Description of your game</p>
        <div class="game-action">
            <a href="your-game.html" class="btn btn-primary">Play Now</a>
        </div>
    </div>
</div>
```

#### 4. Modifying Animations

**Where**: `styles.css` under "UTILITIES AND ANIMATIONS"

Example animation:

```css
@keyframes myAnimation {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply to an element */
.my-element {
    animation: myAnimation 1s ease-out;
}
```

#### 5. Adding JavaScript Functionality

**Where**: `script.js`

Add your code at the end of the file:

```javascript
// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const myButton = document.getElementById('myButton');
    
    myButton.addEventListener('click', function() {
        console.log('Button clicked!');
    });
});
```

---

## Testing Your Changes

### Manual Testing Checklist

Before submitting your changes, test:

- [ ] **Desktop View**: View in full-screen browser
- [ ] **Mobile View**: Resize browser to mobile size (or use DevTools)
- [ ] **Dark Mode**: Toggle dark mode to ensure it still works
- [ ] **All Browsers**: Test in Chrome, Firefox, Safari, or Edge if possible
- [ ] **Navigation**: Click all menu items to ensure links work
- [ ] **Scroll Behavior**: Scroll through the page to test animations
- [ ] **Buttons and Links**: Click all interactive elements
- [ ] **Console Errors**: Open DevTools (F12) and check for JavaScript errors

### Using Browser DevTools

1. **Open DevTools**
   - Windows/Linux: Press `F12` or `Ctrl+Shift+I`
   - Mac: Press `Cmd+Option+I`

2. **Mobile Testing**
   - Click the device icon (Toggle Device Toolbar)
   - Select different device sizes
   - Test responsive behavior

3. **Console Messages**
   - Click the "Console" tab
   - Look for red error messages
   - Fix any errors before submitting

4. **Element Inspector**
   - Right-click any element → "Inspect"
   - See HTML structure and CSS styles
   - Try modifications live (temporary)

---

## Submitting Your Work

### Creating a Pull Request

1. **Push your changes**
   ```bash
   git push origin your-branch-name
   ```

2. **Go to GitHub**
   - Visit https://github.com/TitledGames/website
   - You'll see a banner suggesting to create a Pull Request
   - Click "Compare & pull request"

3. **Fill out the PR template**
   - **Title**: Brief description (e.g., "Add new game to homepage")
   - **Description**: Explain what you changed and why
   - **Screenshots**: Include before/after images if applicable

4. **Submit and wait for review**
   - Project maintainers will review your changes
   - They may request modifications
   - Once approved, your changes will be merged!

### Good Commit Messages

Write clear commit messages:

**Good Examples:**
- `Add Microwave Man game to homepage`
- `Fix mobile menu not closing on link click`
- `Update about section with new mission statement`
- `Improve animation performance on scroll`

 **Bad Examples:**
- `fix`
- `update`
- `changes`
- `asdf`

**Format:**
```
Brief summary (50 characters or less)

More detailed explanation if needed (wrap at 72 characters).
Explain what changed and why, not how.

- Bullet points are okay
- Use present tense: "Add feature" not "Added feature"
```

---

## Code Style Guidelines

### HTML

```html
<!-- Use semantic HTML tags -->
<section> instead of <div> for sections
<nav> for navigation
<footer> for footer
<article> for game cards

<!-- Proper indentation (2 or 4 spaces) -->
<section>
    <div>
        <p>Content</p>
    </div>
</section>

<!-- Descriptive IDs and classes -->
<div id="about-section" class="content-container">

<!-- Include alt text for images -->
<img src="logo.png" alt="Titled Games Logo">
```

### CSS

```css
/* Comment sections clearly */
/* ============================================
   SECTION NAME
   Description of what this section does
   ============================================ */

/* Use consistent spacing */
.my-class {
    property: value;
    another-property: value;
}

/* Group related properties */
.element {
    /* Position */
    position: relative;
    top: 0;
    
    /* Size */
    width: 100%;
    height: auto;
    
    /* Visual */
    background: white;
    color: black;
    
    /* Text */
    font-size: 16px;
    font-weight: bold;
}

/* Use CSS variables for repeated values */
:root {
    --primary-color: #FF9966;
}

.button {
    background: var(--primary-color);
}
```

### JavaScript

```javascript
// Use descriptive variable and function names
const navigationMenu = document.getElementById('navMenu');

// Add comments explaining complex logic
// Calculate particle position based on viewport size
const particleX = Math.random() * window.innerWidth;

// Use consistent formatting
function myFunction() {
    if (condition) {
        doSomething();
    } else {
        doSomethingElse();
    }
}

// Check if elements exist before using them
const button = document.getElementById('myButton');
if (button) {
    button.addEventListener('click', handleClick);
}
```

### General Guidelines

1. **Consistency**: Follow the existing code style
2. **Comments**: Explain "why", not "what" (the code shows what)
3. **Simplicity**: Keep it simple and readable
4. **Accessibility**: Ensure the site is usable by everyone
5. **Performance**: Don't add unnecessary heavy libraries

---

## Getting Help

### Where to Ask Questions

1. **GitHub Discussions**
   - For general questions about the project
   - Visit the Discussions tab on GitHub

2. **Issues**
   - For bugs or feature requests
   - Create a new issue with details

3. **Discord**
   - Join our Discord: https://dsc.gg/titledgames
   - Ask in the #development channel

4. **Pull Request Comments**
   - Ask questions directly on your PR
   - Maintainers will help you

### Before Asking

1. **Check the documentation**
   - Read this CONTRIBUTING.md
   - Read docs/BEGINNER_GUIDE.md
   - Check existing issues and discussions

2. **Search for similar questions**
   - Someone may have asked the same thing
   - Look through closed issues too

3. **Try debugging yourself**
   - Use browser DevTools
   - Check the console for errors
   - Review your code carefully

### When Asking

Provide:
- What you're trying to do
- What you've tried
- What's not working (error messages, screenshots)
- Your environment (browser, OS)

**Good Question:**
> "I'm trying to change the button color to blue in styles.css, but it's not working. I changed `--primary-color` to `#0000FF` but the buttons are still orange. Here's a screenshot..."

**Not Helpful:**
> "My code doesn't work, help!"

---

## Additional Resources

### Learning More

- **[docs/BEGINNER_GUIDE.md](docs/BEGINNER_GUIDE.md)**: Complete beginner's guide to HTML, CSS, and JavaScript
- **[MDN Web Docs](https://developer.mozilla.org/)**: Comprehensive web development documentation
- **[W3Schools](https://www.w3schools.com/)**: Tutorials with examples
- **[Git Handbook](https://guides.github.com/introduction/git-handbook/)**: Learn Git basics

### Tools

- **[VS Code](https://code.visualstudio.com/)**: Popular code editor with great extensions
- **[CodePen](https://codepen.io/)**: Try out code quickly online
- **[Can I Use](https://caniuse.com/)**: Check browser compatibility
- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)**: Audit your changes for performance

---

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Give constructive feedback
- Focus on what's best for the project
- Show empathy towards others

### Not Acceptable

- Harassment or discriminatory language
- Personal attacks
- Publishing others' private information
- Any conduct that would be inappropriate in a professional setting

---

## Thank You! 

We appreciate your contributions to Titled Games! Every contribution, no matter how small, helps make our website better. 

**Remember:**
- Start small
- Ask questions
- Have fun!
- Learn as you go
