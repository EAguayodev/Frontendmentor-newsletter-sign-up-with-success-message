# Frontend Mentor - Newsletter sign-up form with success message solution

## Table of contents
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Links

- Solution URL: [Github](hhttps://github.com/EAguayodev?tab=repositories)
- Live Site URL: [Vercel](https://frontendmentor-newsletter-sign-up-with-success-message.vercel.app/)

## My process
Objective: Implement an efficient and user-friendly process for capturing email addresses through a newsletter sign-up form, and display a success message upon successful submission.

Tools Used: HTML, CSS, JavaScript

Process Details:

1.HTML Structure:

Create a form element that includes:
An input field for the email address, set with type="email" to ensure proper formatting.
A submission button that users can click to send their email address.
Include a hidden success message box within the HTML that will be displayed upon successful submission.
Example HTML:


2.CSS Styling:

Style the form and input fields to align with the website's aesthetic.
Use CSS to initially hide the success message box using a class that sets display: none;.
Prepare a class for showing the success message that changes the display property when an email is successfully submitted.

3.JavaScript Logic:

Add event listeners to the form submission to prevent the default form submission behavior.
Validate the email input to ensure it contains a properly formatted email address.
On successful validation, hide the form and display the success message box.
If there is an error in the email format, display an appropriate error message without submitting the form.

Outcome:

The form provides an intuitive and visually appealing way for users to sign up for the newsletter.
Upon entering a valid email address and clicking the subscribe button, the user immediately sees a confirmation message, enhancing the user experience and confirming the successful submission.

### Built with

- HTML5
- CSS
- Flexbox
- Javascript
- Desktop-first workflow

### What I learned



```html
  <picture>
        <source media="(min-width: 640px;)" alt="Desktop" srcset="assets/images/illustration-sign-up-desktop.svg">
        <source media="(min-width: 400px;)" alt="Mobile" srcset="assets/images/illustration-sign-up-mobile.svg">
        <img class="illustration" src="assets/images/illustration-sign-up-desktop.svg">
      </picture>
```
```css
.container {
  width: 900px;
  height: 630px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
```js
document.getElementById('email').addEventListener('input', function () {
            var emailInput = this.value;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(emailInput)) {
                document.getElementById('error-message').style.display = 'none';
            } else {
                document.getElementById('error-message').style.display = 'block';
                document.getElementById('email').style.backgroundColor = 'hsl(0, 100%, 96%)';
                document.getElementById('email').style.color = 'hsl(4, 100%, 67%)';
                document.getElementById('email').style.border = '1px solid hsl(4, 100%, 67%)';
            }
        });
});
```

### Continued development

1. Deep Dive into Form Validation
Purpose: Ensure user input is correct, safe, and useful.
Activities: Study JavaScript validation techniques such as regex patterns and conditional statements.
Build a multi-step form that includes validation for email, password strength, and numerical inputs.Integrate custom error messages and real-time validation feedback. 

2.Mastering DOM Manipulation
Purpose: Improve user interaction and interface dynamics through proficient DOM scripting.
Activities:
Explore methods like getElementById, querySelector, and manipulation of innerHTML and textContent.
Create a dynamic content update project where elements on the page change based on user input without refreshing the page.
Practice event handling for common events such as clicks, mouse movements, and key presses.

3.Implementing Hamburger Display Menus
Purpose: Develop skills in creating responsive navigation for mobile-first websites.
Activities:
Study CSS for hiding and displaying menu elements with transitions.
Use JavaScript to toggle menu visibility with a hamburger icon on mobile devices.
Implement and test the menu in various browsers and devices to ensure compatibility and responsiveness.

### Useful resources

- [codehim](https://www.codehim.com/forms/newsletter-sign-up-form-with-success-message/) - This helped me for figuring out where to start the window document in javascript to display the success message after the user submits their correct email address.
- [w3schools](https://www.w3schools.com/js/js_htmldom_css.asp) - This is a good resource which helped me finally understand where and how to use document.getElementById('id); when using statements for submitting the error colors based on users submission of their email address.


## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev)
- Twitter - [@eric_emaildev](https://www.twitter.com/eric_emaildev)

## Acknowledgments

Want to give credit to the author Asif Mughal codehim.com for giving me inspiration on how to tackle using javascript to achieve displaying the success window after successful email address submission.
