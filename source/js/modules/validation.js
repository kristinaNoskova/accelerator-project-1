const ErrorMessages = {
  NAME_INVALID: 'Имя должно состоять из букв',
  TEL_INVALID: 'Некорректный номер',
  REQUIRED: 'Заполните поле',
};

const resetErrors = (inputElement) => {
  const errorMessageElement = inputElement.closest('.contacts-form__wrap-input');
  const errorMessageTextElement = errorMessageElement.querySelector('span');
  errorMessageElement.classList.remove('contacts-form__wrap-input--error');
  errorMessageTextElement.textContent = '';
};

const handleInputInvalid = function (event) {
  event.preventDefault();
  const input = this;
  const errorMessageElement = input.closest('.contacts-form__wrap-input');
  const errorMessageTextElement = errorMessageElement.querySelector('span');

  if (input.validity.patternMismatch) {
    errorMessageElement.classList.add('contacts-form__wrap-input--error');
    errorMessageTextElement.textContent = input.name === 'name'
      ? ErrorMessages.NAME_INVALID
      : ErrorMessages.TEL_INVALID;
  } else if (input.validity.valueMissing) {
    errorMessageElement.classList.add('contacts-form__wrap-input--error');
    errorMessageTextElement.textContent = ErrorMessages.REQUIRED;
  } else {
    resetErrors(input);
  }
};

const handleInput = function () {
  resetErrors(this);
};

const setupValidation = (formElement) => {
  [...formElement.querySelectorAll('input')].forEach((input) => {
    input.addEventListener('invalid', handleInputInvalid);
    input.addEventListener('input', handleInput);
  });
};

export { setupValidation, resetErrors };
