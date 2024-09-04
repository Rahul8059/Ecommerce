// let data = fetch("https://dummyjson.com/products")
// console.log(data) //it will show the promise state cause fetch gives promise
let container = document.getElementById("cnt");
let = all_images = "";
fetch("https://dummyjson.com/products")
  .then((e) => e.json())
  .then((data) => {
    let product_details = data.products;
    // both console will give the same output
    // console.log(product_details);
    // console.log(data.products);
    product_details.map((value) => {
      let img_add = value.images[0];
      // both will give the same output
      // console.log(img_add) //it will display all the images src in the console tab as a string format note not in array
      //   console.log(value.images[0])
      all_images += ` <div class ="col-md-4">
                      <img src= ${img_add} alt=${value.title}/>
                      <p> Title: ${value.title} </p>
                      <p> Price: ${value.price} </p>
                      <button> Add to cart </button>
                      <button> Buy Now </button> </div>`;
      container.innerHTML = all_images;
    });
  });

