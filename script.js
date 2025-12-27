
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});



document.getElementById("review").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Дякуємо за ваш відгук! ❤️");
    this.reset();
});
let cart = [];

const cartWidget = document.getElementById('cart-widget');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementById('close-cart');
const cartList = document.getElementById('cart-items-list');
const countBadge = document.getElementById('cart-count');
const totalPriceEl = document.getElementById('total-price');


cartWidget.onclick = function() {
    cartModal.style.display = 'block';
};


closeBtn.onclick = function() {
    cartModal.style.display = 'none';
};


window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
};


document.querySelectorAll('.buy-btn').forEach(button => {
    button.onclick = function(e) {
        e.preventDefault(); 
        const name = this.getAttribute('data-name');
        const price = parseInt(this.getAttribute('data-price'));
        
        cart.push({ name, price });
        updateCartUI();
    };
});

function updateCartUI() {
    countBadge.innerText = cart.length;
    cartList.innerHTML = "";
    let total = 0;
    
    if (cart.length === 0) {
        cartList.innerHTML = '<p>Кошик порожній</p>';
    } else {
        cart.forEach((item) => {
            total += item.price;
            cartList.innerHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <span>${item.name}</span>
                <b>${item.price} грн</b>
            </div>`;
        });
    }
    totalPriceEl.innerText = total;
}

document.getElementById('order-btn').onclick = function() {
    if(cart.length > 0) {
        alert("Дякуємо за замовлення!");
        cart = [];
        updateCartUI();
        cartModal.style.display = 'none';
    } else {
        alert("Кошик порожній");
    }
};
