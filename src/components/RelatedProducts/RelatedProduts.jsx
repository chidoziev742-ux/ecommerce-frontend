import React from "react";
import './RelatedProducts.css'
import data_product from '../assets/data'
const RelatedProducts=()=>{
    return(
        <div className="relatedproducts">
<h1>related products </h1>
<hr />
<div className="relatedproducts-item">
    {data_product.map ( ( item,i)=>{
return<item
id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}/>
    }
    )}
    </div>       
 </div>
    )
}

export default RelatedProducts