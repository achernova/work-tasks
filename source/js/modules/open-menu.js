const openMenuBtn = document.querySelector('[data-element="open-menu"]');
const mainMenu = document.querySelector('[data-attribute="main-menu"]');
const header = document.querySelector('[data-element="header"]');

const initOpenMenu = () => {
  openMenuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (mainMenu.classList.contains('is-disable')) {
      mainMenu.classList.remove('is-disable');
      openMenuBtn.classList.add('is-active');
      header.classList.add('is-menu-open');
      window.scrollLock.disableScrolling();
    } else {
      mainMenu.classList.add('is-disable');
      openMenuBtn.classList.remove('is-active');
      header.classList.remove('is-menu-open');
      window.scrollLock.enableScrolling();
    }
  });
};

export {initOpenMenu};
