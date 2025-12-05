# Setup Guide for First-Time Contributors

This guide will help you set up everything you need to contribute to the Titled Games website.

## What You'll Need

### Required
1. **A computer** (Windows, Mac, or Linux)
2. **A web browser** (Chrome, Firefox, Safari, or Edge)
3. **A text editor** (see recommendations below)
4. **Git** (version control system)
5. **A GitHub account** (free)

### Optional but Recommended
- **Discord** (to join our community)
- **GitHub Desktop** (if you prefer a visual interface over command line)

---

## Step-by-Step Setup

### Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up" in the top-right corner
3. Follow the registration process
4. Verify your email address

**Done!** You now have a GitHub account.

---

### Step 2: Install Git

Git is a tool that tracks changes to your code and helps you collaborate with others.

#### Windows

1. Download Git from [git-scm.com](https://git-scm.com/download/win)
2. Run the installer
3. Use default settings (just keep clicking "Next")
4. Verify installation:
   - Open "Command Prompt" or "PowerShell"
   - Type: `git --version`
   - You should see something like `git version 2.x.x`

#### Mac

**Option 1: Using Homebrew (recommended)**
```bash
# Install Homebrew first if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Git
brew install git
```

**Option 2: Download Installer**
1. Download from [git-scm.com](https://git-scm.com/download/mac)
2. Run the installer
3. Follow the prompts

**Verify installation:**
```bash
git --version
```

#### Linux

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install git
```

**Fedora:**
```bash
sudo dnf install git
```

**Verify installation:**
```bash
git --version
```

---

### Step 3: Configure Git

Tell Git who you are so your commits are attributed to you:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Use the same email address you used for GitHub.

**Verify your configuration:**
```bash
git config --list
```

---

### Step 4: Choose a Text Editor

You need a text editor to write code. Here are some popular options:

#### Visual Studio Code (Recommended for Beginners)
- **Website**: [code.visualstudio.com](https://code.visualstudio.com/)
- **Cost**: Free
- **Why**: Easy to use, many helpful extensions, built-in Git support

**Installation:**
1. Download from the website
2. Run the installer
3. Follow the setup wizard

**Recommended Extensions for VS Code:**
- Live Server (preview your website instantly)
- Prettier (auto-format your code)
- HTML CSS Support
- JavaScript (ES6) code snippets

**Install extensions:**
1. Open VS Code
2. Click the Extensions icon (square icon on left sidebar)
3. Search for each extension
4. Click "Install"

#### Other Good Options

**Sublime Text**
- Website: [sublimetext.com](https://www.sublimetext.com/)
- Fast and lightweight
- Free to try, $99 for license

**Notepad++** (Windows only)
- Website: [notepad-plus-plus.org](https://notepad-plus-plus.org/)
- Free and simple
- Good for quick edits

**Atom** (No longer maintained but still works)
- Website: [atom.io](https://atom.io/)
- Free and open source
- Similar to VS Code

---

### Step 5: Fork and Clone the Repository

#### Fork the Repository

A "fork" is your own copy of the project on GitHub.

1. Go to [github.com/TitledGames/website](https://github.com/TitledGames/website)
2. Click the "Fork" button in the top-right corner
3. Wait a few seconds for GitHub to create your fork
4. You now have your own copy at `github.com/YOUR-USERNAME/website`

#### Clone Your Fork

"Cloning" downloads the code to your computer.

**Using Command Line:**
```bash
# Navigate to where you want to store the project
cd Documents  # or wherever you prefer

# Clone your fork (replace YOUR-USERNAME with your GitHub username)
git clone https://github.com/YOUR-USERNAME/website.git

# Enter the project folder
cd website

# Add the original repository as "upstream" (for getting updates)
git remote add upstream https://github.com/TitledGames/website.git
```

**Using GitHub Desktop:**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Click "Clone a Repository from the Internet"
4. Select your fork from the list
5. Choose where to save it
6. Click "Clone"

---

### Step 6: Open the Project

#### In VS Code
1. Open VS Code
2. Click "File" → "Open Folder"
3. Navigate to the `website` folder you cloned
4. Click "Select Folder"

#### In Other Editors
- Use the "Open Folder" or "Open Project" menu option
- Navigate to the cloned `website` folder

---

### Step 7: View the Website Locally

#### Option 1: Direct File Opening
1. Navigate to the project folder in your file explorer
2. Find `index.html`
3. Double-click it (or right-click → Open with → Your Browser)
4. The website opens in your browser!

#### Option 2: Using Live Server (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` in VS Code
3. Select "Open with Live Server"
4. Website opens with auto-reload on save!

---

### Step 8: Make Your First Change

Let's make a simple change to test everything works:

1. **Open** `index.html` in your text editor
2. **Find** the line with "We do games" (around line 67)
3. **Change** it to "We create games"
4. **Save** the file (Ctrl+S or Cmd+S)
5. **Refresh** your browser
6. **See** your change!

**Undo the change:**
- Press Ctrl+Z (or Cmd+Z) to undo
- Save again

---

### Step 9: Join the Community

#### Join our Discord
1. Visit [dsc.gg/titledgames](https://dsc.gg/titledgames)
2. Create a Discord account if you don't have one
3. Join our server
4. Say hi in the #introductions channel!

#### Watch the Repository
1. Go to [github.com/TitledGames/website](https://github.com/TitledGames/website)
2. Click the "Watch" button in the top-right
3. Select "All Activity"
4. You'll get notifications about updates

---

## Troubleshooting

### Git Issues

**Problem**: `git: command not found`
- **Solution**: Git isn't installed or not in PATH. Reinstall Git and restart your terminal.

**Problem**: Permission denied when cloning
- **Solution**: Make sure you're cloning your fork, not the original repository.

**Problem**: HTTPS authentication issues
- **Solution**: Use SSH instead, or use GitHub Desktop for easier authentication.

### Editor Issues

**Problem**: Can't see file extensions
- **Windows**: Open File Explorer → View → Show file extensions
- **Mac**: Finder → Preferences → Advanced → Show all filename extensions

**Problem**: Changes not showing in browser
- **Solution**: Hard refresh the page (Ctrl+F5 on Windows, Cmd+Shift+R on Mac)

### Website Issues

**Problem**: Website looks broken when opened locally
- **Solution**: Make sure you're opening `index.html`, not other files
- **Solution**: Check browser console for errors (F12 → Console tab)

**Problem**: Changes to CSS/JS not appearing
- **Solution**: Clear browser cache or hard refresh
- **Solution**: Make sure you saved the file

---

## Next Steps

Now that you're all set up:

1. **Read the Documentation**
   - [Beginner's Guide](BEGINNER_GUIDE.md) - Learn HTML, CSS, JavaScript
   - [Contributing Guide](../CONTRIBUTING.md) - How to contribute
   - [Quick Reference](QUICK_REFERENCE.md) - Common tasks

2. **Find an Issue to Work On**
   - Go to [Issues page](https://github.com/TitledGames/website/issues)
   - Look for labels like `good first issue` or `help wanted`
   - Comment on an issue to let others know you're working on it

3. **Make Your First Contribution**
   - Create a new branch: `git checkout -b my-feature`
   - Make your changes
   - Test thoroughly
   - Commit: `git commit -m "Description of changes"`
   - Push: `git push origin my-feature`
   - Create a Pull Request on GitHub

4. **Keep Learning**
   - Work through tutorials in the [Beginner's Guide](BEGINNER_GUIDE.md)
   - Try making small changes to understand the code
   - Ask questions in Discord or GitHub Discussions

---

## Useful Commands Reference

### Git Basics
```bash
# Check status of your changes
git status

# See what changed
git diff

# Create a new branch
git checkout -b branch-name

# Switch to a branch
git checkout branch-name

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin branch-name

# Get latest changes from original repo
git fetch upstream
git merge upstream/main
```

### File Navigation
```bash
# See current directory
pwd

# List files
ls        # Mac/Linux
dir       # Windows

# Change directory
cd folder-name

# Go up one level
cd ..

# Go to home directory
cd ~
```

---

## Getting Help

### Before Asking
1. Check this setup guide
2. Read error messages carefully
3. Search Google for the error message
4. Check our documentation

### Where to Ask
- **Discord**: Quick questions, general help
- **GitHub Issues**: Bug reports, feature requests
- **GitHub Discussions**: Longer discussions, ideas
- **Stack Overflow**: General programming questions

### How to Ask Good Questions
1. Describe what you're trying to do
2. Show what you've tried
3. Include error messages (copy the full text)
4. Share screenshots if relevant
5. Mention your operating system and software versions

**Good question example:**
> "I'm trying to run `git clone` but I get 'permission denied'. I'm on Windows 10 and installed Git today. Here's the full error message: [error text]"

**Not helpful:**
> "Git doesn't work, help!"

---

## Additional Resources

### Learning Git
- [GitHub's Git Guide](https://guides.github.com/introduction/git-handbook/)
- [Git Tutorial for Beginners](https://www.youtube.com/watch?v=8JJ101D3knE)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

### Learning Web Development
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn)
- [freeCodeCamp](https://www.freecodecamp.org/)
- [W3Schools](https://www.w3schools.com/)

### Tools
- [GitHub Desktop](https://desktop.github.com/)
- [VS Code](https://code.visualstudio.com/)
- [Git Documentation](https://git-scm.com/doc)

---

## Checklist

Before you start contributing, make sure you have:

- [ ] GitHub account created
- [ ] Git installed and configured
- [ ] Text editor installed
- [ ] Repository forked
- [ ] Repository cloned to your computer
- [ ] Website opens in browser
- [ ] Can make and see changes
- [ ] Joined our Discord (optional but recommended)
- [ ] Read the Contributing Guide
- [ ] Read the Beginner's Guide

---

**Congratulations!** 🎉 You're all set up and ready to contribute to Titled Games!

If you run into any issues, don't hesitate to ask for help in our [Discord](https://dsc.gg/titledgames) or on [GitHub](https://github.com/TitledGames/website/issues).

Welcome to the team! 🚀🎮
