const createContactContent = () => {
  const contactContent = document.createElement('div');
  const title = document.createElement('h2');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const followBtn = document.createElement('a');

  title.textContent = 'Our Location:';
  p1.textContent = 'Bonum Cafe & Resto';
  p2.textContent =
    'Villa Grand Tomang Boulevard Ruko R.02 No.15, Periuk, Tangerang, Banten, Indonesia.';
  followBtn.textContent = 'Follow us on Instagram';
  followBtn.setAttribute('href', 'https://instagram.com/bonumcafeandresto/');
  followBtn.setAttribute('target', '_blank');

  contactContent.setAttribute('id', 'contact-content');
  contactContent.append(title, p1, p2, followBtn);

  return contactContent;
};

export { createContactContent };
