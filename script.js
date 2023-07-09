const form = document.querySelector(".cta-form");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = form.elements.email.value;
  if (validateEmail(email)) {
    saveEmailAddress(email);
    showThankYouMessage();
  } else {
    showErrorMessage("Please enter a valid email address.");
  }
});

function validateEmail(email) {
  // Add your email validation logic here, or use HTML5 email validation by setting the 'pattern' attribute on the input element.
  // Return true if the email is valid; otherwise, return false.
}

function saveEmailAddress(email) {
  // Implement your backend or data storage logic to save the email address securely.
  // Ensure compliance with global data protection regulations (e.g., GDPR).
  const response = grecaptcha.getResponse();
  console.log("reCap Res ", response);
  if (response === "") {
    // Show an error message or take appropriate action if reCAPTCHA validation fails.
    return;
  }
}

function showThankYouMessage() {
  const container = document.querySelector(".container");
  container.innerHTML =
    "<h1>Thank you for signing up!</h1><p>We will notify you about the beta release coming soon.</p>";
}

function showErrorMessage(message) {
  errorMessage.textContent = message;
}
