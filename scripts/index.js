import { initialCards } from "./array.js";
import { Card } from "./Card.js";
import { formValidator } from "./FormValidator.js";
import { offForm, clickOffPopupON} from "./utils.js";  


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
const addPlace = page.querySelector(".page__form-content-card");
const imgContent = document.querySelector(".page__img-content");
const formProfile = page.querySelector(".page__form-content");

formProfile.classList.add("display-none");
addPlace.classList.add("display-none");
imgContent.classList.add("display-none");

function classCard(data) {
  const cards = new Card(data, "#template");
  cards.generateCard();
  cards._EventListeners();
}

initialCards.forEach((data) => {
  classCard(data);
});

function classValidation(objValidation) {
  const validate = new formValidator(objValidation);
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

classValidation(objValidation);

export {newCard, newplace, editprofile, classCard, classValidation, objValidation};

