document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  const products = [
    { id: 1, name: "Mangoes", price: 100, image: "static/images/p1.jpg" },
    { id: 2, name: "Spoon", price: 150, image: "static/images/p2.jpg" },
    { id: 3, name: "Jacket", price: 200, image: "static/images/p3.jpg" },
  ];

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Ksh ${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
});

function addToCart(productId) {
  alert(`Product ${productId} added to cart.`);
}
