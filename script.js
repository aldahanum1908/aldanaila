// script.js

let cart = [];
let totalPrice = 0;

// Fungsi untuk menampilkan halaman yang sesuai
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Fungsi untuk menambah produk ke keranjang
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = `Total: Rp ${totalPrice}`;
}

// Fungsi checkout
function checkout() {
    if (cart.length === 0) {
        alert('Keranjang kosong! Silakan tambahkan produk terlebih dahulu.');
        return;
    }
    alert(`Total pembayaran: Rp ${totalPrice}`);
    cart = [];
    totalPrice = 1250000;
    updateCart();
}

// Fungsi untuk login
function login() {
    const username = document.getElementById('alda').value;
    const password = document.getElementById('190820').value;
    
    if (username === 'alda' && password === '190820') {
        document.getElementById('loginResult').textContent = 'Login berhasil!';
    } else {
        document.getElementById('loginResult').textContent = 'Username atau password salah!';
    }
}
