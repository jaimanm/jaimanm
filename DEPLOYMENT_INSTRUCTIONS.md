# GitHub Pages Deployment Instructions

## Overview

Your refactored personal website is now ready to be deployed to GitHub Pages. This guide will walk you through the process of updating your existing GitHub Pages site with the new version.

## Prerequisites

1. You have an existing GitHub repository for your personal website (likely `jaimanm.github.io`)
2. You have access to your GitHub account
3. Git is installed on your local machine

## Deployment Steps

### Method 1: Direct Upload (Recommended for Quick Deployment)

1. **Navigate to your GitHub repository:**
   - Go to https://github.com/jaimanm/jaimanm.github.io
   - Click on the repository name

2. **Upload the new files:**
   - Click the "Add file" dropdown button
   - Select "Upload files"
   - Drag and drop all the files from your local `/mnt/okcomputer/output` directory
   - Make sure to include:
     - `index.html`
     - `projects.html`
     - `about.html`
     - `contact.html`
     - `main.js`
     - `resources/` folder (with all images)
     - `DEPLOYMENT_INSTRUCTIONS.md`

3. **Commit the changes:**
   - Add a commit message like "Refactor website with quantum portfolio features"
   - Click "Commit changes"

4. **Wait for deployment:**
   - GitHub Pages will automatically deploy your changes within 1-2 minutes
   - Your updated site will be available at https://jaimanm.github.io

### Method 2: Using Git Command Line

1. **Clone your repository locally:**
   ```bash
   git clone https://github.com/jaimanm/jaimanm.github.io.git
   cd jaimanm.github.io
   ```

2. **Remove old files (optional):**
   ```bash
   rm -rf *
   ```

3. **Copy new files:**
   ```bash
   cp -r /mnt/okcomputer/output/* .
   ```

4. **Add and commit changes:**
   ```bash
   git add .
   git commit -m "Refactor website with quantum portfolio features"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin main
   ```

### Method 3: Using GitHub Desktop

1. **Clone your repository in GitHub Desktop**
2. **Replace the old files with the new ones**
3. **Commit and push the changes**
4. **GitHub Pages will automatically deploy**

## What's New in This Version

### Major Changes

1. **Quantum Portfolio Section:**
   - Interactive 3D Q-Sphere Navigator using Three.js
   - Quantum Circuit visualization with clickable gates
   - Measurement histogram showing skill distribution
   - Wavefunction collapse animation for project selection

2. **UX & Styling Improvements:**
   - Fixed achievement card animations (removed constant shaking)
   - Updated color scheme with neon blue and violet accents
   - Removed "Black Belt" from achievements
   - Removed "Office Hours" from contact page
   - Enhanced hover effects with subtle glow

3. **Technical Enhancements:**
   - Added D3.js for data visualization
   - Improved Three.js integration
   - Better responsive design for mobile
   - Enhanced quantum particle animations

### File Structure

```
jaimanm.github.io/
├── index.html              # Main page with Q-Sphere Navigator
├── projects.html           # Project showcase
├── about.html              # Personal story and achievements
├── contact.html            # Contact form and information
├── main.js                 # Core JavaScript functionality
├── resources/              # Images and assets
│   ├── hero-quantum.jpg
│   ├── bloch-sphere.jpg
│   ├── neural-network.jpg
│   ├── gesture-cv.jpg
│   ├── wildfire-sat.jpg
│   ├── parkinson-tech.jpg
│   ├── quantum-lab.jpg
│   ├── github-contrib.jpg
│   ├── eagle-scout.jpg
│   └── profile-avatar.jpg
└── DEPLOYMENT_INSTRUCTIONS.md
```

## Verifying the Deployment

1. **Check the live site:**
   - Visit https://jaimanm.github.io
   - Test the Q-Sphere Navigator (rotate and click "Measure")
   - Verify the quantum circuit gates are clickable
   - Check that achievement cards have subtle hover effects

2. **Test all pages:**
   - Navigate to Projects, About, and Contact pages
   - Ensure all links work correctly
   - Test the contact form submission

3. **Mobile responsiveness:**
   - Check the site on your phone or using browser dev tools
   - Verify the Q-Sphere and other elements work on smaller screens

## Troubleshooting

### If the site doesn't update immediately:
1. Wait 2-3 minutes for GitHub Pages to deploy
2. Clear your browser cache
3. Try a hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

### If images don't load:
1. Check that the `resources` folder was uploaded correctly
2. Verify image file names match the HTML references
3. Ensure images are in the correct directory

### If JavaScript doesn't work:
1. Check browser console for errors (F12 → Console)
2. Ensure all CDN links are working
3. Verify the `main.js` file was uploaded

## Customization Options

### To modify the Q-Sphere:
- Edit the `QSphereNavigator` class in `main.js`
- Adjust sphere size, colors, or animation speed
- Add more projects by modifying the `projectData` array

### To change colors:
- Update the Tailwind config in each HTML file
- Modify CSS custom properties in the `<style>` sections

### To add new projects:
1. Add project data to the `projectData` array in `main.js`
2. Update the quantum circuit SVG gates
3. Add corresponding images to the `resources` folder

## Performance Considerations

- The Q-Sphere uses WebGL (Three.js) which may not work on very old devices
- Images are optimized but consider using WebP format for better compression
- The site uses multiple CDN libraries; consider using a build process for production

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all files are present in the repository
3. Test with different browsers and devices
4. Review the GitHub Pages documentation: https://docs.github.com/en/pages

---

Your refactored website is now ready for deployment! The quantum-themed design with interactive elements will make your portfolio stand out while maintaining professional functionality.