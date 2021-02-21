import s from "./Categories.module.css";
import React from "react";

let Categories = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.categorie}>
                <div className={s.square}></div>
                <div className={s.smallSquare}></div>
                <p className={s.size}>500Х500</p>
                <p className={s.feature}>FASHION</p>
                <p className={s.title}>SUMMER & AUTUMN</p>
                <p className={s.feature}>WINTER COLLECTION</p>
            </div>
            <div className={`${s.categorie} ${s.center}`}>
                <div className={s.square}></div>
                <div className={s.smallSquare}></div>
                <p className={s.feature}>FASHION FOR MEN</p>
                <p className={`${s.title} ${s.titleCenter}`}>30% OFF</p>
                <p className={s.feature}>WINTER COLLECTION</p>
            </div>
            <div className={s.categorie}>
                <div className={s.square}></div>
                <div className={s.smallSquare}></div>
                <p className={s.feature}>FASHION</p>
                <p className={s.title}>NEW FASHION STYLES</p>
                <p className={s.feature}>WINTER COLLECTION</p>
            </div>
        </div>
    )
}

export default Categories;