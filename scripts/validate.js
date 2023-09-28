const objValidation = {
  formSelector: ".page__popup-form",
  inputSelector: ".page__form-input",
  submitButtonSelector: ".page__form-submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const showError = (formElement, element, errorMessage, objValidation) => {
  const errorElement = formElement.querySelector(`.${element.id}-error`);
  element.classList.add(objValidation.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objValidation.errorClass);
};

const hidenError = (formElement, element, objValidation) => {
  const errorElement = formElement.querySelector(`.${element.id}-error`);
  element.classList.remove(objValidation.inputErrorClass);
  errorElement.classList.remove(objValidation.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, objValidation) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, objValidation);
  } else {
    hidenError(formElement, inputElement, objValidation);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, objValidation) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(objValidation.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(objValidation.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, objValidation) => {
  console.log(formElement);
  const inputList = Array.from(formElement.querySelectorAll(objValidation.inputSelector));
  const buttonElement = formElement.querySelector(objValidation.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, objValidation);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, objValidation);
      toggleButtonState(inputList, buttonElement, objValidation);
    });
  });
};

const enableValidation = (objValidation) => {
  const formList = Array.from(document.querySelectorAll(objValidation.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, objValidation);
  });
};

enableValidation(objValidation);
