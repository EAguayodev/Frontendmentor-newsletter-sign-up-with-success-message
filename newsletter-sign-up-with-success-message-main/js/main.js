document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup");
  const successMessage = document.getElementById("success");

  
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Handle form submission, for example, by sending data to a server.

    // Check if the successMessage element exists before accessing its style property
    if (successMessage) {
      successMessage.style.display = "block";
    }

    // Check if the signupForm element exists before accessing its style property
    if (signupForm) {
      signupForm.style.display = "none";
    }
  });

  // Define dismissSuccessMessage globally
  window.dismissSuccessMessage = function() {
    // Check if the successMessage element exists before accessing its style property
    if (successMessage) {
      successMessage.style.display = 'none';
    }

    // Check if the signin element exists before accessing its style property
    const signin = document.getElementById('signin');
    if (signin) {
      signin.style.display = 'block';
    }
  };
  document.getElementById('email').addEventListener('input', function () {
            var emailInput = this.value;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailRegex.test(emailInput)) {
                document.getElementById('error-message').style.display = 'none';
            } else {
                document.getElementById('error-message').style.display = 'block';
            }
        });
});