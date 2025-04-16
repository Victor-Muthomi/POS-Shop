document.addEventListener("DOMContentLoaded", () => {
  // Simulate a selected product
  const product = {
    id: 0,
    name: "Mango",
    price: 30,
    description: " Sourced from the sun-kissed orchards of Kenya, each mango is a testament to the rich soil and warm climate that nurture them.",
    image: "Mango.jpg"
  };
  const product1 = {
    id: 2,
    name: "Lemon",
    price: 20,
    description: "Brighten your day with our farm-fresh lemons, bursting with zesty flavor and natural goodness.",
    image: "Lemon.jpg"
  };
  const product2 = {
    id: 3,
    name: "Orange",
    price: 50,
    description: "Brighten your day with our farm-fresh oranges, bursting with zesty flavor and natural goodness.",
    image: "Orange.jpg"
};


  document.getElementById("product-image").src = product.image;
  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-desc").innerText = product.description;
  document.getElementById("product-price").innerText = product.price;

  document.getElementById("product1-image").src = product1.image;
  document.getElementById("product1-name").innerText = product1.name;
  document.getElementById("product1-desc").innerText = product1.description;
  document.getElementById("product1-price").innerText = product1.price;

  document.getElementById("product2-image").src = product2.image;
  document.getElementById("product2-name").innerText = product2.name;
  document.getElementById("product2-desc").innerText = product2.description;
  document.getElementById("product2-price").innerText = product2.price;
});

function addToCart() {
  alert("Mango added to cart.");
}

function addToCart1() {
  alert("Lemon added to cart.");
}
function addToCart2() {
    alert("Orange added to cart.");
  }