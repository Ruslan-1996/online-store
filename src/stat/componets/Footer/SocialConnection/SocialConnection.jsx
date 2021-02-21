import s from "./SocialConnection.module.css";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";


let SocialConnection = () => {
    return (
            <div className={s.wrapper}>
                <div className={s.text}>
                    We're confident we've provided all the best for you. Stay connect with us
                </div>
                <div className={s.networks}>
                    <FontAwesomeIcon icon={faFacebookF}
                                     className={`${s.iconInHeader} ${s.iconNetwork} ${s.iconFacebook}`}/>
                    <FontAwesomeIcon icon={faTwitter}
                                     className={`${s.iconInHeader} ${s.iconNetwork} ${s.iconTwitter}`}/>
                    <FontAwesomeIcon icon={faInstagram}
                                     className={`${s.iconInHeader} ${s.iconNetwork} ${s.iconInstagram}`}/>
                    <FontAwesomeIcon icon={faLinkedinIn}
                                     className={`${s.iconInHeader} ${s.iconNetwork} ${s.iconLinkedin}`}/>
                    <FontAwesomeIcon icon={faBehance}
                                     className={`${s.iconInHeader} ${s.iconNetwork} ${s.iconBehance}`}/>
                </div>
            </div>
    )
}

export default SocialConnection;