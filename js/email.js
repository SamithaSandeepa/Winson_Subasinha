function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_6tkfa8p";
  const templateID = "template_89jnmts";

  emailjs.send(serviceID, templateID, params).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);

      // Clear the form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      // Display a success message
      alert("Your message has been sent successfully!");
    },
    function (error) {
      console.log("FAILED...", error);

      // Optionally, display an error message
      alert("Failed to send the message. Please try again.");
    }
  );
}
