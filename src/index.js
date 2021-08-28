import { createHeader } from './header.js';
import { createNav } from './navbar.js';
import { createDefaultContent, navHandler } from './subContentController.js';
import { createFooter } from './footer.js';

const content = document.querySelector('#content');

content.append(
  createHeader(),
  createNav(),
  createDefaultContent(),
  createFooter()
);

content.style.backgroundImage =
  'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%), url("./images/background-bonum-page.jpg")';

navHandler();
