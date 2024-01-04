const fakeDb = (id) => {
  let shoppingCart = {};
  //get from local storage
  const getStored = localStorage.getItem("shopping-cart");
  if (getStored) {
    shoppingCart = JSON.parse(getStored);
  }

  //set item to local storage
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

//delete from local storages
const removeFromDb = (id) => {
  const getItem = localStorage.getItem("shopping-cart");
  if (getItem) {
    const shoppingCart = JSON.parse(getItem);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};
export { fakeDb, removeFromDb };
