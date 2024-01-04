const fakeDb = (id) => {
  let shoppingCart = {};
  //get from local storage
  const getStored = localStorage.getItem("shopping-cart");
  if (getStored) {
    shoppingCart = JSON.parse(getStored);
  } else {
    shoppingCart = {};
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
export { fakeDb };
