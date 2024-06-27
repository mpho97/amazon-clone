export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart = [{
        productId: 'e123f-fd997-fg3d6-8dg23',
        Quantity: 2
    
    },{
        productId: 'b123g-ge654-fg3d6-9dg27',
        Quantity: 1
    }
    ];

}else if(cart==""){
    document.querySelector('.item-details').innerHTML='Cart is empty..... go shopping!';
}

/*export const cart =[];*/

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}
export function Add_to_Cart(productId){
    let isAlreadyintheCart;
    // check if the product is already in the cart
    
    cart.forEach((cartItem) =>{
        if(productId === cartItem.productId){
            isAlreadyintheCart = cartItem;
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
//console.log(cart);
saveToStorage();
}

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}
