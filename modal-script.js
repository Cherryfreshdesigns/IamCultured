// Subscribe Modal Script
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  function initModal() {
    // Get modal elements
    var modal = document.getElementById('subscribe-modal');
    var btn = document.getElementById('subscribe-modal-btn');
    var closeBtn = document.querySelector('.subscribe-modal-close');
    var iframe = document.getElementById('constant-contact-frame');
    
    if (!modal || !btn) {
      console.warn('Subscribe modal elements not found');
      return;
    }
    
    // Open modal when button is clicked
    btn.addEventListener('click', function() {
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
      
      // Add CSS to hide elements inside iframe after it loads
      if (iframe) {
        iframe.addEventListener('load', function() {
          try {
            // Inject CSS into iframe to hide unwanted elements
            var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            var style = iframeDoc.createElement('style');
            style.textContent = `
              /* Hide Constant Contact footer */
              .ctct-form-footer,
              .ctct-form-footer-wrapper,
              footer,
              [class*="footer"],
              .ctct-form-custom-footer {
                display: none !important;
              }
              
              /* Hide image container header */
              .image_container,
              .ctct-form-header,
              [class*="image-container"],
              [class*="header-image"] {
                display: none !important;
              }
              
              /* Adjust form to fill space */
              body {
                margin: 0 !important;
                padding: 0 !important;
              }
              
              .ctct-form-wrapper,
              .ctct-form-container {
                margin-top: 0 !important;
                padding-top: 0 !important;
              }
            `;
            iframeDoc.head.appendChild(style);
          } catch (e) {
            // Cross-origin restriction - will use alternative method
            console.info('Cannot access iframe content due to cross-origin restrictions. Footer and header may still be visible.');
          }
        });
      }
    });
    
    // Close modal when X is clicked
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      });
    }
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModal);
  } else {
    initModal();
  }
})();
