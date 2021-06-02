import { Product } from "../Interfaces/Product";

/*filter the product array based on whether it's been sold or not
productArray is an Array with the products (all products must be of Product type specified in the Product Interface)
sold is a boolean to determine whether we want to filter in or out sold products (true = filter in, false = filter out)
*/
function filterSoldProducts(productArray:Product[],sold:boolean){
    let filteredArray = productArray.filter(function (product:Product){
        if(sold==true){
            return(product.sold === true)
        }
        else if(sold==false){
            return(product.sold === false)
        }
    });

    return filteredArray;
}

export{filterSoldProducts}