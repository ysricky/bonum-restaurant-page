const createNav = () => {
  const navArray = ['home', 'menu', 'contact'];
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'navbar');

  const createNavElement = (name) => {
    const div = document.createElement('div');
    div.setAttribute('id', name);
    div.classList.add('nav');
    div.textContent = name;
    nav.appendChild(div);
  };

  navArray.forEach((el) => {
    createNavElement(el);
  });

  return nav;
};

export { createNav };
