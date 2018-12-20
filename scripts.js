(function() {
  const form = document.querySelector('.js-form');
  const dialog = document.querySelector('.js-dialog');
  form.addEventListener('submit', e => {
    e.preventDefault();
    // get first name from form
    const name = document.querySelector('.js-form > input:first-child').value;
    // if name exists, thank you name
    // otherwise just thank you
    const msg = name ? `Thank you, ${name}!` : 'Thank you!';
    // dialog contains close button and thank you msg
    dialog.innerHTML = `
          <button type="button" class="dialog-close-btn js-close-dialog">
            &times;
          </button>
          <p class="dialog-txt">${msg}</p>`;
    dialog.classList.remove('hidden');
    // add listener to close button
    const dialogCloseBtn = document.querySelector('.js-close-dialog');
    dialogCloseBtn.addEventListener('click', () => {
      dialog.classList.add('hidden');
    });
  });
})();
