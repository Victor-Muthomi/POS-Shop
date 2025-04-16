let totalPrice = 0;
let cartItems = [];

document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-items");

  if (cartItems.length === 0) {
    showGoBackButton();
  } else {
    displayCartItems(cartItems);
  }

  document.getElementById("total-price").innerText = totalPrice;
});

function addToCart(id, name, price, quantity, image) {
  const newItem = { id, name, price, quantity, image };
  cartItems.push(newItem);

  totalPrice += price * quantity;

  // Update the cart on the screen
  const cartContainer = document.getElementById("cart-items");
  const itemDiv = document.createElement("div");
  itemDiv.className = "cart-item";
  itemDiv.id = `cart-item-${id}`;
  itemDiv.innerHTML = `
    <img src="${image}" alt="${name}">
    <div>
      <h3>${name}</h3>
      <p>Price: Ksh ${price}</p>
      <p>Quantity: ${quantity}</p>
      <button onclick="removeFromCart(${id}, ${price}, ${quantity})">Remove</button>
    </div>
  `;
  cartContainer.appendChild(itemDiv);

  // Update the total price
  document.getElementById("total-price").innerText = totalPrice;
}

function removeFromCart(itemId, itemPrice, itemQuantity) {
  const itemToRemove = document.getElementById(`cart-item-${itemId}`);
  itemToRemove.remove();

  // Update total price after removing item
  totalPrice -= itemPrice * itemQuantity;
  document.getElementById("total-price").innerText = totalPrice;

  // Check if the cart is empty
  if (totalPrice === 0) {
    showGoBackButton();
  }

  alert(`Item ${itemId} removed from cart.`);
}

function showGoBackButton() {
  const cartContainer = document.getElementById("cart-items");
  const goBackButton = document.createElement('button');
  goBackButton.innerText = "Go Back and Add Products";
  goBackButton.onclick = () => window.location.href = "index.html";  // Redirect to product listing page
  cartContainer.innerHTML = "";  // Clear cart content
  cartContainer.appendChild(goBackButton);
}

function displayCartItems(cartItems) {
  const cartContainer = document.getElementById("cart-items");
  cartItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.id = `cart-item-${item.id}`;
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>Price: Ksh ${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button onclick="removeFromCart(${item.id}, ${item.price}, ${item.quantity})">Remove</button>
      </div>
    `;
    cartContainer.appendChild(itemDiv);
  });
}

