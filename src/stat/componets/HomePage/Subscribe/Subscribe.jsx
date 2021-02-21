import s from "./Subscribe.module.css";
import React from "react";
import img_1 from "../../../media/brand-logo-4a.png"
import img_2 from "../../../media/brand-logo-1a.png"
import img_3 from "../../../media/brand-logo-2a.png"
import img_4 from "../../../media/brand-logo-3a.png"


let Subscribe = (props) => {

    let onNameEmail = (e) => {
        let text = e.target.value;
        props.onNameEmail(text);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.promocode}>
                <div className={s.promocodeInput}>
                    <p className={s.promocodeTitle}>
                        Get Out Special Discount
                    </p>
                    <p className={s.promocodeFeature}>
                        Donec eu tristique fells. Duis augue mi, auctor ut purus et, dignissim quam.
                        register your email for news and special offers
                    </p>
                    <div className={s.form}>
                        <input type="mail" placeholder='E-mail address ...' className={s.input}
                                value={props.nameEmail} onChange={onNameEmail}/>
                        <button className={s.button}>GET COUPON NOW</button>
                    </div>
                </div>
            </div>
            <div className={s.clients}>
                <div><img src={img_1} alt="clients"/></div>
                <div><img src={img_2} alt="clients"/></div>
                <div><img src={img_3} alt="clients"/></div>
                <div><img src={img_4} alt="clients"/></div>
            </div>
        </div>
    )
}

export default Subscribe;