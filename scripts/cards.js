const elements = document.querySelector(".elements");

class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }

//   _print(){
//     console.log(this._name);
//   }

  _generateCard() {
    this._cardClone = document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(true)
    this._cardClone.querySelector(".card__image").src = this._link;
    this._cardClone.querySelector(".card__text").textContent = this._name;
    this._cardClone.querySelector(".card__image").alt = this._name;
    elements.prepend(this._cardClone);
  }

  
}

export { Card };
