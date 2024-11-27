const cardsElement = document.getElementById("cards");
const productsCart = [];

const quantityProductIncrease = (name, addButton) => {
  const productSelected = productsCart.find((product) => product.name === name);

  productSelected.quantity++;
  addButton.previousElementSibling.textContent = productSelected.quantity;
};

const addToCart = (productName, productPrice) => {
  productsCart.push({
    name: productName,
    price: productPrice,
    quantity: 1,
  });
  console.log(productsCart);
};

const showQuantityButton = (button) => {
  button.classList.add("hide");
};

const productInfo = (event) => {
  const name = event.target.dataset.name;
  const price = event.target.dataset.price;
  const type = event.target.dataset.type;
  if (type === "add") {
    showQuantityButton(event.target);
    addToCart(name, price);
  } else if (type === "increase") {
    quantityProductIncrease(name, event.target);
  } else if (type === "decrease") {
    quantityProductDecrease(name, event.target);
  }
};

cardsElement.addEventListener("click", productInfo);
