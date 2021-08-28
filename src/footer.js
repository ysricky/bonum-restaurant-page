const createFooter = () => {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');
  footer.textContent = '© 2021 Bonum Cafe & Resto. All Rights Reserved.';

  return footer;
};

export { createFooter };
