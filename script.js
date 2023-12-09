'use strict';

const form = document.querySelector('.sign-up-form');
const inputLabels = document.querySelectorAll('.input-label');
const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
  input.setAttribute('value', input.value);
});

form.addEventListener('keyup', function (e) {
  const target = e.target;
  if (!target.classList.contains('input')) return;

  target.attributes.value.value = target.value;
});

document.addEventListener('focusin', function (e) {
  const target = e.target;
  if (!target.classList.contains('input')) return;

  inputLabels.forEach(label => {
    if (target.id === label.attributes.for.value) label.classList.add('active');
  });
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
});
