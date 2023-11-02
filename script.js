let clickedDots = document.getElementsByClassName("testimonialDots");
let testimonialToShow = document.getElementById("item-testimonial");
let button = document.getElementById("learn-more");

for (let i = 0; i < clickedDots.length; i++) {
  clickedDots[i].addEventListener("click", (e) => {
    testimonialToShow.style.display = "block";
  });
}

button.addEventListener("click", (e) => {
    form.style.display = "block";
});

const openPopupButton = document.getElementById('learn-more');
const closePopupButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const popupForm = document.getElementById('popupForm');

openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});


