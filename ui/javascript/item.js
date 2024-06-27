import {products} from '../../data/products.js';
import { Add_to_Cart } from '../../data/cart.js';

let itemTemplate ='';
products.forEach((product) => {
itemTemplate += `
    <h2>${product.name}</h2>
        <div id="item-details">
            <div id="image-item">
                <img src="${product.image}" />
            </div>
           <div id="details">
            <div id="flex-space-around">
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
            <p>R${(product.price / 100).toFixed(2)}</p>
            </div>
            <p>Best quality T-short, made with cotton.</p>
            <div id="color-selection">
                <span>Available in:</span>

                <div id="pink"></div>
                <div id="black"></div>
            </div>
            <div id="item-status">
                <span>${product.status==0 ? "Out of Stock" : "In Stock"}</span>
            </div>
            <button  id="Add-to-cart" data-type-id="${product.id}">Add to cart</button>
           </div>
    `;
});
document.querySelector('#item').innerHTML = itemTemplate;
document.querySelectorAll("#Add-to-cart").forEach((button)=>{
    button.addEventListener('click', ()=>{
        //alert('hello');
        const productId = add-to-cart.dataset.productId;
        Add_to_Cart(productId);
    });
});