const items = [
    {
        image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
        title: "BIOLOID",
        description: "Robot Kit es una popular serie de kits de construcción de robots de la empresa Robotis.La serie incluye varios kits diseñados tanto para principiantes como para usuarios avanzados.En este kit, encontrarás todo lo que necesitas para construir robots únicos y hacer diseños personalizados.El set incluye un software de programación, un mando a distancia, servomotores y mucho más.",
        price: "$999"
    },
    {
        image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
        title: "BIOLOID Premium kit",
        description: "BIOLOID Premium Kit tiene todo lo necesario para construir robots bípedos e incluye el servomotor Dynamixel Smart y el controlador CM-530.BIOLOID Premium Kit es perfecto para la educación, el entretenimiento y las competiciones de robótica",
        price: "$1800"
    },
    {
        image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail2.png",
        title: "Airwheel",
        description: "Este modelo de bicicleta permite utilizar tanto el pedal como el motor eléctrico, así como la combinación de ambos. La Airwheel R8 está equipada con un set de baterías desmontables, que garantizan un suministro de energía suficiente y hacen que tus viajes sean más largos.",
        price: "$2000"
    },
];

const cardList = document.querySelector(".card-list__items");
const popupElement = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const defaultCardButton = document.querySelector(".filter__button_type_grid");
const horizontalCardButton = document.querySelector(".filter__button_type_column");

class Card {
    constructor(cardSelector) {
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector).content
        .querySelector(".card")
        .cloneNode(true);

        return cardElement;
    }

    _handleOpenPopup() {
        popupImage.src = this._image;
        popupElement.classList.add("popup_is-opened");
    }

    _handleClosePopup() {
        popupImage.src = "";
        popupElement.classList.remove("popup_is-opened");
    }

    _setEventListeners() {
        this._element.addEventListener("click", () => {
            this._handleOpenPopup();
        });

        popupCloseButton.addEventListener("click", () => {
            this._handleClosePopup();
        });
    }
}

class DefaultCard extends Card {
    constructor(data, cardSelector) {
        super(cardSelector);
        this._title = data.title;
        this._description = data.description;
        this._image = data.image;
    }

    generateCard() {
        this._element = super._getTemplate();
        super._setEventListeners();

        this._element.querySelector(".card__image").style.backgroundImage = `url(${this._image})`;
        this._element.querySelector(".card__title").textContent = this._title;

        return this._element;
    }

    _handleOpenPopup() {
        popupCaption.textContent = this._description;
        super._handleOpenPopup();
    }

    _handleClosePopup() {
        popupCaption.textContent = "";
        super._handleClosePopup();
    }
}

class HorizontalCard extends Card {
    constructor(data, cardSelector) {
        super(cardSelector);
        this._title = data.title;
        this._description = data.description;
        this._price = data.price;
        this._image = data.image;
    }

    generateCard() {
        this._element = super._getTemplate();
        super._setEventListeners();

        this._element.querySelector(".card__image").style.backgroundImage = `url(${this._image})`;
        this._element.querySelector(".card__title").textContent = this._title;
        this._element.querySelector(".card__info").textContent = this._description;
        this._element.querySelector(".card__price-property").textContent = this._price;

        return this._element;
    }
}

const renderElements = (isGrid) => {
    cardList.innerHTML = "";
    items.forEach((item) => {
        const card = isGrid
        ? new DefaultCard(item, ".default-card")
        : new HorizontalCard(item, ".horizontal-card");

        const cardElement = card.generateCard();
        cardList.append(cardElement);
    });
};

defaultCardButton.addEventListener("click", () => {
    renderElements(true);
});

horizontalCardButton.addEventListener("click", () => {
    renderElements(false);
});

renderElements();