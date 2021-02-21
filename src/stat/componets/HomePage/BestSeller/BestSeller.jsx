import s from "./BestSeller.module.css";
import React from "react";
import Product from "../Product/Product";

let BestSeller = (props) => {

    let bestProduct = props.bestProduct.map(product => <Product nameProduct={product.nameProduct} cost={product.cost}
                                                                size={product.size} key={product.id}/>)


    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <p className={s.infoTitle}>
                    BEST SELLERS
                </p>
                <p className={s.infoFeature}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut lsbore et dolore magma aliqua.
                </p>
            </div>
            {bestProduct}
        </div>
    )
}

export default BestSeller;