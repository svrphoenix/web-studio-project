const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
  form: document.querySelector('.modal-form'),
  nameInput: document.getElementById('user-name'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.form.addEventListener('submit', e => {
  e.preventDefault;
  e.currentTarget.reset();
});

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  if (!refs.modal.classList.contains('is-hidden')) {
    setTimeout(() => {
      refs.nameInput.focus();
    }, 500);
  }
  refs.body.classList.toggle('no-scroll');
}
