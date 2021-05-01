import React from 'react';
import s from './HomePage.module.css'
import Slider from "./Slider/Slider";
import StaticBlock from "./StaticBlocks/StaticBlock";
import Categories from "./Categories/Categories";
import SubscribeContainer from "./Subscribe/SubscribeContainer";
import BestProductList from "./BestProduct/BestProductList";
import ProductListSuper from "./ProductList/ProductListSuper";
import Error404 from "../../common/Error404/Error404";


type PropsType = {
    pageFound: boolean
}

const HomePage: React.FC<PropsType> = React.memo(({pageFound}) => {
    return (
        <div className={s.wrapper}>
            {pageFound ? (
                    <div>
                        <Slider/>
                        <BestProductList/>
                        <StaticBlock/>
                        <Categories/>
                        <ProductListSuper/>
                        <SubscribeContainer/>
                    </div>) :
                <Error404/>}
        </div>
    );
})


export default HomePage;


