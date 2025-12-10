'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/**
 * Appointment Modal
 */

const modal = document.querySelector("#appointment-modal");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const appointmentBtns = document.querySelectorAll("[data-appointment-btn]");
const appointmentForm = document.querySelector("#appointment-form");

const openModal = function () {
  modal.classList.remove("hidden");
  // Trigger reflow to enable transition
  void modal.offsetWidth; 
  modal.classList.remove("opacity-0");
  modal.querySelector('div').classList.remove("scale-95");
  modal.querySelector('div').classList.add("scale-100");
}

const closeModal = function () {
  modal.classList.add("opacity-0");
  modal.querySelector('div').classList.remove("scale-100");
  modal.querySelector('div').classList.add("scale-95");
  
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300); // Match transition duration
}

addEventOnElem(appointmentBtns, "click", openModal);
addEventOnElem(modalCloseBtn, "click", closeModal);

// Close on outside click
modal.addEventListener("click", function(e) {
  if(e.target === modal) {
    closeModal();
  }
});

// Form submission
appointmentForm.addEventListener("submit", function(e) {
  e.preventDefault();
  // Simulate API call
  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.innerText;
  btn.innerText = "Booking...";
  btn.disabled = true;
  
  setTimeout(() => {
    alert(`Thank you! Your appointment request has been received. We will contact you shortly.`);
    btn.innerText = originalText;
    btn.disabled = false;
    this.reset();
    closeModal();
  }, 1500);
});