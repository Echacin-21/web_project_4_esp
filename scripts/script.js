const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
]; 

const container = document.querySelector(".container");
const elements = container.querySelector(".elements");
const page = document.querySelector(".page");
const btnClose = page.querySelector(".page__button-close");
const button = container.querySelector(".profile__button-edit");
const addCard = document.querySelector(".page__form-card-button");
const form = page.querySelector(".page__form-profile");
const addPlace = page.querySelector(".page__form-card");
const cards = document.querySelectorAll(".card");
const btnTrash = document.querySelectorAll(".card__trash");
const btnAdd = container.querySelector(".profile__button-add");
const btnHeart = element.querySelectorAll(".card__heart");
const btnRefresh = document.querySelector(".page__form-profile-button");
let btnImg = document.querySelectorAll(".card__image");
const imgContent = document.querySelector(".page__img-content");
const btnCloseImg = document.querySelector(".page__button");

form.classList.add("display-none");
addPlace.classList.add("display-none");
btnClose.classList.add("display-none");
imgContent.classList.add("display-none");

const cardContainer = document.querySelector(".card-container");

  initialCards.forEach((date) => {
    const cardTemplate = document.querySelector("#template").content;
    const cardClone = cardTemplate.querySelector(".card").cloneNode(true);
    cardClone.querySelector(".card__image").src = date.link;
    cardClone.querySelector(".card__image").alt = date.name;
    cardClone.querySelector(".card__text").textContent = date.name;

    element.append(cardClone);
  });

  //Esta función añade nuevos datos al Array, extraidos desde el form para añadir cards.
  function newCard(evt) {
    evt.preventDefault();
    const imgTittle = document.querySelector(".page__form-card-name");
    const imgUrl = document.querySelector(".page__form-card-ocupation");
  
    const datesArray = {
      name: imgTittle.value,
      link: imgUrl.value,
      like: false 
    };
    
    initialCards.unshift(datesArray);
    offForm()
    imgTittle.value = "";
    imgUrl.value = "";
    loadCard();
    
    };
  
  // Esta función sigue a la newCard() para tomar los datos alamecenados en el Array desde la posición 0 y añade una nueva carta al stio.
  function loadCard (){
    const dateCard = initialCards[0];
    const cardTemplate = document.querySelector("#template").content;
    const cardClone = cardTemplate.querySelector(".card").cloneNode(true);
    cardClone.querySelector(".card__image").src = dateCard.link;
    cardClone.querySelector(".card__text").textContent = dateCard.name;
    cardClone.querySelector(".card__image").alt = dateCard.name;
    element.prepend(cardClone);
  }

let btnActive = false;

// Función de eventos que permite borrar, dar like y disparar popUp de imagen.
document.querySelector(".elements").addEventListener("click", function (event) {
  const target = event.target;
  //Sección que controla el like en cada carta
  if (target.classList.contains("card__heart")) {
    if (!btnActive) {
      event.target.setAttribute(
        "style",
        "background-image: url(./image/Vectorheart-black.svg)"
      );

      btnActive = true;
    } else {
      event.target.removeAttribute("style");
      btnActive = false;
    }
    console.log("Botón de like clicado");
  }
// Sección que controla el trash que borra cada carta.
  if (target.classList.contains("card__trash")) {
    target.closest(".card").remove();
  }
//Sección que controla el popUp de las imágenes.
  if(target.classList.contains("card__image")){
    container.classList.add("container_filter");
    const imgContent = document.querySelector(".page__img-content");
    const imgNameElement = event.target.closest(".card").querySelector(".card__text");
    const srcImg = target.getAttribute("src");
    const img = document.querySelector(".page__img");
    img.src = srcImg;

    const imgName = imgNameElement.textContent;
    const nameElement = document.querySelector(".page__img-name");
    nameElement.textContent = imgName;

    imgContent.classList.add("display-flex");
    console.log(target);
  }
});

//Sección que controla el popUp de los formularios
function onForm() {
  form.classList.remove("display-none");
  btnClose.classList.remove("display-none");
  form.classList.add("display-flex");
  btnClose.classList.add("display-block");
  container.classList.add("container_filter");
}

//Función que cierra cualquier elemento del sitio web.
function offForm() {
  form.classList.remove("display-flex");
  addPlace.classList.remove("display-flex");
  btnClose.classList.remove("display-block");
  container.classList.remove("container_filter");
  imgContent.classList.remove("display-flex");
  form.classList.add("display-none");
  addPlace.classList.add("display-none");
  btnClose.classList.add("display-none");
  imgContent.classList.add("display-none");
}

//Función que control la apertura de form para añadir una carta.
function newplace() {
  addPlace.classList.remove("display-none");
  btnClose.classList.remove("display-none");
  addPlace.classList.add("display-flex");
  btnClose.classList.add("display-block");
  container.classList.add("container_filter");
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

button.addEventListener("click", onForm);
btnAdd.addEventListener("click", newplace);
btnClose.addEventListener("click", offForm);
btnRefresh.addEventListener("click", editprofile);
addCard.addEventListener("click", newCard);
btnCloseImg.addEventListener("click", offForm);
