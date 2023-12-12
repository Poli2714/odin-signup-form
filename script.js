'use strict';

const form = document.querySelector('.sign-up-form');
const inputLabels = document.querySelectorAll('.input-label');
const inputs = document.querySelectorAll('.input');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');

const confirmPassword = function (pwd, confirmPwd) {
  confirmPwd.classList.remove('isNotValid');
  confirmPwd.classList.remove('isValid');

  if (!pwd.validity.valid) return;

  confirmPwd.classList.add(
    `${pwd.value === confirmPwd.value ? 'isValid' : 'isNotValid'}`
  );
};

inputs.forEach(input => {
  input.setAttribute('value', input.value);
});

form.addEventListener('keyup', function (e) {
  const target = e.target;
  if (!target.classList.contains('input')) return;

  target.attributes.value.value = target.value;
});

form.addEventListener('focusin', function (e) {
  const target = e.target;
  if (!target.classList.contains('input')) return;

  inputLabels.forEach(label => {
    if (target.id === label.attributes.for.value) label.classList.add('active');
  });

  // target.classList.remove('isNotValid');
  // target.classList.remove('isValid');
});

form.addEventListener('focusout', function (e) {
  const target = e.target;
  if (!target.classList.contains('input')) return;

  inputs.forEach(input => {
    if (!input.value) {
      inputLabels.forEach(label => {
        if (input.id === label.attributes.for.value) {
          label.classList.remove('active');
        }
      });
    }
  });

  // CONFIRM PASSWORD WHEN FOCUS OUT
  if (target.type !== 'password') return;
  confirmPassword(password, passwordConfirm);
});

// ON SUBMIT BUTTON - CONFIRM PASSWORD SHOULD HAVE ISVALID CLASS!!!
