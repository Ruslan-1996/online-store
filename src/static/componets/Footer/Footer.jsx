import s from "./Footer.module.css";
import React from "react";
import SocialConnection from "./SocialConnection/SocialConnection";
import MidSection from "./MidSection/MidSection";
import BottomSection from "./BottomSection/BottomSection";


let Footer = () => {
    return (
        <div className={s.wrapper}>
            <SocialConnection/>
            <MidSection/>
            <BottomSection/>
        </div>
    )
}

export default Footer;