
// const showError = (formElement, element, errorMessage, objValidation) => {
//   const errorElement = formElement.querySelector(`.${element.id}-error`);
//   element.classList.add(objValidation.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(objValidation.errorClass);
// };

// const hidenError = (formElement, element, objValidation) => {
//   const errorElement = formElement.querySelector(`.${element.id}-error`);
//   element.classList.remove(objValidation.inputErrorClass);
//   errorElement.classList.remove(objValidation.errorClass);
//   errorElement.textContent = "";
// };

// const checkInputValidity = (formElement, inputElement, objValidation) => {
//   if (!inputElement.validity.valid) {
//     showError(formElement, inputElement, inputElement.validationMessage, objValidation);
//   } else {
//     hidenError(formElement, inputElement, objValidation);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement, objValidation) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(objValidation.inactiveButtonClass);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(objValidation.inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// };

// const setEventListeners = (formElement, objValidation) => {
//   const inputList = Array.from(formElement.querySelectorAll(objValidation.inputSelector));
//   const buttonElement = formElement.querySelector(objValidation.submitButtonSelector);

//   toggleButtonState(inputList, buttonElement, objValidation);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function () {
//       checkInputValidity(formElement, inputElement, objValidation);
//       toggleButtonState(inputList, buttonElement, objValidation);
//     });
//   });
// };

// const enableValidation = (objValidation) => {
//   const formList = Array.from(document.querySelectorAll(objValidation.formSelector));

//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });

//     setEventListeners(formElement, objValidation);
//   });
// };

// enableValidation(objValidation);


const objValidation = {
  formSelector: ".page__popup-form",
  inputSelector: ".page__form-input",
  submitButtonSelector: ".page__form-submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

class Validations {
  constructor(objValidation){
    this._formSelector = objValidation.formSelector;
    this._inputSelector = objValidation.inputSelector;
    this._submitButtonSelector = objValidation.submitButtonSelector;
    this._inactiveButtonClass = objValidation.inactiveButtonClass;
    this._inputErrorClass = objValidation.inputErrorClass;
    this._errorClass = objValidation.errorClass;
  }

  _enableValidation(){
    const formList = Array.from(document.querySelectorAll(this._formSelector));

  formList.forEach((_formElement) => {
    _formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    return this._formElement;
  });
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  
    this._toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  _toggleButtonState(inputList, buttonElement) {
    if (_hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hidenError(formElement, inputElement);
    }
  };

  _showError(formElement, element, errorMessage) {
    const errorElement = formElement.querySelector(`.${element.id}-error`);
    element.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };
  
  _hidenError (formElement, element) {
    const errorElement = formElement.querySelector(`.${element.id}-error`);
    element.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };
}

export {Validations, objValidation};