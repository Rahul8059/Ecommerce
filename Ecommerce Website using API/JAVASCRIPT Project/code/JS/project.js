let main_cnt = document.getElementById("main_cnt");
let searchCnt = document.getElementById("search-cnt")
let products = ""
function fetchdata() {
    fetch("https://dummyjson.com/products").then((response) => response.json()).then((data) => {
        // return console.log(data.products);

        products = data.products
        localStorage.setItem("productDetails", JSON.stringify(products)) // storing the product details in local storage
        //  console.log(products);
        displayData(products)
    }).catch((error) => console.log(error))

    function displayData(prod) {  // definying the function which will display all the product details
        let output = " "
        prod.map((product) => {
            // console.log(product);
            output += `
        <div class="product-card">
        <img src=${product.images[0]} alt=${product.title}/>
        <p class="product-title">${product.title}</p>
        <p class="product-category">${product.category}</p>
        <div class="price-cnt">
        <p class="product-price">$ ${product.price}</p>
        <button id="viewMore" onclick="viewMore(${product.id})">View More</button>
        </div>
        </div>
        `

            main_cnt.innerHTML = output
        })
    }

    // input event is use to display the data taken as input
    // This event is particularly useful for real-time validation, live search, or any other scenario where you need to respond to user input as it happens.
    searchCnt.addEventListener("input", (e) => {
        let userInput = e.target.value.toLowerCase();
        let filterData = products.filter((val) => val.title.toLowerCase().includes(userInput) ||
            val.category.toLowerCase().includes(userInput))
        displayData(filterData);

    })

}

function viewMore(id) {
    localStorage.setItem("product_id", JSON.stringify(id))
    window.location.href = "product.html"
}
fetchdata()
let getProductDetails = localStorage.getItem("productDetails")
let result = JSON.parse(getProductDetails)
console.log(result);


