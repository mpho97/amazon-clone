import {cart, Add_to_Cart} from '../../data/cart.js';
import {products} from '../../data/products.js';
import { formatCorrency } from '../utils/money.js';

let TemplateHTML = ''; 


products.forEach((product) => {
    TemplateHTML += `
        <div id="product">
            <img src=${product.image}>
                <h3>${product.name}</h3>
                <strong>R${formatCorrency(product.price)}</strong>
                <select id="quantity">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <p>${product.description}</p>
            <button id="Add-to-cart" 
            data-product-id="${product.id}"
            >Add to Cart</button>
            <span data-type="${product.id}" id="read_more" style="cursor: pointer;">Read More...</span>
        </div>`;
        //console.log(TemplateHTML);
});
document.querySelector('.products-list').innerHTML = TemplateHTML;


function updateCart_Quantity(){
    let totalCartItems = 0;
    cart.forEach((cartItem)=>{
    totalCartItems += cartItem.Quantity;
    //Add_to_Cart(productId);
    });
document.getElementById('cart-items-length').innerHTML = totalCartItems;
}
document.querySelectorAll('#Add-to-cart').forEach((button) =>{
    button.addEventListener('click', ()=>{
        //console.log("product Added to cart...!");
        const productId = button.dataset.productId;
        Add_to_Cart(productId);
        updateCart_Quantity();
    });
});
document.querySelectorAll('#read_more').forEach((button)=>{
    button.addEventListener('click', ()=>{
    const productId = read_more.dataset.productId;
        window.open('item.html');
    });
});