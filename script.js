'use strict';

const form = document.querySelector('.sign-up-form');
const inputLabels = document.querySelectorAll('.input-label');
const textInputs = document.querySelectorAll('.input');
const allInputs = document.getElementsByTagName('input');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const checkbox = document.querySelector('input[type="checkbox"]');
const createAccBtn = document.querySelector('.create-account');

const confirmPassword = function (pwd, confirmPwd) {
  confirmPwd.classList.remove('isInvalid');
  confirmPwd.classList.remove('isValid');

  if (!pwd.validity.valid) return;

  confirmPwd.classList.add(
    `${pwd.value === confirmPwd.value ? 'isValid' : 'isInvalid'}`
  );
};

const areAllInputsValid = function (inputs) {
  for (const input of inputs) {
    if (!input.validity.valid) return false;
  }
  return true;
};

textInputs.forEach(input => {
  input.setAttribute('value', input.value);
});

form.addEventListener('keyup', function (e) {
  const target = e.target;
  if (!target.classList.contains('input')) return;

  target.attributes.value.value = target.value;
});

form.addEventListener('focusin', function (e) {
  const target = e.target;
  if (target.localName !== 'input') return;

  inputLabels.forEach(label => {
    if (target.id === label.attributes.for.value) label.classList.add('active');
  });
});

form.addEventListener('focusout', function (e) {
  const target = e.target;
  if (target.localName !== 'input') return;

  textInputs.forEach(input => {
    if (!input.value) {
      inputLabels.forEach(label => {
        if (input.id === label.attributes.for.value) {
          label.classList.remove('active');
        }
      });
    }
  });

  if (target.type == 'password') confirmPassword(password, passwordConfirm);

  areAllInputsValid(allInputs) && passwordConfirm.classList.contains('isValid')
    ? createAccBtn.classList.add('can-submit')
    : createAccBtn.classList.remove('can-submit');
});

checkbox.addEventListener('change', function () {
  areAllInputsValid(allInputs) && passwordConfirm.classList.contains('isValid')
    ? createAccBtn.classList.add('can-submit')
    : createAccBtn.classList.remove('can-submit');
});

// ON SUBMIT BUTTON - CONFIRM PASSWORD SHOULD HAVE ISVALID CLASS!!!
