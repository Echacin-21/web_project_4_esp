let container = document.querySelector(".container");
let page = document.querySelector(".page");
let btnClose = page.querySelector(".page__button-close");
let button = container.querySelector(".profile__button-edit");
let form = page.querySelector(".page__form-profile");
let addPlace = page.querySelector(".page__form-card");
let element = container.querySelector(".elements");
let cards = document.querySelectorAll(".card");
let btnTrash = element.querySelectorAll(".card__trash");
let btnAdd = container.querySelector(".profile__button-add");
let btnHeart = element.querySelectorAll(".card__heart");
let profile = container.querySelector(".profile__info");
let btnRefresh = document.querySelector(".page__form-profile-button");

form.classList.add("display-none");
addPlace.classList.add("display-none");
btnClose.classList.add("display-none");

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
  form.classList.add("display-none");
  addPlace.classList.add("display-none");
  btnClose.classList.add("display-none");
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
  let name = document.querySelector(".profile__name");
  let description = document.querySelector(".profile__description");
  let profileocupation = document.querySelector(".page__form-profile-ocupation");
  let editname = document.querySelector(".page__form-profile-name");
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

button.addEventListener("click", onForm);
btnAdd.addEventListener("click", newplace);
btnClose.addEventListener("click", offForm);
btnRefresh.addEventListener("click", editprofile);
