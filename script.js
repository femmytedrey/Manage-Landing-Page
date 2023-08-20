const parentContainers = document.querySelectorAll('.parent1, .parent2, .parent3, .parent4');
const circleIndicators = document.querySelector('.circle-indicators');

// Create circle indicators for each parent container
parentContainers.forEach(() => {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circleIndicators.appendChild(circle);
});

const containerWidth = parentContainers[0].clientWidth; // Assuming all containers have the same width

const updateActiveCircle = () => {
  const scrollPos = document.querySelector('.middle2bottomtop1').scrollLeft;
  const activeIndex = Math.floor(scrollPos / containerWidth);

  const activeCircle = circleIndicators.querySelector('.circle.active');
  if (activeCircle) {
    activeCircle.classList.remove('active');
  }
  circleIndicators.children[activeIndex].classList.add('active');
};

// Handle scroll event to update active circle
document.querySelector('.middle2bottomtop1').addEventListener('scroll', updateActiveCircle);

// Update active circle initially
updateActiveCircle();


const setHamburger = () => {
    const hamburger = document.querySelector('.hamburger');
    const closehamburger = document.querySelector('.closehamburger');
    const menu = document.querySelector('.list1');

    hamburger.addEventListener('click', () =>{
      hamburger.style.display = 'none';
      closehamburger.style.display = 'block';
      menu.style.display = 'block';
    });

    closehamburger.addEventListener('click', () =>{
      hamburger.style.display = 'block';
      closehamburger.style.display = 'none';
      menu.style.display = 'none';
    });
}

setHamburger();

const letsValidateEmail = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const emailInput = document.getElementById("Email");
    const emailError = document.querySelector(".error-message");

    form.addEventListener("submit", function (event) {
        if (!validateEmail()) {
            event.preventDefault();
        }
    });

    emailInput.addEventListener("input", function () {
        clearErrorMessage();
    });

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = emailInput.value.trim();

        clearErrorMessage();

        if (emailValue === "") {
            displayErrorMessage("Email cannot be empty.");
            return false;
        } else if (!emailRegex.test(emailValue)) {
            displayErrorMessage("Please insert a valid email!");
            return false;
        } else {
            return true;
        }
    }

    function displayErrorMessage(message) {
        emailError.textContent = message;
        emailInput.classList.add("error");
        
    }

    function clearErrorMessage() {
        emailError.textContent = "";
        emailInput.classList.remove("error");
    }
  });
}

letsValidateEmail()

