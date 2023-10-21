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

//selectors
const themeToggleBtn = document.querySelector('.theme-toggle');

//state
const theme = localStorage.getItem('theme');

//on mount
theme && document.body.classList.add(theme);

//handlers
handleThemeToggle = () =>{
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem('theme', 'dark-mode');
  }else{
    localStorage.removeItem('theme');
  }
}

//events
themeToggleBtn.addEventListener('click', handleThemeToggle);