const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
const container = document.querySelector(".container");
// const elements = container.querySelector(".elements");
const page = document.querySelector(".page");
const btnClose = page.querySelectorAll(".page__button-close");
const button = container.querySelector(".profile__button-edit");
const addCard = document.querySelector(".page__form-card-button");
const addPlace = page.querySelector(".page__form-content-card");
const cards = document.querySelectorAll(".card");
const btnTrash = document.querySelectorAll(".card__trash");
const btnAdd = container.querySelector(".profile__button-add");
const btnRefresh = document.querySelector(".page__form-profile-button");
const btnImg = document.querySelectorAll(".card__image");
const imgContent = document.querySelector(".page__img-content");
const btnCloseImg = document.querySelector(".page__button");
const formProfile = page.querySelector(".page__form-content");
const profileName = formProfile.querySelector(".form__input");
const clickContent = document.querySelectorAll(".page__form-content-click");

formProfile.classList.add("display-none");
addPlace.classList.add("display-none");
imgContent.classList.add("display-none");

const cardContainer = document.querySelector(".card-container");

function consolideCard(date) {
  const cardTemplate = document.querySelector("#template").content;
  const cardClone = cardTemplate.querySelector(".card").cloneNode(true);
  cardClone.querySelector(".card__image").src = date.link;
  cardClone.querySelector(".card__text").textContent = date.name;
  cardClone.querySelector(".card__image").alt = date.name;
  element.prepend(cardClone);
}

initialCards.forEach((date) => {
  consolideCard(date);
});

//Esta función añade nuevos datos al Array, extraidos desde el form para añadir cards.
function newCard(evt) {
  evt.preventDefault();
  const imgTittle = document.querySelector(".page__form-card-name");
  const imgUrl = document.querySelector(".page__form-card-ocupation");

  const datesArray = {
    name: imgTittle.value,
    link: imgUrl.value,
    like: false,
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
  consolideCard(dateCard);
}

// Función de eventos que permite borrar, dar like y disparar popUp de imagen.
document.querySelector(".elements").addEventListener("click", function (event) {
  const target = event.target;
  //Sección que controla el like en cada carta
  if (target.classList.contains("card__heart")) {
    if (target.textContent === "") {
      event.target.classList.add("page__buttonHrt-active");
      target.textContent = "activo";
    } else {
      event.target.classList.remove("page__buttonHrt-active");
      target.textContent = "";
    }
  }
  // Sección que controla el trash que borra cada carta.
  if (target.classList.contains("card__trash")) {
    target.closest(".card").remove();
  }
  //Sección que controla el popUp de las imágenes.
  if (target.classList.contains("card__image")) {
    container.classList.add("container_filter");
    const imgContent = document.querySelector(".page__img-content");
    const imgNameElement = event.target
      .closest(".card")
      .querySelector(".card__text");
    const srcImg = target.getAttribute("src");
    const img = document.querySelector(".page__img");
    img.src = srcImg;

    const imgName = imgNameElement.textContent;
    const nameElement = document.querySelector(".page__img-name");
    nameElement.textContent = imgName;
    imgContent.style.animation = "popupOn .3s linear";
    imgContent.classList.add("display-flex");
    clickOffPopupON();
  }
});

//Sección que controla el popUp de los formularios
function onForm() {
  formProfile.classList.remove("display-none");
  formProfile.classList.add("display-flex");
  formProfile.style.animation = "popupOn .5s ease-in-out";
  container.classList.add("container_filter");
  clickOffPopupON();
}

function displayFlex() {
  formProfile.classList.remove("display-flex");
}

//Función que cierra cualquier elemento del sitio web.
function offForm() {
  formProfile.style.animation = "popupOff .3s linear";
  addPlace.style.animation = "popupOff .3s linear";
  imgContent.style.animation = "popupOff .3s linear";

  setTimeout(function(){
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
  const profileocupation = document.querySelector(
    ".page__form-profile-ocupation"
  );
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

//funcion que eleminia el evento de "click" fuera de los elementos
function clickOffPopupOff() {
  clickContent.forEach((evt) => {
    evt.removeEventListener("click", clickContent);
  });
}
