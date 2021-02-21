import s from "./StaticBlock.module.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem} from "@fortawesome/free-regular-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faRetweet, faRocket} from "@fortawesome/free-solid-svg-icons";



let StaticBlock = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <FontAwesomeIcon icon={faGem} className={s.icon}/>
                <p className={s.title}>SPEICAL OFFERS</p>
                <p className={s.feature}>Shop Big Save Big</p>
            </div>
            <div className={s.block}>
                <FontAwesomeIcon icon={faTelegramPlane} className={s.icon}/>
                <p className={s.title}>FREE DELIVERY</p>
                <p className={s.feature}>On Orders Above $99</p>
            </div>
            <div className={s.block}>
                <FontAwesomeIcon icon={faRetweet} className={s.icon}/>
                <p className={s.title}>30 DAYS RETURN</p>
                <p className={s.feature}>Policy we Offers</p>
            </div>
            <div className={s.block}>
                <FontAwesomeIcon icon={faRocket} className={`${s.icon} ${s.iconRocket}`}/>
                <p className={s.title}>FASTEST SHIPPING</p>
                <p className={s.feature}>2 Days Express</p>
            </div>
        </div>
    )
}

export default StaticBlock;