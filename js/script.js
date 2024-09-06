new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //breakpoints responsivo 
  breakpoints: {
      0: {
          slidesPerview: 1
      },
      768: {
          slidesPerview: 2
      },
      1024: {
          slidesPerview: 3
      },
  }
});
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
const itemToggle = this.getAttribute('aria-expanded');

for (i = 0; i < items.length; i++) {
  items[i].setAttribute('aria-expanded', 'false');
}

if (itemToggle == 'false') {
  this.setAttribute('aria-expanded', 'true');
}
}

items.forEach(item => item.addEventListener('click', toggleAccordion));