import {clickOffPopupON} from "./index.js"

const elements = document.querySelector(".elements");
const container = document.querySelector(".container");

class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }

  generateCard() {
    this._cardClone = document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(true)
    this._cardClone.querySelector(".card__image").src = this._link;
    this._cardClone.querySelector(".card__text").textContent = this._name;
    this._cardClone.querySelector(".card__image").alt = this._name;
    elements.prepend(this._cardClone);

    return this._cardClone
  }

  _EventListeners(){
    this._cardClone.addEventListener("click", function (event) {
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
}
}

export { Card };
