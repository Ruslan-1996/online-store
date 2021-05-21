import s from "./ProductInCart.module.css";
import React from "react";

type PropsType = {
    size?: string
    name: string
    value: string
    onChangeInput: (value: string, id: number) => void
    cost: number
    image: string
    totalCost: number
    onProductDelete: (id: number) => void
    id: number
}

const ProductInCart: React.FC<PropsType> = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={`${s.products} ${s.item}`}>
                <div className={s.productWrapper}>
                    <div className={s.image} style={{
                        backgroundImage: `url(${props.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>{!props.image && props.size}</div>
                    <div className={s.nameProduct}>{props.name}</div>
                </div>
            </div>
            <div className={`${s.color} ${s.item}`}>
                <div>Size: XL</div>
                <div>Color: Black</div>
            </div>
            <div className={`${s.quantity} ${s.item}`}>
                <input type='number' min='0' max='100' className={s.input} onChange={(e) => {
                    props.onChangeInput(e.target.value, props.id)
                }} value={props.value}/>
            </div>
            <div className={`${s.price} ${s.item}`}>${props.cost.toFixed(2)}</div>
            <div className={`${s.total} ${s.item}`}>
                <span className={s.totalPrice}>${props.totalCost.toFixed(2)}</span>
                <button className={s.delete} onClick={() => {
                    props.onProductDelete(props.id)
                }}>+
                </button>
            </div>
        </div>
    )
}

export default ProductInCart;