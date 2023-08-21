let container = document.querySelector(".container");
let page = document.querySelector(".page");
let btnClose = page.querySelector(".page__button-close");
let button = container.querySelector(".profile__button-edit");
let form = page.querySelector(".page__form-profile");
let addPlace = page.querySelector(".page__form-card");
let element = container.querySelector(".elements");
let card = document.querySelector(".card");
let box = card.querySelector(".image-box");
let btntrash = element.querySelector(".card__trash");
let btnadd = container.querySelector(".profile__button-add");
let btnheart = element.querySelector(".button__heart");
let btnheart2 = element.querySelector(".heart2");
let btnheart3 = element.querySelector(".heart3");
let btnheart4 = element.querySelector(".heart4");
let btnheart5 = element.querySelector(".heart5");
let btnheart6 = element.querySelector(".heart6");
let card2 = element.querySelector(".card2");
let btntrash2 = element.querySelector(".trash2");
let card3 = element.querySelector(".card3");
let btntrash3 = element.querySelector(".trash3");
let card4 = element.querySelector(".card4");
let btntrash4 = element.querySelector(".trash4");
let card5 = element.querySelector(".card5");
let btntrash5 = element.querySelector(".trash5");
let card6 = element.querySelector(".card6");
let btntrash6 = element.querySelector(".trash6");
let profile = container.querySelector(".profile__info");
let btnrefresh = document.querySelector(".form-profile__button");
let y = 0;
let y2 = 0;
let y3 = 0;
let y4 = 0;
let y5 = 0;
let y6 = 0;

function onForm() {
  console.log("click");
  form.setAttribute("style", "display: flex");
  container.setAttribute("style", "filter:brightness(0.4);");
  btnClose.setAttribute("style", "display: block");
}

function offForm() {
  form.setAttribute("style", "display: none");
  addPlace.setAttribute("style", "display: none");
  container.setAttribute("style", "filter:brightness(1);");
  btnClose.setAttribute("style", "display: none");
}

function newplace() {
  addPlace.setAttribute("style", "display: flex");
  btnClose.setAttribute("style", "display: block");
  container.setAttribute("style", "filter:brightness(0.4);");
}

function editprofile() {
  let name = document.querySelector(".profile__name");
  let description = document.querySelector(".profile__description");
  let profileocupation = document.querySelector(".form-profile__ocupation");
  let editname = document.querySelector(".form-profile__name");
  name.innerHTML = editname.value;
  description.innerHTML = profileocupation.value;
  editname.value = "Jacques Cousteau";
  profileocupation.value = "Explorador";
  offForm();
}

function deletecard() {
  console.log("click 2");
  element.removeChild(card);
}

function deletecard2() {
  console.log("click 2");
  element.removeChild(card2);
}

function deletecard3() {
  console.log("click 2");
  element.removeChild(card3);
}

function deletecard4() {
  console.log("click 2");
  element.removeChild(card4);
}
function deletecard5() {
  console.log("click 2");
  element.removeChild(card5);
}
function deletecard6() {
  console.log("click 2");
  element.removeChild(card6);
}

function heartclick() {
  if (y == 0) {
    btnheart.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    y = 1;
  } else if ((y = 1)) {
    btnheart.removeAttribute("style");
    y = 0;
  }
}

function heartclick2() {
  if (y2 == 0) {
    btnheart2.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    y2 = 1;
  } else if ((y2 = 1)) {
    btnheart2.removeAttribute("style");
    y2 = 0;
  }
}

function heartclick3() {
  if (y3 == 0) {
    btnheart3.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    y3 = 1;
  } else if ((y3 = 1)) {
    btnheart3.removeAttribute("style");
    y3 = 0;
  }
}

function heartclick4() {
  if (y4 == 0) {
    btnheart4.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    y4 = 1;
  } else if ((y4 = 1)) {
    btnheart4.removeAttribute("style");
    y4 = 0;
  }
}

function heartclick5() {
  if (y5 == 0) {
    btnheart5.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    y5 = 1;
  } else if ((y5 = 1)) {
    btnheart5.removeAttribute("style");
    y5 = 0;
  }
}

function heartclick6() {
  if (y6 == 0) {
    btnheart6.setAttribute(
      "style",
      "background-image: url(./image/Vectorheart-black.svg)"
    );
    y6 = 1;
  } else if ((y6 = 1)) {
    btnheart6.removeAttribute("style");
    y6 = 0;
  }
}

button.addEventListener("click", onForm);
btnadd.addEventListener("click", newplace);
btnClose.addEventListener("click", offForm);

btntrash.addEventListener("click", deletecard);
btntrash2.addEventListener("click", deletecard2);
btntrash3.addEventListener("click", deletecard3);
btntrash3.addEventListener("click", deletecard3);
btntrash4.addEventListener("click", deletecard4);
btntrash5.addEventListener("click", deletecard5);
btntrash6.addEventListener("click", deletecard6);
btnheart.addEventListener("click", heartclick);
btnheart2.addEventListener("click", heartclick2);
btnheart3.addEventListener("click", heartclick3);
btnheart4.addEventListener("click", heartclick4);
btnheart5.addEventListener("click", heartclick5);
btnheart6.addEventListener("click", heartclick6);

btnrefresh.addEventListener("click", editprofile);
