# Subscribe Modal Button Implementation Guide

This implementation provides a button that opens a modal containing an embedded Constant Contact subscription form from https://lp.constantcontactpages.com/sl/IAybakU/subscribe

## Files Included

1. **modal-button.html** - HTML structure for the button and modal
2. **modal-styles.css** - CSS styling for the modal, button, and animations
3. **modal-script.js** - JavaScript functionality for opening/closing the modal
4. **squarespace-implementation.html** - Complete all-in-one file for Squarespace

## Features

- ✅ Clean modal overlay with fade-in animation
- ✅ Embedded Constant Contact form in an iframe
- ✅ Responsive design (works on mobile, tablet, and desktop)
- ✅ Close modal by clicking X, clicking outside, or pressing Escape
- ✅ Attempts to hide Constant Contact footer and image_container header
- ✅ Prevents body scroll when modal is open
- ✅ Form submission works as expected for Constant Contact

## Implementation in Squarespace

### Option 1: Using Code Injection (Recommended)

1. **Go to Squarespace Settings**
   - Navigate to: Settings → Advanced → Code Injection

2. **Add to Header Code Injection**
   ```html
   <style>
   /* Paste the contents of modal-styles.css here */
   </style>
   ```

3. **Add to Footer Code Injection**
   ```html
   <!-- Modal Structure -->
   <div id="subscribe-modal" class="subscribe-modal">
     <div class="subscribe-modal-content">
       <span class="subscribe-modal-close">&times;</span>
       <div class="subscribe-modal-body">
         <iframe 
           id="constant-contact-frame"
           src="https://lp.constantcontactpages.com/sl/IAybakU/subscribe" 
           width="100%" 
           height="600" 
           scrolling="yes"
           title="Subscribe Newsletter">
         </iframe>
       </div>
     </div>
   </div>
   
   <script>
   // Paste the contents of modal-script.js here
   </script>
   ```

4. **Add the Button to Your Page**
   - Edit the page where you want the button to appear
   - Add a Code Block and paste:
   ```html
   <button id="subscribe-modal-btn" class="subscribe-button">Subscribe to Newsletter</button>
   ```
   - Or use the all-in-one file `squarespace-implementation.html`

### Option 2: Using a Code Block

1. Edit the page where you want the modal button
2. Add a Code Block
3. Copy the entire contents of `squarespace-implementation.html`
4. Paste it into the Code Block
5. Save and publish

## Customization

### Change Button Text
Edit this line in the HTML:
```html
<button id="subscribe-modal-btn" class="subscribe-button">Subscribe to Newsletter</button>
```

### Change Button Colors
In the CSS, modify these values:
```css
.subscribe-button {
  background-color: #007bff; /* Change button color */
  color: white; /* Change text color */
}

.subscribe-button:hover {
  background-color: #0056b3; /* Change hover color */
}
```

### Change Modal Size
In the CSS, modify:
```css
.subscribe-modal-content {
  max-width: 600px; /* Change modal width */
}
```

### Adjust Iframe Height
In the HTML, modify:
```html
<iframe ... height="600" ...>
```

## Cross-Origin Limitations

Due to browser security (Cross-Origin Resource Sharing), the JavaScript cannot directly access and modify the content inside the Constant Contact iframe. This means:

- ⚠️ The footer and image_container may still be visible in the embedded form
- ✅ The form will still function correctly for submissions
- ✅ Users can complete and submit the form without issues

### Alternative Solutions for Hiding Elements

If the footer and header are still visible and you want to hide them:

1. **Contact Constant Contact Support**: Ask them to provide a custom embed code without the footer and header
2. **Use Custom CSS in Constant Contact**: If you have access to the form editor, remove or hide these elements in the Constant Contact form builder
3. **Create a Custom Form**: Build your own form that submits to Constant Contact's API

## Testing

1. Click the subscribe button - modal should open
2. Verify the Constant Contact form loads inside the modal
3. Fill out the form and submit - should work normally
4. Test closing the modal:
   - Click the X button
   - Click outside the modal
   - Press Escape key
5. Test on different devices (mobile, tablet, desktop)

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Modal doesn't open:**
- Check browser console for errors
- Ensure the button has the correct ID: `subscribe-modal-btn`
- Verify JavaScript is loaded after the HTML elements

**Form doesn't load:**
- Check your internet connection
- Verify the Constant Contact URL is correct
- Check if there are any ad blockers blocking the iframe

**Footer/Header still visible:**
- This is expected due to cross-origin restrictions
- Contact Constant Contact for a custom embed without these elements
- Or modify the form in the Constant Contact form builder

## Support

For issues or questions about this implementation, please open an issue in the repository.

## License

This code is provided as-is for use with the I am Cultured website (iamcultured.org).
