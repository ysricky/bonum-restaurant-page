const createMenuContent = () => {
  const menuArray = [];
  const menuContent = document.createElement('div');

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
  
  createMenuInfo('Nasi Gudeg', 'Makanan Khas Yogyakarta', 'Rp 30,000')
  createMenuInfo('Nasi Semarang', 'Makanan Khas Semarang', 'Rp 30,000')
  createMenuInfo('Iga Bakar', 'Iga sapi dibakar', 'Rp 40,000')
  
  menuArray.forEach((menu) => {
    menuContent.appendChild(menu);
  })
  
  return menuContent;
};

export { createMenuContent };
