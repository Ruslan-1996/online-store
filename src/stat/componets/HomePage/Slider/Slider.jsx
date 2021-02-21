import s from "./Slider.module.css";
import React from "react";


let Slider = () => {
    return (
        <div className={s.homePage}>
            <div className={s.wrapper}>
                <p className={s.title}>THE BEST <span className={s.textGreen}>WOOCOMMERCE</span></p>
                <button className={s.button}>BUY NOW</button>
                <p className={s.sizeImage}>1500х800</p>
            </div>
        </div>
    )
}

export default Slider;