const fakeDb = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity) {
    const newQuantity = quantity + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    localStorage.setItem(id, 1);
  }
};
export { fakeDb };
