// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Client
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
      delay: 8000,
    },
    breakpoints: {
      640: {
        centeredSlides: true,
        slidesPerView: 1.25,
      },
      1024: {
        centeredSlides: false,
        slidesPerView: 1.5,
      },
    },
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form untuk mengirimkan data secara langsung

    // Mengambil nilai dari input
    const form = this;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    emailjs
      .send("service_nxl354x", "template_lgi71mr", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(function (response) {
        console.log("Email terkirim:", response);
        showPopup(
          "Succes",
          "Your message has been successfully sent",
          "I appreciate your feedback"
        );
        form.reset();
      })
      .catch(function (error) {
        console.error("Terjadi kesalahan saat mengirim email:", error);
        showPopup(
          "Error",
          "An error occurred while sending the email",
          "Please try again later"
        );
      });
  });

// Menampilkan popup
function showPopup(title, message, expresion) {
  const popup = document.getElementById("popup");
  popup.classList.remove("invisible");

  const popupTitle = document.querySelector("#popup-content h2");
  const popupMessage = document.querySelector("#popup-content p");
  const popupExpresion = document.querySelector("#popup-content span");

  popupTitle.textContent = title;
  popupMessage.textContent = message;
  popupExpresion.textContent = expresion;

  const closePopup = document.getElementById("close-popup");
  closePopup.addEventListener("click", function () {
    popup.classList.add("invisible");
  });
}

// image slider
