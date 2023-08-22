let container = document.querySelector(".container");
let page = document.querySelector(".page");
let btnClose = page.querySelector(".page__button-close");
let button = container.querySelector(".profile__button-edit");
let form = page.querySelector(".page__form-profile");
let addPlace = page.querySelector(".page__form-card");
let element = container.querySelector(".elements");
let cards = document.querySelectorAll(".card");
let primeracard = cards[0];
let segundacard = cards[1];
let terceracard = cards[2];
let cuartacard = cards[3];
let quintacard = cards[4];
let sextacard = cards[5];
// let box = card.querySelector(".image-box");
let btntrash = element.querySelectorAll(".card__trash");
let btnadd = container.querySelector(".profile__button-add");

let btnheart = element.querySelectorAll(".button__heart");
let primerbtnheart = btnheart[0];
let segundobtnheart = btnheart[1];
let tercerbtnheart = btnheart[2];
let cuartobtnheart = btnheart[3];
let quintobtnheart = btnheart[4];
let sextobtnheart = btnheart[5];

let primerbtntrash = btntrash[0];
let segundobtntrash = btntrash[1];
let tercerbtntrash = btntrash[2];
let cuartobtntrash = btntrash[3];
let quintobtntrash = btntrash[4];
let sextobtntrash = btntrash[5];

let profile = container.querySelector(".profile__info");
let btnrefresh = document.querySelector(".form-profile__button");

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;

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
  addPlace.classList.add("display-none")
  btnClose.classList.add("display-none");
}

function newplace() {
  addPlace.classList.remove("display-none");
  btnClose.classList.remove("display-none");
  addPlace.classList.add("display-flex");
  btnClose.classList.add("display-block");
  container.classList.add("container_filter");
}

function editprofile() {
  let name = document.querySelector(".profile__name");
  let description = document.querySelector(".profile__description");
  let profileocupation = document.querySelector(".form-profile__ocupation");
  let editname = document.querySelector(".form-profile__name");
  name.textContent = editname.value;
  description.textContent = profileocupation.value;
  editname.value = "Jacques Cousteau";
  profileocupation.value = "Explorador";
  offForm();
}

function deletecard() {
  element.removeChild(primeracard);
}

function deletecard2() {
  element.removeChild(segundacard);
}

function deletecard3() {
  element.removeChild(terceracard);
}

function deletecard4() {
  element.removeChild(cuartacard);
}
function deletecard5() {
  element.removeChild(quintacard);
}
function deletecard6() {
  element.removeChild(sextacard);
}

function heartclick() {
  if (a == 0) {
    primerbtnheart.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    a = 1;
  } else {
    primerbtnheart.removeAttribute("style");
    a = 0;
  }
}


function heartclick2() {
  if (b == 0) {
    segundobtnheart.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
      );
    b = 1;
  } else {
    segundobtnheart.removeAttribute("style");
    b = 0;
  }
}

function heartclick3() {
  if (c == 0) {
    tercerbtnheart.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    c = 1;
  } else {
    tercerbtnheart.removeAttribute("style");
    c = 0;
  }
}

function heartclick4() {
  if (d == 0) {
    cuartobtnheart.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    d = 1;
  } else {
    cuartobtnheart.removeAttribute("style");
    d = 0;
  }
}

function heartclick5() {
  if (e == 0) {
    quintobtnheart.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    e = 1;
  } else {
    quintobtnheart.removeAttribute("style");
    e = 0;
  }
}

function heartclick6() {
  if (f == 0) {
    sextobtnheart.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    f = 1;
  } else  {
    sextobtnheart.removeAttribute("style");
    f = 0;
  }
}

button.addEventListener("click", onForm);
btnadd.addEventListener("click", newplace);
btnClose.addEventListener("click", offForm);

primerbtntrash.addEventListener("click", deletecard);
segundobtntrash.addEventListener("click", deletecard2);
tercerbtntrash.addEventListener("click", deletecard3);
cuartobtntrash.addEventListener("click", deletecard4);
quintobtntrash.addEventListener("click", deletecard5);
sextobtntrash.addEventListener("click", deletecard6);

primerbtnheart.addEventListener("click", heartclick);
segundobtnheart.addEventListener("click", heartclick2);
tercerbtnheart.addEventListener("click", heartclick3);
cuartobtnheart.addEventListener("click", heartclick4);
quintobtnheart.addEventListener("click", heartclick5);
sextobtnheart.addEventListener("click", heartclick6);

btnrefresh.addEventListener("click", editprofile);
