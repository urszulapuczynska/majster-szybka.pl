// Sticky navigation//
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    treshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// /////////Dropdown offer////////

const btnOfferEl1 = document.querySelector(".button-1");
const offerCardEl1 = document.querySelector(".offer-description-1");

btnOfferEl1.addEventListener("click", function () {
  offerCardEl1.classList.toggle("open");
});

const btnOfferEl2 = document.querySelector(".button-2");
const offerCardEl2 = document.querySelector(".offer-description-2");

btnOfferEl2.addEventListener("click", function () {
  offerCardEl2.classList.toggle("open");
});

const btnOfferEl3 = document.querySelector(".button-3");
const offerCardEl3 = document.querySelector(".offer-description-3");

btnOfferEl3.addEventListener("click", function () {
  offerCardEl3.classList.toggle("open");
});

////address popup/////
const btnPopUpEl = document.getElementById("adres");
const ctaSectEl = document.querySelector(".cta-box");
const popUpEl = document.querySelector(".popup-container");
const btnClosePopupEl = document.getElementById("zamknij");

btnPopUpEl.addEventListener("click", function toggle() {
  ctaSectEl.classList.toggle("pop-active");
  popUpEl.classList.toggle("pop-active");
});

btnClosePopupEl.addEventListener("click", function () {
  ctaSectEl.classList.remove("pop-active");
  popUpEl.classList.remove("pop-active");
});

// carousel//

const slider = tns({
  container: ".my-slider",
  mode: "carousel",
  slideBy: "1",
  speed: 500,
  nav: false,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  loop: true,
  edgePadding: 20,

  responsive: {
    1600: {
      items: 5,
      gutter: 20,
    },
    1300: {
      items: 4,
      gutter: 20,
    },

    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    500: {
      items: 1,
      gutter: 20,
    },
    400: {
      items: 1,
      gutter: 20,
    },
    300: {
      items: 1,
      gutter: 20,
    },
  },
});
