import s from "./Preloader.module.css";
import React from "react";


const Preloader = () => {

    return (
        <div className={s.wrapper}>

            <div className={s.preloader}>
                <div className={s.preloaderItem}></div>
                <div className={s.preloaderItem}></div>
                <div className={s.preloaderItem}></div>
            </div>

            <span className={s.siteLogo}>
                <span className={s.textGreen}>
                    RENOSHOP
                </span>
                BEE
            </span>
        </div>
    )
}

export default Preloader;