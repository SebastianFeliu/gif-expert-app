import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import AddCategory from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['Mr Robot', 'Skate','Vinyl'];
    const [categories, setCategories] = useState(['2020']);


    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory 
                setCategories={ setCategories }
            />
            <hr/>


            <ol>
                {
                categories.map( (category, i) => (
                    <GifGrid 
                    key = {category}
                    category = {category}/>
                )
            )
                }                
            </ol>
        </>
    )

}

export default GifExpertApp