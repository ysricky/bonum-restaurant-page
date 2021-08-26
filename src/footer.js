const createFooter = () => {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');
  footer.textContent = 'Copyright Bonum';

  return footer;
};

export { createFooter };
