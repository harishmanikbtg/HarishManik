window.onload = function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_hft0lkd", "template_ydc9w3w", this).then(
        function () {
          alert("Message sent!");
          document.getElementById('contactForm').reset();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
