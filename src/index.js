import { createHeader } from './header.js';
import { createNav } from './navbar.js';
import { createDefaultContent, navHandler } from './subContentController.js';
import { createFooter } from './footer.js';

const content = document.querySelector('#content');

content.appendChild(createHeader());
content.appendChild(createNav());
content.appendChild(createDefaultContent());
content.appendChild(createFooter());

navHandler();
