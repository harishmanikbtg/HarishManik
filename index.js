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
          document.getElementById("contactForm").reset();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};

//selectors
const themeToggleBtn = document.querySelector(".theme-toggle");
const smallMenu = document.querySelectorAll(".smallMenu");
const toggleBtn = document.querySelector("#toggleBtn");
const leftBtn = document.querySelector("#leftBtn");
const closeBtn = document.querySelector("#closeBtn");
const pageBlur = document.querySelector(".pageBlur");
const smallMenuItem1 = document.querySelector('.smallMenuItem1');
const smallMenuItem2 = document.querySelector('.smallMenuItem2');
const smallMenuItem3 = document.querySelector('.smallMenuItem3');
const smallMenuItem4 = document.querySelector('.smallMenuItem4');

//state
const theme = localStorage.getItem("theme");

//on mount
theme && document.body.classList.add(theme);

//handlers
handleThemeToggle = () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
};

handleToggleBtn = () => {
  smallMenu.forEach((item) => {
    item.style.display = "flex";
  });

  pageBlur.style.display = "block";
};

handleCloseBtn = () => {
  smallMenu.forEach((item) => {
    item.style.display = "none";
  });

  pageBlur.style.display = "none";
};

//events
themeToggleBtn.addEventListener("click", handleThemeToggle);

toggleBtn.addEventListener("click", handleToggleBtn);

closeBtn.addEventListener("click", handleCloseBtn);

smallMenuItem1.addEventListener('click', handleCloseBtn);
smallMenuItem2.addEventListener('click', handleCloseBtn);
smallMenuItem3.addEventListener('click', handleCloseBtn);
smallMenuItem4.addEventListener('click', handleCloseBtn);
