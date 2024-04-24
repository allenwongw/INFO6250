import { cats } from './cat-data'

let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderCart();
});

function renderProducts() {
    const appElement = document.getElementById('app');
    const productsElement = document.createElement('div');
    productsElement.id = 'products';
    cats.forEach(cat => {
        const catElement = document.createElement('div');
        catElement.innerHTML = `
            <h3>${cat.name}</h3>
            <img src="${cat.img}" alt="${cat.name}">
            <p>$${cat.price.toFixed(2)}</p>
            <button onclick="addToCart(${cat.id})">Add to Cart</button>
        `;
        productsElement.appendChild(catElement);
    });
    appElement.appendChild(productsElement);
}

function addToCart(id) {
    const cat = cats.find(cat => cat.id === id);
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...cat, quantity: 1 });
    }
    renderCart();
}

function renderCart() {
    let cartElement = document.querySelector('#cart');
    if (!cartElement) {
        cartElement = document.createElement('div');
        cartElement.id = 'cart';
        document.getElementById('app').appendChild(cartElement);
    }

    if (cart.length > 0) {
        let cartItemsHtml = cart.map(item => `
            <div>
                <img src="${item.img}" alt="${item.name}" style="width:50px;">
                <span>${item.name}</span> - 
                <span>$${item.price}</span> x 
                <span>${item.quantity}</span> = 
                <span>$${(item.quantity * item.price).toFixed(2)}</span>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');

        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
        cartElement.innerHTML = `<h2>Your Cart</h2>${cartItemsHtml}<div>Total: $${total}</div><button onclick="checkout()">Checkout</button><button id="hide-cart-button" onclick="toggleCartVisibility()">Hide Cart</button>`;
    } else {
        cartElement.innerHTML = `<h2>Your Cart</h2><p>Your cart is empty</p>`;
    }
}


function toggleCartVisibility() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('hidden');
    ;
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

function checkout() {
    cart = [];
    renderCart();
}

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.checkout = checkout;