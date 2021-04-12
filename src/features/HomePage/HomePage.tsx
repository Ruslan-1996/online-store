import React from 'react';
import Slider from "./Slider/Slider";
import StaticBlock from "./StaticBlocks/StaticBlock";
import Categories from "./Categories/Categories";
import SubscribeContainer from "./Subscribe/SubscribeContainer";
import BestProductList from "./BestProduct/BestProductList";
import ProductListSuper from "./ProductList/ProductListSuper";


const HomePage = () => {
    return (
        <div>
           <Slider/>
           <BestProductList/>
           <StaticBlock/>
           <Categories/>
           <ProductListSuper/>
           <SubscribeContainer/>
        </div>
    );
}

export default HomePage;


