document.addEventListener("DOMContentLoaded", () => {
  let panier = products;

  console.log(panier);

  panier.forEach((product) => {

      let productAdd = document.createElement("button");
      productAdd.textContent = '+';

      let productName = document.createElement("span");
      productName.textContent = product.name;

      let productPrice = document.createElement("span");
      productPrice.textContent = product.price;

      let productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = "image";

      container.appendChild(productName);
      container.appendChild(productPrice);
      container.appendChild(productImage);
      container.appendChild(productAdd);
       
      productAdd.addEventListener("click", () => {

        let productName2 = [];

        let productName1 = document.createElement("li");
        productName1.textContent = product.name;  
        container1.appendChild(productName1);
        
    });
  });
});
