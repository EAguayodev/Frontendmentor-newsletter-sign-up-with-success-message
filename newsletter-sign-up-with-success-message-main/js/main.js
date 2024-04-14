document.addEventListener('DOMContentLoaded', function(){
    const signUpForm = document.getElementById('signup-form');
    const successMessage = document.getElementById("success");

    signUpForm.addEventListener('submit', function (e) {
        e.preventDefault();
         // Handle form submission, for example, by sending data to a server.

         // Check if the successMessage element exists before accessing its style property
    if (successMessage) {
        successMessage.style.display = "block";
      }

      // Check if the signupForm element exists before accessing its style property
    if (signUpForm) {
        signUpForm.style.display = "none";
      }
    })
});



 // Check if the successMessage element exists before accessing its style property
window.dismissSuccessMessage = function () {
    if (successMessage) {
        successMessage.style.display = 'none';
      }
  
      // Check if the signin element exists before accessing its style property
      const signin = document.getElementById('signin');
      if (signin) {
        signin.style.display = 'block';
      }

    
}

document.getElementById('email').addEventListener('input', function () {
    const emailInput = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        document.getElementById('error-message').style.display = 'none';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

