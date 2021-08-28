const createHeader = () => {
  const header = document.createElement('header');
  const logo = document.createElement('h1');
  logo.textContent = 'BONUM.';
  header.setAttribute('id', 'logo');
  header.append(logo);

  return header;
};

export { createHeader };
