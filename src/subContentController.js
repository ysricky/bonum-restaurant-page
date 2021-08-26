import { createHomeContent } from './home.js';
import { createMenuContent } from './menu.js';
import { createContactContent } from './contact.js';

const createDefaultContent = () => {
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');

  mainContent.appendChild(createHomeContent());

  return mainContent;
};

const navHandler = () => {
  const mainContent = document.querySelector('#main-content');
  const navButton = document.querySelectorAll('.nav');

  const removeContent = () => {
    mainContent.removeChild(mainContent.childNodes[0]);
  };

  const changeContent = (nav) => {
    removeContent();

    switch (nav.target.getAttribute('id')) {
      case 'home':
        mainContent.appendChild(createHomeContent());
        break;
      case 'menu':
        mainContent.appendChild(createMenuContent());
        break;
      case 'contact':
        mainContent.appendChild(createContactContent());
        break;
    }
  };

  navButton.forEach((nav) => {
    nav.addEventListener('click', changeContent);
  });
};

export { createDefaultContent, navHandler };
