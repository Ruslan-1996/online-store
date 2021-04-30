import s from "./BestProductList.module.css"
import React from "react";
import BestProductContainer from "./BestProductListContainer";


const BestProductList = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.wrapperContent}>
                <div className={s.article}>
                    <span className={s.title}>BEST PRODUCT</span>
                    <span className={s.subtitle}>The best Product from us</span>
                    <span className={s.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        indcididunt ut labore et dolore magna aliqua.
                    </span>
                </div>
                <div  className={s.products}>

                    <BestProductContainer/>
                </div>
            </div>
        </div>
    )
}

export default BestProductList;