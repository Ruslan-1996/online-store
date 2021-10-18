import s from "./Slider.module.css";
import React from "react";
import Image from "../../../static/sliderLogo.jpg"


let Slider = () => {
    return (
        <div className={s.homePage} style={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top"
        }}>
            <div className={s.wrapper}>
                <p className={s.title}>THE BEST <span className={s.textGreen}>WOOCOMMERCE</span></p>
                <button className={s.button}>BUY NOW</button>
                {/*{Image && <p className={s.sizeImage}>1500х800</p>}*/}
            </div>
        </div>
    )
}

export default Slider;