# Quick Start Guide

## What Was Built

A complete modal button solution for the I am Cultured website (iamcultured.org) that displays an embedded Constant Contact subscription form.

## Features

✅ Professional modal with fade-in animation
✅ Embedded Constant Contact form from https://lp.constantcontactpages.com/sl/IAybakU/subscribe
✅ Multiple ways to close the modal (X button, outside click, Escape key)
✅ Responsive design for all devices
✅ Prevents page scrolling when modal is open
✅ Attempts to hide Constant Contact footer and image_container header
✅ No external dependencies (vanilla JavaScript)
✅ Compatible with other scripts (uses addEventListener)
✅ HTML5 compliant
✅ Security scanned (no vulnerabilities)

## Files Overview

### For Implementation
- **squarespace-implementation.html** - Complete all-in-one file. Use this for the easiest implementation!
- **IMPLEMENTATION-GUIDE.md** - Detailed step-by-step instructions

### Individual Components (if you prefer separate files)
- **modal-button.html** - Just the HTML structure
- **modal-styles.css** - Just the CSS styling
- **modal-script.js** - Just the JavaScript functionality

### For Testing & Reference
- **demo.html** - Local test page (open in browser to see it work)
- **README.md** - Project overview

## Fastest Way to Implement in Squarespace

1. Copy the entire contents of `squarespace-implementation.html`
2. In Squarespace, edit the page where you want the button
3. Add a "Code Block"
4. Paste the code
5. Save and publish
6. Done! ✅

## Need More Control?

If you want the button available site-wide or prefer to customize the implementation, see `IMPLEMENTATION-GUIDE.md` for:
- Code Injection method (site-wide availability)
- Customization options (colors, sizes, button text)
- Troubleshooting tips
- Alternative solutions for hiding the footer/header

## Important Notes

### Cross-Origin Restrictions
Due to browser security (CORS), the JavaScript cannot directly modify content inside the Constant Contact iframe. This means:
- The footer and image_container MAY still be visible in the embedded form
- The form will still work perfectly for submissions
- If you need to hide these elements, you have these options:
  1. Contact Constant Contact support for a custom embed
  2. Modify the form in the Constant Contact form builder
  3. Use the form as-is (it still works fine!)

### Browser Compatibility
Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Testing Locally

1. Open `demo.html` in any web browser
2. Click the "Subscribe to Newsletter" button
3. The modal should open with the embedded form
4. Test all close methods (X button, outside click, Escape key)

## Support

If you encounter any issues:
1. Check `IMPLEMENTATION-GUIDE.md` for troubleshooting
2. Verify the Constant Contact URL is correct
3. Check browser console for any errors
4. Ensure you don't have ad blockers blocking the iframe

---

**That's it! You now have a fully functional subscribe modal button for your I am Cultured website! 🎉**
