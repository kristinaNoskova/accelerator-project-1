import { setupValidation, resetErrors } from './validation.js';

const formWrapperElement = document.querySelector('.contacts-form');
const formMessageElement = document.querySelector('.contacts-form__message');
const formElement = formWrapperElement.querySelector('form');
const inputNameElement = formElement.querySelector('[name="name"]');
const inputTelElement = formElement.querySelector('[name="tel"]');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const Route = {
  POST_DATA: '/posts',
};

const Method = {
  POST: 'POST'
};

const MESSAGE_TIME = 3000;

const MessageText = {
  SUCCESS: 'Спасибо, мы скоро с вами свяжемся!',
  ERROR: 'Произошла ошибка, пожалуйста, попробуйте позже'
};

const showMessage = (message, isError = false) => {
  formMessageElement.textContent = message;
  formMessageElement.style.color = isError ? '#ed0233' : '#ffffff';
  formMessageElement.classList.remove('contacts-form__message--hidden');

  setTimeout(() => {
    formMessageElement.classList.add('contacts-form__message--hidden');
  }, MESSAGE_TIME);
};

const sendData = async (event) => {
  event.preventDefault();

  resetErrors(inputNameElement);
  resetErrors(inputTelElement);

  if (inputNameElement.validity.valid && inputTelElement.validity.valid) {
    const jsonData = {
      name: inputNameElement.value,
      tel: inputTelElement.value
    };

    try {
      const response = await fetch(`${BASE_URL}${Route.POST_DATA}`, {
        method: Method.POST,
        body: JSON.stringify(jsonData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`Ошибка отправки: ${response.status}: ${response.statusText}`);
      }

      await response.json();
      formElement.reset();
      showMessage(MessageText.SUCCESS, false);
    } catch (err) {
      showMessage(MessageText.ERROR, true);
    }
  }
};

const formSubmit = () => {
  setupValidation(formElement);
  formElement.addEventListener('submit', sendData);
};

export { formSubmit };
