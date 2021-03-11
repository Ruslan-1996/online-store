import s from "./TableInCart.module.css";
import React from "react";
import ProductInCart from "./ProductInCart/ProductInCart";


const TableInCart = (props) => {

    let productInCart = props.cartProduct.map(product => <ProductInCart nameProduct={product.nameProduct}
                                                                        cost={product.cost} key={product.id}
                                                                        totalCost={product.totalCost}
                                                                        value={product.value} id={product.id}
                                                                        onChangeProductValue={props.onChangeProductValue}
                                                                        onProductDelete={props.onProductDelete}/>)
    if (props.cartProduct.length === 0) {
        return <div className={s.cartNull}>
            your cart is empty
        </div>
    }

    return (
        <div className={s.wrapper}>
            <div className={s.table}>
                <div className={`${s.products} ${s.title}`}>Products</div>
                <div className={`${s.color} ${s.title}`}>Color & Size</div>
                <div className={`${s.quantity} ${s.title}`}>Quantity</div>
                <div className={`${s.price} ${s.title}`}>Price</div>
                <div className={`${s.total} ${s.title}`}>Total</div>
            </div>
            {productInCart}
            <div className={s.endOfTable}>
                <button className={`${s.updateCart} ${s.button}`}>UPDATE CART</button>
                <button className={`${s.continue} ${s.button}`}>CONTINUE SHOPPING</button>
            </div>
        </div>
    )
}

export default TableInCart;