 // Activate Bootstrap scrollspy on the main nav element
   
 const navBar = document.body.querySelector('#navBar');
 if (navBar) {
     new bootstrap.ScrollSpy(document.body, {
         target: '#navBar'
     });
 };