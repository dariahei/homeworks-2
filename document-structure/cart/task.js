const quantity = document.querySelectorAll('.product__quantity-value');
const quantityDec = document.querySelectorAll('.product__quantity-control_dec');
const quantityInc = document.querySelectorAll('.product__quantity-control_inc');
const productAdd = document.querySelectorAll('.product__add');
let wholeCart = document.querySelector('.cart');
const cart = document.querySelector('.cart__products');

const increaseQuan = (event) => {
    event.target.previousElementSibling.textContent ++;
};

quantityInc.forEach(item => {
    item.addEventListener('click', increaseQuan);
})

const decreaseQuan = (event) => {
    if (event.target.nextElementSibling.textContent > 1) {
        event.target.nextElementSibling.textContent --;
    }
};

quantityDec.forEach(item => {
    item.addEventListener('click', decreaseQuan);
})

const addToCart = (event) => {
    let productInList = event.target.closest('.product');
    
    if (cart.children.length == 0) {
        creatProductInCart();
        wholeCart.classList.add('cart__active');
    } 
    else {

        if (document.querySelectorAll(`[data-id="${productInList.dataset.id}"]`).length > 1 ) {
            let cartElement = document.querySelector(`[data-id="${productInList.dataset.id}"]`);

            cartElement.lastElementChild.innerText = Number(cartElement.lastElementChild.innerText) + Number(event.target.previousElementSibling.children[1].textContent);
        } else {
            creatProductInCart();
        } 
    } 

    function creatProductInCart () {
        let productInCart = document.createElement('div');
        productInCart.classList.add('cart__product');
        productInCart.dataset.id = productInList.dataset.id;

        let cartX = document.createElement('a');
        cartX.href = '#';
        cartX.classList.add("cart__product-remove");
        cartX.innerHTML = '&times;';

        const productRemove =  (event) => {
            event.preventDefault();
            let container = event.target.closest('div');
            container.remove();
            if (cart.children.length == 0) {
                wholeCart.classList.remove('cart__active');
            }
        };

        cartX.addEventListener('click', productRemove);

        productInCart.prepend(cartX);
        productInCart.insertAdjacentHTML("beforeEnd",`
            <img class="cart__product-image" src="${productInList.children[1].src}">
            <div class="cart__product-count">${event.target.previousElementSibling.children[1].textContent}</div>
        `);
    
        cart.prepend(productInCart);

    }
};

productAdd.forEach(item => {
    item.addEventListener('click', addToCart);
})

