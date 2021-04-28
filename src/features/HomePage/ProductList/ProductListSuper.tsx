import s from "./ProductListSuper.module.css";
import React from "react";
import ProductListContainer from "./ProductListContainer";



const ProductListSuper = () => {

    return (
        <div className={s.wrapper}>
            <p className={s.title}>FEATURED PRODUCTS</p>
            <p className={s.subtitle}>Newest trends from top brands</p>
            <div className={s.products}>
                <ProductListContainer/>
            </div>
        </div>
    )
}

export default ProductListSuper;