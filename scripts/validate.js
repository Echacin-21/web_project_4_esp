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
      this._setEventListeners(_formElement)
    _formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  
    return this._formElement;
  });
  }

  _setEventListeners(_formElement) {
    const inputList = Array.from(_formElement.querySelectorAll(this._inputSelector));
    const buttonElement = _formElement.querySelector(this._submitButtonSelector);
  
    this._toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () =>{
       
        this._checkInputValidity(_formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
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

export { Validations };