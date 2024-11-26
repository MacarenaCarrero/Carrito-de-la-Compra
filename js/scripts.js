const buttonsElement = document.getElementById("buttons");

const infoButton = (event) => {
  console.log(event.target.dataset.name);
};

buttonsElement.addEventListener("click", infoButton);
