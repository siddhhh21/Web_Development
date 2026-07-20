document.addEventListener("DOMContentLoaded", () => {
  const product_catalog = document.querySelector(".products");
  const cart_page = document.querySelector(".cart");
  const price = document.getElementById("price");
  const checkout_btn = document.getElementById("checkout-btn");

  let TotalPrice = 0;

  const cart = {};

  const products = [
    {
      id: 1,
      name: "Shirt",
      price: 499,
    },
    {
      id: 2,
      name: "Pants",
      price: 999,
    },
    {
      id: 3,
      name: "Jeans",
      price: 1499,
    },
  ];

  addProducts();
  renderCart();

  function addProducts() {
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("cards");

      card.innerHTML = `
                <p>${product.id}. ${product.name} : ₹${product.price}</p>

                <div class="controls">

                    <button class="add-btn">
                        Add to Cart
                    </button>

                    <div class="qty-controls" style="display:none">

                        <button class="minus">-</button>

                        <span class="qty">1</span>

                        <button class="plus">+</button>

                    </div>

                </div>
            `;

      const addBtn = card.querySelector(".add-btn");
      const qtyControls = card.querySelector(".qty-controls");
      const plusBtn = card.querySelector(".plus");
      const minusBtn = card.querySelector(".minus");
      const qtyText = card.querySelector(".qty");

      addBtn.addEventListener("click", () => {
        cart[product.id] = {
          ...product,
          quantity: 1,
        };

        addBtn.style.display = "none";
        qtyControls.style.display = "flex";

        renderCart();
      });

      plusBtn.addEventListener("click", () => {
        cart[product.id].quantity++;

        qtyText.textContent = cart[product.id].quantity;

        renderCart();
      });

      minusBtn.addEventListener("click", () => {
        cart[product.id].quantity--;

        if (cart[product.id].quantity === 0) {
          delete cart[product.id];

          qtyControls.style.display = "none";
          addBtn.style.display = "block";
        } else {
          qtyText.textContent = cart[product.id].quantity;
        }

        renderCart();
      });

      product_catalog.appendChild(card);
    });
  }

  function renderCart() {
    cart_page.innerHTML = "<h2>Cart</h2>";

    TotalPrice = 0;

    Object.values(cart).forEach((product) => {
      TotalPrice += product.price * product.quantity;

      const cartItem = document.createElement("div");

      cartItem.classList.add("cart-card");

      cartItem.innerHTML = `
                <p>${product.name}</p>

                <p>Qty : ${product.quantity}</p>

                <p>₹${product.price * product.quantity}</p>
            `;

      cart_page.appendChild(cartItem);
    });

    updatePrice();
  }

  function updatePrice() {
    price.textContent = `Total : ₹${TotalPrice}`;
  }

  checkout_btn.addEventListener("click", () => {
    if (TotalPrice === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`Order Placed!\n\nTotal Amount : ₹${TotalPrice}`);

    Object.keys(cart).forEach((id) => {
      delete cart[id];
    });

    renderCart();
  });
});
