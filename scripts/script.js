const container = document.querySelector(".container");
const elements = container.querySelector(".elements");
const page = document.querySelector(".page");
const btnClose = page.querySelector(".page__button-close");
const button = container.querySelector(".profile__button-edit");
const addCard = document.querySelector(".page__form-card-button");
const form = page.querySelector(".page__form-profile");
const addPlace = page.querySelector(".page__form-card");
const element = container.querySelector(".elements");
const cards = document.querySelectorAll(".card");
const btnTrash = document.querySelectorAll(".card__trash");
const btnAdd = container.querySelector(".profile__button-add");
const btnHeart = element.querySelectorAll(".card__heart");
const profile = container.querySelector(".profile__info");
const btnRefresh = document.querySelector(".page__form-profile-button");
let btnImg = document.querySelectorAll(".card__image");
const imgContent = document.querySelector(".page__img-content");
const btnCloseImg = document.querySelector(".page__button");

form.classList.add("display-none");
addPlace.classList.add("display-none");
btnClose.classList.add("display-none");
imgContent.classList.add("display-none");

function onForm() {
  form.classList.remove("display-none");
  btnClose.classList.remove("display-none");
  form.classList.add("display-flex");
  btnClose.classList.add("display-block");
  container.classList.add("container_filter");
}

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

function newplace() {
  addPlace.classList.remove("display-none");
  btnClose.classList.remove("display-none");
  addPlace.classList.add("display-flex");
  btnClose.classList.add("display-block");
  container.classList.add("container_filter");
}

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

btnTrash.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    if (cards[index]) {
      cards[index].remove();
    }
  });
});

btnHeart.forEach((boton, index) => {
  let btnActive = false;
  boton.addEventListener("click", () => {
    if (!btnActive) {
      btnHeart[index].setAttribute(
        "style",
        "background-image: url(./image/Vectorheart-black.svg)"
      );
      btnActive = true;
    } else {
      btnHeart[index].removeAttribute("style");
      btnActive = false;
    }
  });
});

function newCard(evt) {
  evt.preventDefault();
  const imgTittle = document.querySelector(".page__form-card-name");
  const imgUrl = document.querySelector(".page__form-card-ocupation");

  const cardTemplate = document.querySelector("#template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src = imgUrl.value;
  cardElement.querySelector(".card__text").textContent = imgTittle.value;
  cardElement
    .querySelector(".card__trash")
    .addEventListener("click", function (evt) {
      const cardContainer = cardElement.parentElement;
      cardContainer.removeChild(cardElement);
    });
  let btnActive = false;
  cardElement
    .querySelector(".card__heart")
    .addEventListener("click", function (evt) {
      if (!btnActive) {
        evt.target.setAttribute(
          "style",
          "background-image: url(./image/Vectorheart-black.svg)"
        );

        btnActive = true;
      } else {
        evt.target.removeAttribute("style");
        btnActive = false;
      }
    });

  cardElement.querySelector(".card__image").addEventListener("click", function (evt) {
    container.classList.add("container_filter");
    console.log("pulsaste la imagen");
    const cardImage = document.querySelectorAll(".card__image");
    const imgContent = document.querySelector(".page__img-content");
    const imgNameElement = document.querySelectorAll(".card__text");
    const srcImg = cardImage.getAttribute("src");
    const img = document.querySelector(".page__img");
    img.src = srcImg;

      // const imgName = imgNameElement[index].textContent;
      // const nameElement = document.querySelector(".page__img-name");
      // nameElement.textContent = imgName;

    imgContent.classList.add("display-flex");
  });

  elements.append(cardElement);

  imgTittle.value = "";
  imgUrl.value = "";

  offForm();
}

// Abrir popup de imagen.
btnImg.forEach((imagen, index) => {
  imagen.addEventListener("click", () => {
    container.classList.add("container_filter");
    console.log("pulsaste la imagen");
    const imgContent = document.querySelector(".page__img-content");
    const imgNameElement = document.querySelectorAll(".card__text");
    const srcImg = btnImg[index].getAttribute("src");
    const img = document.querySelector(".page__img");
    img.src = srcImg;

    const imgName = imgNameElement[index].textContent;
    const nameElement = document.querySelector(".page__img-name");
    nameElement.textContent = imgName;

    imgContent.classList.add("display-flex");
  });
});

button.addEventListener("click", onForm);
btnAdd.addEventListener("click", newplace);
btnClose.addEventListener("click", offForm);
btnRefresh.addEventListener("click", editprofile);
addCard.addEventListener("click", newCard);
btnCloseImg.addEventListener("click", offForm);

//   openImage(btnImg.src);
// });
