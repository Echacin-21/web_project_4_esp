import { initialCards } from "./array.js";
import { Card } from "./cards.js";
import { Validations } from "./validate.js";

const objValidation = {
  formSelector: ".page__popup-form",
  inputSelector: ".page__form-input",
  submitButtonSelector: ".page__form-submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

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

formProfile.classList.add("display-none");
addPlace.classList.add("display-none");
imgContent.classList.add("display-none");

const cardContainer = document.querySelector(".card-container");

function classCard(data) {
  const cards = new Card(data, "#template");
  cards.generateCard();
  cards._EventListeners();
}

initialCards.forEach((data) => {
  classCard(data);
});

function classValidation(objValidation) {
  const validate = new Validations(objValidation);
  validate._enableValidation();
}

//Esta función añade nuevos datos al Array, extraidos desde el form para añadir cards.
function newCard(evt) {
  evt.preventDefault();
  const imgTittle = document.querySelector(".page__form-card-name");
  const imgUrl = document.querySelector(".page__form-card-ocupation");

  const datesArray = {
    name: imgTittle.value,
    link: imgUrl.value,
  };

  initialCards.unshift(datesArray);
  offForm();
  imgTittle.value = "";
  imgUrl.value = "";
  loadCard();
}

// Esta función sigue a la newCard() para tomar los datos alamecenados en el Array desde la posición 0 y añade una nueva carta al stio.
function loadCard() {
  const dateCard = initialCards[0];
  classCard(dateCard);
}

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

//Función que control la apertura de form para añadir una carta.
function newplace() {
  classValidation(objValidation);
  addPlace.classList.remove("display-none");
  addPlace.classList.add("display-flex");
  container.classList.add("container_filter");
  addPlace.style.animation = "popupOn .5s linear";
  clickOffPopupON();
}

// Función que controla la edición de datos del perfil.
function editprofile(evt) {
  evt.preventDefault();
  const name = document.querySelector(".profile__name");
  const description = document.querySelector(".profile__description");
  const profileocupation = document.querySelector(".page__form-profile-ocupation");
  const editname = document.querySelector(".page__form-profile-name");
  name.textContent = editname.value;
  description.textContent = profileocupation.value;
  editname.value = "Jacques Cousteau";
  profileocupation.value = "Explorador";
  offForm();
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

//funcion que elimina el evento de "click" fuera de los elementos
function clickOffPopupOff() {
  clickContent.forEach((evt) => {
    evt.removeEventListener("click", clickContent);
  });
}

classValidation(objValidation);

export { clickOffPopupON };
