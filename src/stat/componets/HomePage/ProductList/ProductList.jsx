import s from "./ProductList.module.css";
import React from "react";
import Product from "../Product/Product";

const ProductList = (props) => {

    let products = props.product.map(product => <Product id={product.id} nameProduct={product.nameProduct}
                                                         cost={product.cost} key={product.id}/>);

    return (
        <div className={s.wrapper}>
            <p className={s.title}>FEATURED PRODUCTS</p>
            <p className={s.feature}><em>Newest trends from brands</em></p>
            <div className={s.products}>
                {products}
            </div>
        </div>
    )
}

export default ProductList;