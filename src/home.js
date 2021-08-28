const createHomeContent = () => {
  const homeContent = document.createElement('div');
  const title = document.createElement('h2');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');

  title.textContent = 'Welcome foodlovers!';
  p1.textContent = 'Good food and good vibes';
  p2.textContent = 'Perfect place to satisfy your hunger';
  p3.textContent = 'Taste the difference';
  p4.textContent =
    'You can enjoy our foods from Sunday to Saturday, 11.00pm to 21.00pm';

  homeContent.setAttribute('id', 'home-content');
  homeContent.append(title, p1, p2, p3, p4);

  return homeContent;
};

export { createHomeContent };
