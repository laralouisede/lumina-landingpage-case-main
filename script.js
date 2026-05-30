const readMoreBtn = document.querySelector("#readMoreBtn");
const produktinfo = document.querySelector("#produktinfo");

readMoreBtn.addEventListener("click", function () {
  produktinfo.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const buyBtn = document.querySelector("#buyBtn");

buyBtn.addEventListener("click", function () {
  produktinfo.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
const colorOptions = document.querySelectorAll(".colorOption");
const addToCartBtn = document.querySelector("#addToCartBtn");

let selectedColor = "";

colorOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    if (option.classList.contains("active")) {
      option.classList.remove("active");
      selectedColor = "";
      return;
    }

    colorOptions.forEach(function (item) {
      item.classList.remove("active");
    });

    option.classList.add("active");

    selectedColor = option.querySelector(".colorName").textContent;

    addToCartBtn.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});

addToCartBtn.addEventListener("click", function () {
  if (selectedColor === "") {
    alert("Vælg venligst en farve først.");
  } else {
    alert("LUMINA One i farven " + selectedColor + " er tilføjet til kurven.");
  }
});

const trustpilotBtn = document.querySelector("#trustpilotBtn");

trustpilotBtn.addEventListener("click", function () {
  alert("Her ville brugeren blive sendt videre til Trustpilot-anmeldelser.");
});
