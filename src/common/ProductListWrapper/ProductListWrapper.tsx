import s from "./ProductListWrapper.module.css";
import React from "react";
import Product from "../Product/Product";
import {ProductType} from "../../store/homePageReducer";

type PropsType = {
    product: Array<ProductType>
    setAssessment: (assessment: number, id: number) => void
    onProductDelete: (id: number) => void
    onChange: (id: number, name: string, cost: number) => void
    productInCart: Array<number>
}

const ProductListWrapper: React.FC<PropsType> = (props) => {
    let products = props.product.map(product => <Product id={product.id} name={product.name}
                                                         cost={product.cost} key={product.id}
                                                         onChange={props.onChange}
                                                         size={product.size}
                                                         onProductDelete={props.onProductDelete}
                                                         productInCart = {props.productInCart}
                                                         assessment={product.assessment}
                                                         setAssessment={props.setAssessment}/>);

    return (
        <div className={s.wrapper}>
                {products}
        </div>
    )
}


export default ProductListWrapper;