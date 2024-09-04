function displayCart(){
let cart_product = document.getElementById("cart_product")
let total_price = document.getElementById("total_price")
let cart = JSON.parse(localStorage.getItem("cart")) 
let totalPrice = 0
if (cart.length == 0) {
    cart_product.innerHTML = `

    <div class="empty-cnt">
    <h1>Your cart is empty</h1>
    <img src="https://png.pngtree.com/png-clipart/20190117/ourmid/pngtree-hand-painted-trolley-empty-cart-daily-supplies-png-image_441612.jpg" height="150px">
    </div>
    `
    totalPrice = 0
    total_price.textContent=""
    total_price.classList.add("hidePriceCnt2")

}
else {
    let output = ""
    cart.map((val,index) => {
        console.log(val);
        totalPrice += val.price
        output += `
<div class="cart-prod">
<div id="img_cnt">
<a href="..//HTML/project.html"><img src=${val.images[0]} alt=${val.title} id="add_img"></a>
</div>
<div class="price_cnt">
<div class="left">
<p id="title">${val.title}</p>
<p id="price">${val.price}</p>
</div>
<div class="right">
<p><b>Return Policy:</b> ${val.returnPolicy}</p>
<p><b>Shipping Information:</b> ${val.shippingInformation}</p>
</div>

</div>
<div>
<button id="removeProduct" onclick="remove(${index})">Remove</button>
</div>
</div>
`
        cart_product.innerHTML = output;
        total_price.innerHTML = `The total price is $: <b>${totalPrice.toFixed(2)}</b>`
        // document.getElementById("removeProduct").addEventListener("click", ()=>{
        //     removeFromLocalStorage(index)
        // })
    })
}
}

displayCart()


function remove(id){
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.splice(id,1)
    localStorage.setItem("cart", JSON.stringify(cart))
    displayCart()
}

// function removeFromLocalStorage(id){
//     let cart = JSON.parse(localStorage.getItem("cart"))
//     cart.splice(id,1)
//     localStorage.setItem("cart", JSON.stringify(cart))
//     displayCart()
// }

