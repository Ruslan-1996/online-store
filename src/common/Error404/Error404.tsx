import s from "./Error404.module.css";
import React from "react";


const Error404 = () => {

    return (
        <div>
            <div className={s.numberError}>404</div>
            <div className={s.textError}>PAGE NOT FOUND</div>
        </div>
    )
}

export default Error404;