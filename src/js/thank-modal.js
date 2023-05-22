const ACTIVE_CLASS_NAME = 'modal-active';

const successModal = document.querySelector('.thank-modal');
const form = document.querySelector('.modal-form');

const openFormModalBtn = document.querySelector('.open-modal-btn');

const closeBtns = document.querySelectorAll('.close-btn');

openFormModalBtn.setAttribute('disabled', true);

const emailInput = document.querySelector('.modal-field-input');

emailInput.addEventListener('input', changeInput);

function changeInput() {
  if (emailInput.value.length !== 0) {
    openFormModalBtn.removeAttribute('disabled');
  }
}

const closeFormModal = () => {
  successModal.classList.remove(ACTIVE_CLASS_NAME);
};

closeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    closeFormModal();
  });
});

function clearFormFields() {
  const modalFields = form.querySelectorAll('input');

  modalFields.forEach(field => {
    field.value = '';
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  successModal.classList.add(ACTIVE_CLASS_NAME);

  clearFormFields();
});
