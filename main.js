
document.addEventListener("DOMContentLoaded", function() {
  const fullNameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const sendButton = document.getElementById("send-button");

  sendButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (fullName !== "" && email !== "" && message !== "") {
      // All fields are filled, change button text and perform your send action
      sendButton.innerText = "Sent";
      sendButton.style.width = "40%";
      // Change the button's style
      sendButton.disabled = true; // Optionally disable the button to prevent further clicks
      // You can implement your sending logic here
    } else {
      // Not all fields are filled, keep the button black
      sendButton.style.width = "50%";
      sendButton.innerText = "Fill in first";
      
    }
  });
});
