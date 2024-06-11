import {cart} from '../../data/cart.js';
import {products} from '../../data/products.js';
import { formatCorrency } from '../utils/money.js';

let OrderSummeryHTML ='';


cart.forEach((cartItem) =>{
    let isAlreadyintheCart;
    const productId = cartItem.productId;

    products.forEach((product)=>{
        if(product.id === productId){
            isAlreadyintheCart = product;
        }
       
    })
    /*console.log(isAlreadyintheCart);*/
    
    OrderSummeryHTML += `
    
    <div id="product-details">
    <div id="cartItem">
            <div id="row1">
                <h3>Delivery date: Thursday, 06 June 2024</h3>
                <br>
                <img src="${isAlreadyintheCart.image}" alt=""/>
            </div>
            <div id="row2">
                <p>${isAlreadyintheCart.name}</p>
                <p>R ${formatCorrency(isAlreadyintheCart.price)}</p>
                <span>Quantity: ${cartItem.Quantity}</span>
                <span id="update">Update</span>
                <span id="delete" id="delete-links">Delete</span>
            </div>
    </div>
        <div id="product-radio">
            <h3>Choose a delivery option:</h3>
            <br>
            <input type="radio" name=${isAlreadyintheCart.id} value="Thursday, 06 June 2024"/><span>Thursday, 06 June 2024</span>
            <p>FREE SHIPPING</p>
            <input type="radio" name=${isAlreadyintheCart.id} value="Friday, 07 June 2024"/><span>Friday, 07 June 2024</span>
            <p>R20.00</p>
            <input type="radio" name=${isAlreadyintheCart.id} value="Monday, 10 June 2024" /><span>Monday, 10 June 2024</span>
            <p>R10.00</p>
        </div>
    </div>
    <br>
    `;
    //console.log(OrderSummeryHTML);
});

document.querySelector('.product-card').innerHTML = OrderSummeryHTML;




