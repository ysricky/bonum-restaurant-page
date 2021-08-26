const createMenuContent = () => {
  const menuArray = [];
  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menu-content');
  //h2 / title
  const createMenuInfo = (itemName, itemDescription, itemPrice) => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const name = document.createElement('h3');
    const description = document.createElement('p');
    const price = document.createElement('p');

    name.textContent = itemName;
    description.textContent = itemDescription;
    price.textContent = itemPrice;

    menuDiv.append(name, description, price);

    menuArray.push(menuDiv);
  }
  
  createMenuInfo('Nasi Gudeg Yogya', 'Made from unripe young jack fruit, served with rice, egg, chicken, and crisp beef skins.', 'Rp 25,000');
  createMenuInfo('Nasi Liwet Solo', 'Makanan Khas Solo', 'Rp 25,000');
  createMenuInfo('Iga Bakar', 'Iga sapi dibakar', 'Rp 35,000');
  createMenuInfo('Sop Iga', 'soup', 'Rp 30,000');
  createMenuInfo('Ayam Betutu Bali', 'enak', 'Rp 25,000');
  createMenuInfo('Lemon Squash', 'drink', 'Rp 15,000');
  createMenuInfo('Passion Fruit Squash', 'drink', 'Rp 15,000');
  createMenuInfo('Yakult Mojito', 'drink', 'Rp 20,000');
  createMenuInfo('Es Kopi Klepon', 'drink', 'Rp 30,000');
  createMenuInfo('Kopi Susu Gula Aren', 'drink', 'Rp 18,000');
  
  menuArray.forEach((menu) => {
    menuContent.appendChild(menu);
  })
  
  return menuContent;
};

export { createMenuContent };
