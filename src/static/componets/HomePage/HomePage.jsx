import React from 'react';
import Slider from "./Slider/Slider";
import StaticBlock from "./StaticBlocks/StaticBlock";
import Categories from "./Categories/Categories";
import BestSellerContainer from "./BestSeller/BestSellerContainer";
import ProductListContainer from "./ProductList/ProductListContainer";
import SubscribeContainer from "./Subscribe/SubscribeContainer";



const HomePage = (props) => {
    return (
        <div>
           <Slider/>
           <BestSellerContainer/>
           <StaticBlock/>
           <Categories/>
           <ProductListContainer/>
           <SubscribeContainer/>
        </div>
    );
}

export default HomePage;


