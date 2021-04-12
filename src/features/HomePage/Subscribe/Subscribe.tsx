import s from "./Subscribe.module.css";
import React from "react";
import img_1 from "../../../static/brand-logo-4a.png"
import img_2 from "../../../static/brand-logo-1a.png"
import img_3 from "../../../static/brand-logo-2a.png"
import img_4 from "../../../static/brand-logo-3a.png"
import {Field, Form} from "react-final-form";
import {onNameEmailActionCreator} from "../../../store/homePageReducer";

type PropsType = {
    onNameEmailActionCreator: (text: string) => void
}

export type FieldValidatorType = (value: string) => string | undefined

let Subscribe: React.FC<PropsType> = (props) => {

    let onNameEmail = (value:any) => {
        props.onNameEmailActionCreator(value.emailInput)
    }

    let emailValidate:FieldValidatorType = (value) => {
        const mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (mailReg.test(value)) {
            return undefined
        }
        return 'Invalid email address'
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
                    <Form onSubmit={onNameEmail}
                          render={({handleSubmit}) => (
                              <form onSubmit={handleSubmit}>
                                  <Field name='emailInput'
                                         validate={emailValidate}
                                         type='mail'>
                                      {({input, meta}) => (
                                          <div className={s.formWrapper}>
                                              <span>
                                              <input {...input} type="text" className={s.input} placeholder={'E-mail address...'}/>
                                              <button className={s.button}>GET COUPON NOW</button>
                                                  </span>
                                              {meta.error && meta.touched &&
                                              <span className={s.error}>{meta.error}</span>}
                                          </div>
                                      )}
                                  </Field>
                              </form>
                          )}/>

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