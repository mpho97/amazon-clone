export const cart =[{
    productId: 'e123f-fd997-fg3d6-8dg23',
    Quantity: 3

},{
    productId: 'b123g-ge654-fg3d6-9dg27',
    Quantity: 5
}
];
/*export const cart =[];*/
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
console.log(cart);
}
