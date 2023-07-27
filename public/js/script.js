// form-validation.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nameInput = document.querySelector('.name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
  
      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const subjectValue = subjectInput.value.trim();
      const messageValue = messageInput.value.trim();
  
      if (!nameValue) {
        alert('Please enter your name.');
        nameInput.focus();
        return;
      }
  
      if (!emailValue) {
        alert('Please enter your email.');
        emailInput.focus();
        return;
      }
  
      if (!subjectValue) {
        alert('Please enter the subject.');
        subjectInput.focus();
        return;
      }
  
      if (!messageValue) {
        alert('Please enter your message.');
        messageInput.focus();
        return;
      }
  
      // If the form is valid, you can submit it
      form.submit();
    });
  });
  