import { newCard, newplace, editprofile, classValidation, objValidation} from "./index.js";

const container = document.querySelector(".container");
const page = document.querySelector(".page");
const btnClose = page.querySelectorAll(".page__button-close");
const button = container.querySelector(".profile__button-edit");
const addCard = document.querySelector(".page__form-card-button");
const addPlace = page.querySelector(".page__form-content-card");
const btnAdd = container.querySelector(".profile__button-add");
const btnRefresh = document.querySelector(".page__form-profile-button");
const imgContent = document.querySelector(".page__img-content");
const btnCloseImg = document.querySelector(".page__button");
const formProfile = page.querySelector(".page__form-content");
const clickContent = document.querySelectorAll(".page__form-content-click");

//Sección que controla el popUp de los formularios
function onForm() {
    classValidation(objValidation);
    formProfile.classList.remove("display-none");
    formProfile.classList.add("display-flex");
    formProfile.style.animation = "popupOn .5s ease-in-out";
    container.classList.add("container_filter");
    clickOffPopupON();
  }
  
  //Función que cierra cualquier elemento del sitio web.
  function offForm() {
    formProfile.style.animation = "popupOff .3s linear";
    addPlace.style.animation = "popupOff .3s linear";
    imgContent.style.animation = "popupOff .3s linear";
  
    setTimeout(function () {
      formProfile.classList.remove("display-flex");
      formProfile.classList.add("display-none");
      addPlace.classList.remove("display-flex");
      container.classList.remove("container_filter");
      imgContent.classList.remove("display-flex");
      addPlace.classList.add("display-none");
      imgContent.classList.add("display-none");
    }, 250);
  
    clickOffPopupOff();
  }

// Eventos de click
button.addEventListener("click", onForm);

btnAdd.addEventListener("click", newplace);
btnClose.forEach((evt) => {
  formProfile.style.animation = "popupOff .5s linear";
  evt.addEventListener("click", offForm);
});

btnRefresh.addEventListener("click", editprofile);
addCard.addEventListener("click", newCard);
btnCloseImg.addEventListener("click", offForm);

//Evento controla el cierre de elementos al presionar la tecla escape
page.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    offForm();
  }
});

//Evento controla el cierre de elementos al hacer "click" fuera de ellos
function clickOffPopupON() {
  clickContent.forEach((evt) => {
    evt.addEventListener("click", function (evt) {
      if (
        evt.target === formProfile ||
        evt.target === addPlace ||
        evt.target === imgContent
      ) {
        offForm();
      }
    });
  });
}

function clickOffPopupOff() {
    clickContent.forEach((evt) => {
      evt.removeEventListener("click", clickContent);
    });
  }

export {clickOffPopupON, offForm, onForm};

