const createMenuContent = () => {
  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menu-content');

  const createMenuInfo = (itemName, itemDescription, itemPrice) => {
    const menuDiv = document.createElement('div');
    const name = document.createElement('h3');
    const description = document.createElement('p');
    const price = document.createElement('p');

    name.textContent = itemName;
    description.textContent = itemDescription;
    price.textContent = itemPrice;

    const getImageUrl = () => {
      return `./images/${itemName.toLowerCase().split(' ').join('')}.jpg`;
    };

    menuDiv.classList.add('menu');
    menuDiv.append(name, description, price);
    menuDiv.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(${getImageUrl()})`;

    menuContent.append(menuDiv);
  };

  createMenuInfo(
    'Nasi Gudeg Yogya',
    'Made from steamed unripe young jack fruit, served with rice, egg, chicken, and crisp beef skins.',
    'Rp 25,000'
  );

  createMenuInfo(
    'Nasi Liwet Solo',
    'Steamed rice cooked in coconut milk, served with omelette, stir-fried chayote and shredded chicken.',
    'Rp 25,000'
  );
  createMenuInfo('Iga Bakar', 'Marinated grilled beef ribs.', 'Rp 35,000');
  createMenuInfo(
    'Sop Iga',
    'Soup made from beef ribs, served with boiled tomatoes, leek, and carrots.',
    'Rp 30,000'
  );
  createMenuInfo(
    'Ayam Betutu Bali',
    'Richly spiced Balinese poultry dish.',
    'Rp 25,000'
  );
  createMenuInfo(
    'Lemon Squash',
    'Sweetened lemon-flavored mixed with carbonated water.',
    'Rp 15,000'
  );
  createMenuInfo(
    'Passion Fruit Squash',
    'Juice made from passion fruit mixed with sugar and ice.',
    'Rp 15,000'
  );
  createMenuInfo(
    'Yakult Mojito',
    'Flavourful mocktail made from japanese probiotic milk beverage mixed with coconut gel and ice.',
    'Rp 20,000'
  );
  createMenuInfo(
    'Es Kopi Klepon',
    'Traditional coffee mixed with molten palm sugar and grated coconut.',
    'Rp 30,000'
  );
  createMenuInfo(
    'Kopi Susu Gula Aren',
    'Traditional coffee mixed with milk, and molten palm sugar.',
    'Rp 18,000'
  );

  return menuContent;
};

export { createMenuContent };
