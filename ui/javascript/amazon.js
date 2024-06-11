import {cart} from '../../data/cart.js';
import {products} from '../../data/products.js';

let TemplateHTML = ''; 

products.forEach((product) => {
    TemplateHTML += `
        <div id="product">
            <img src=${product.image}>
                <h3>${product.name}</h3>
                <strong>R${(product.price / 100).toFixed(2)}</strong>
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
        </div>`;
        //console.log(TemplateHTML);
});
document.querySelector('.products-list').innerHTML = TemplateHTML;

    function Add_to_Cart(productId){
        let isAlreadyintheCart;
        // check if the product is already in the cart
        
        cart.forEach((item) =>{
            if(productId === item.productId){
                isAlreadyintheCart = item;
            }
        });
        if(isAlreadyintheCart){
            isAlreadyintheCart.Quantity += 1;
        }else{
        cart.push({
            productId: productId,
            Quantity: 1
        });
    }
}
function updateCart_Quantity(){
    let totalCartItems = 0;
    cart.forEach((item)=>{
    totalCartItems += item.Quantity;
    })

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
