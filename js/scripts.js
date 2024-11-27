const cardsElement = document.getElementById("cards");
const cartElement = document.getElementById("cart");
const productsCart = [];

const quantityProductIncrease = (name, addButton) => {
  const productSelected = productsCart.find((product) => product.name === name);

  productSelected.quantity++;
  addButton.previousElementSibling.textContent = productSelected.quantity;
};

const quantityProductDecrease = (name, imgButton) => {
  const productUnSelected = productsCart.find(
    (product) => product.name === name
  );

  productUnSelected.quantity--;
  imgButton.nextElementSibling.textContent = productUnSelected.quantity;
  if (productUnSelected.quantity <= 0) {
    imgButton.parentElement.nextElementSibling.classList.remove("hide");
    removeProducts(productUnSelected.name);
  }
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
  console.log(event.target);
  if (type === "add") {
    showQuantityButton(event.target);
    addToCart(name, price);
  } else if (type === "increase") {
    quantityProductIncrease(name, event.target);
  } else if (type === "decrease") {
    quantityProductDecrease(name, event.target);
  }
};

const removeProducts = (name) => {
  productsCart = productsCart.filter((product) => product.name !== name);
};

cardsElement.addEventListener("click", productInfo);
