let all_product = JSON.parse(localStorage.getItem("productDetails"))

let product_id = JSON.parse(localStorage.getItem("product_id"))
console.log(all_product);
console.log(product_id);

let productView = document.getElementById("productView")
let reviewContainer = document.getElementById("reviewContainer")

if (all_product && product_id) {

    // it match the value of allproduct me joh id hai usko product id se match krega
    let single_product = all_product.find((val) => val.id == product_id)
    console.log(single_product);
    productView.innerHTML = `
    <div class="productContainer">
    <div class="left">
    <a href="..//HTML/project.html"><img src=${single_product.images[0]} alt=${single_product.title} id="single_image_id"></a>
    </div>
    <div class="right">
    <p class="single_product_title"><b>Title:</b> ${single_product.title}</p><br>
        <p class="single_product_discription"><b>Description:</b> ${single_product.description}</p><br>
        <p class="single_price"><b>Price:</b> $${single_product.price}</p><br>
         <p class="single_product_rating"><b>Rating:</b> 
         <span id="rating_box">
            ${single_product.rating}  <i class="fa-solid fa-star"></i>
        </span>
        </p>
        <button id="addToCart">Add to cart</button>
    </div>
    </div>
    `

    // it stores the review of singleproduct in reviewdata
    let reviewData = single_product.reviews
    
    reviewData.map((val) => {
        console.log(val);
        reviewContainer.innerHTML += `
        <div class="review">
        <h1>comments: ${val.comment}</h1>
        <p> review: ${"❤️".repeat(val.rating)}</p>
        <p> reviewer name: ${val.reviewerName}</p>
        <p> reviewer email: ${val.reviewerEmail}</p>
        <hr>
        </div>
        `

    })

    document.getElementById("addToCart").addEventListener("click", ()=>{
        addToCart(single_product)
    })
} else {
    console.log("Product is not available or select right product");
}

// Define addToCart function
function addToCart(product){
    let cart_prod = JSON.parse(localStorage.getItem("cart")) || []
    let result = cart_prod.some((val)=>val.id==product.id)
    if (!result) {
        cart_prod.push(product)
        alert("product is added to the cart successfully")
    }else{
        alert("Product is already exists in the cart")
    }
   
    localStorage.setItem("cart", JSON.stringify(cart_prod))
   
}


// let arr = [5,4,7,8,3,19]
// let a = arr.filter((v)=>v>4)
//     console.log(a);


//     let arr = [5,4,7,8,3,19]
// let a = arr.find((v)=>v>4)
//     console.log(a);

