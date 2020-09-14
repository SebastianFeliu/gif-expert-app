import React, { useState }  from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = ( e ) => {

        //setCategories(categories.concat(categoryName));

        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 1 ) {
            setCategories( cats => [inputValue, ...cats] );
        }
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                onChange={ handleInputChange }
                type="text" 
                value = { inputValue }>
            </input> 
            <br/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;