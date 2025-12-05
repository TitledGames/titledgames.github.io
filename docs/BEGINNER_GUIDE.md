# Beginner's Guide to Web Development

Welcome! This guide will help you understand the basics of HTML, CSS, and JavaScript, and how they work together to create the Titled Games website.

## Table of Contents
1. [What is a Website?](#what-is-a-website)
2. [HTML Basics](#html-basics)
3. [CSS Basics](#css-basics)
4. [JavaScript Basics](#javascript-basics)
5. [How These Work Together](#how-these-work-together)
6. [Understanding the Titled Games Website](#understanding-the-titled-games-website)
7. [Making Your First Changes](#making-your-first-changes)

---

## What is a Website?

A website is made up of three main technologies:

- **HTML** (HyperText Markup Language): The structure and content
- **CSS** (Cascading Style Sheets): The styling and appearance
- **JavaScript**: The interactive behavior

Think of building a house:
- HTML is the walls, floors, and rooms (structure)
- CSS is the paint, furniture, and decorations (style)
- JavaScript is the electricity, plumbing, and smart home features (functionality)

---

## HTML Basics

HTML uses "tags" to define different parts of a webpage. Tags are wrapped in angle brackets `< >`.

### Basic Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Welcome!</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

### Common HTML Tags

| Tag | Purpose | Example |
|-----|---------|---------|
| `<h1>` to `<h6>` | Headings (h1 is largest) | `<h1>Main Title</h1>` |
| `<p>` | Paragraph | `<p>Some text here</p>` |
| `<a>` | Link | `<a href="url">Click here</a>` |
| `<img>` | Image | `<img src="image.jpg" alt="Description">` |
| `<div>` | Container/Division | `<div>Content here</div>` |
| `<span>` | Inline container | `<span>Text</span>` |
| `<button>` | Button | `<button>Click me</button>` |
| `<ul>` and `<li>` | Unordered list | `<ul><li>Item 1</li></ul>` |

### Attributes

Tags can have attributes that provide additional information:

```html
<a href="https://example.com" target="_blank">Link</a>
    ↑          ↑                     ↑
  tag      attribute           attribute value
```

Common attributes:
- `id`: Unique identifier for an element
- `class`: Group of elements with similar styling
- `href`: URL for links
- `src`: Source for images
- `alt`: Alternative text for images

---

## CSS Basics

CSS controls how HTML elements look. It follows this pattern:

```css
selector {
    property: value;
}
```

### Example

```css
/* Make all h1 tags blue */
h1 {
    color: blue;
    font-size: 32px;
}

/* Style elements with class "button" */
.button {
    background-color: orange;
    padding: 10px;
    border-radius: 5px;
}

/* Style the element with id "header" */
#header {
    height: 60px;
}
```

### Selectors

| Selector | Meaning | Example |
|----------|---------|---------|
| `h1` | All h1 tags | `h1 { color: blue; }` |
| `.classname` | All elements with that class | `.button { }` |
| `#idname` | Element with that id | `#header { }` |
| `div p` | All p tags inside div | `div p { }` |
| `div > p` | Direct p children of div | `div > p { }` |

### Common CSS Properties

```css
/* Text Styling */
color: blue;                    /* Text color */
font-size: 16px;               /* Text size */
font-weight: bold;             /* Text thickness */
text-align: center;            /* Text alignment */

/* Box Model */
width: 200px;                  /* Width */
height: 100px;                 /* Height */
padding: 10px;                 /* Space inside */
margin: 20px;                  /* Space outside */
border: 1px solid black;       /* Border */

/* Backgrounds */
background-color: white;       /* Background color */
background-image: url('...');  /* Background image */

/* Layout */
display: flex;                 /* Flexbox layout */
display: grid;                 /* Grid layout */
position: relative;            /* Positioning */

/* Effects */
border-radius: 10px;           /* Rounded corners */
box-shadow: 0 2px 10px rgba(0,0,0,0.1);  /* Shadow */
opacity: 0.5;                  /* Transparency */
```

### The Box Model

Every HTML element is a box with:
```
┌─────────────────────────────────────┐
│         Margin (outside)            │
│  ┌──────────────────────────────┐  │
│  │      Border                  │  │
│  │  ┌────────────────────────┐  │  │
│  │  │    Padding             │  │  │
│  │  │  ┌──────────────────┐  │  │  │
│  │  │  │   Content        │  │  │  │
│  │  │  │  (text/images)   │  │  │  │
│  │  │  └──────────────────┘  │  │  │
│  │  └────────────────────────┘  │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

## JavaScript Basics

JavaScript adds interactivity to your website. It can respond to user actions, modify content, and create animations.

### Basic Syntax

```javascript
// This is a comment

// Variables store data
let name = "Titled Games";
const maxScore = 100;

// Functions perform actions
function greetUser() {
    console.log("Hello!");
}

// Call the function
greetUser();
```

### Selecting HTML Elements

```javascript
// Get element by ID
const button = document.getElementById('myButton');

// Get element by class (returns first match)
const header = document.querySelector('.header');

// Get all elements with a class
const items = document.querySelectorAll('.item');
```

### Responding to Events

```javascript
// Click event
button.addEventListener('click', function() {
    console.log('Button was clicked!');
});

// Mouse hover
element.addEventListener('mouseenter', function() {
    console.log('Mouse entered!');
});

// Page loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page is ready!');
});
```

### Modifying Elements

```javascript
// Change text content
element.textContent = 'New text';

// Change HTML content
element.innerHTML = '<strong>Bold text</strong>';

// Add/remove CSS classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('open');

// Change styles
element.style.color = 'blue';
element.style.fontSize = '20px';
```

---

## How These Work Together

Here's a simple example showing HTML, CSS, and JavaScript working together:

**HTML** (structure):
```html
<button id="colorButton">Change Color</button>
<div id="box" class="box">Hello!</div>
```

**CSS** (styling):
```css
.box {
    width: 200px;
    height: 200px;
    background-color: blue;
    color: white;
    padding: 20px;
}

.box.red {
    background-color: red;
}
```

**JavaScript** (interactivity):
```javascript
const button = document.getElementById('colorButton');
const box = document.getElementById('box');

button.addEventListener('click', function() {
    box.classList.toggle('red');
});
```

**Result**: When you click the button, the box changes from blue to red!

---

## Understanding the Titled Games Website

Our website has three main files:

### 1. index.html
This file contains the structure of the entire website. It's organized into sections:

- **Navigation bar** (`<nav>`): The menu at the top
- **Hero section** (`<section id="home">`): The big landing area
- **About section** (`<section id="about">`): Company information
- **Games section** (`<section id="games">`): Our game listings
- **Contact section** (`<section id="contact">`): Social links
- **Footer** (`<footer>`): Bottom information

Each section is clearly commented with `<!-- comments -->` explaining what it does.

### 2. styles.css
This file makes everything look good. It's organized in this order:

1. **CSS Variables**: Colors and sizes we use throughout the site
2. **Reset and Base Styles**: Basic styling for all elements
3. **Navigation**: Styling for the top menu
4. **Hero Section**: Styling for the main landing area
5. **About Section**: Styling for the about us area
6. **Games Section**: Styling for game cards
7. **Contact Section**: Styling for social links
8. **Footer**: Styling for the bottom
9. **Utilities**: Helper styles and animations
10. **Responsive Design**: Adjustments for mobile devices

### 3. script.js
This file adds interactivity. It includes:

- **Navigation**: Mobile menu toggle
- **Particles**: Animated background effects
- **Scroll Animations**: Elements fade in as you scroll
- **Back to Top Button**: Button to quickly scroll to top
- **Dark Mode**: Toggle between light and dark themes
- **Seasonal Decorations**: Special themes for holidays

---

## Making Your First Changes

Let's make some simple changes to understand how everything works!

### Change 1: Update Text

**Goal**: Change "We do games" to something else

1. Open `index.html`
2. Find this line (around line 67):
   ```html
   <p class="tagline">We do games</p>
   ```
3. Change it to:
   ```html
   <p class="tagline">We create awesome games</p>
   ```
4. Save the file and refresh your browser!

### Change 2: Modify Colors

**Goal**: Change the main orange color to purple

1. Open `styles.css`
2. Find the `:root` section at the top (around line 29)
3. Change:
   ```css
   --primary-color: #FF9966;
   ```
   To:
   ```css
   --primary-color: #9966FF;
   ```
4. Save and refresh - everything orange is now purple!

### Change 3: Add Your Own Section

**Goal**: Add a new section to the website

1. Open `index.html`
2. Before the footer (around line 158), add:
   ```html
   <section id="new-section" class="about">
       <div class="container">
           <h2 class="section-title">My New Section</h2>
           <p>This is my first custom section!</p>
       </div>
   </section>
   ```
3. Open `styles.css` and add custom styling if you want:
   ```css
   #new-section {
       background-color: lightblue;
   }
   ```
4. Save both files and refresh!

### Change 4: Add Button Functionality

**Goal**: Make a button do something when clicked

1. In `index.html`, add a button somewhere:
   ```html
   <button id="myButton">Click Me!</button>
   ```
2. In `script.js`, at the end of the file, add:
   ```javascript
   // My custom button
   const myButton = document.getElementById('myButton');
   if (myButton) {
       myButton.addEventListener('click', function() {
           alert('Hello from your button!');
       });
   }
   ```
3. Save and test your button!

---

## Tips for Success

1. **Start Small**: Make tiny changes and test them immediately
2. **Use Browser DevTools**: 
   - Right-click → Inspect to see HTML/CSS
   - Press F12 to open developer tools
   - Use the Console tab to see JavaScript errors
3. **Read the Comments**: Our code is heavily commented - use them as a guide!
4. **Don't Be Afraid to Break Things**: You can always undo with Git
5. **Ask Questions**: If something doesn't make sense, ask the team!
6. **Test on Different Devices**: Check how your changes look on mobile

---

## Useful Resources

### Learning Platforms
- [MDN Web Docs](https://developer.mozilla.org/) - The best reference for web technologies
- [W3Schools](https://www.w3schools.com/) - Tutorials with try-it-yourself examples
- [freeCodeCamp](https://www.freecodecamp.org/) - Free interactive coding lessons
- [CSS-Tricks](https://css-tricks.com/) - Great CSS guides and tips

### Tools
- [CodePen](https://codepen.io/) - Try out HTML/CSS/JS code quickly
- [Can I Use](https://caniuse.com/) - Check browser compatibility
- [CSS Gradient Generator](https://cssgradient.io/) - Create gradients visually
- [Google Fonts](https://fonts.google.com/) - Free fonts for your website

### Browser DevTools
- **Chrome DevTools**: F12 or Right-click → Inspect
- **Firefox DevTools**: F12 or Right-click → Inspect Element
- Use the Elements tab to see HTML and CSS
- Use the Console tab to see JavaScript messages and errors
- Use the Network tab to see what files are loading

---

## Next Steps

Once you're comfortable with the basics:

1. Read through all three files (HTML, CSS, JS) completely
2. Try making small improvements to the website
3. Learn about Git for version control
4. Explore responsive design for mobile devices
5. Look into CSS animations and transitions
6. Study JavaScript frameworks (when you're ready!)
