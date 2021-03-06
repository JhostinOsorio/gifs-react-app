import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(c => [inputValue, ...c])
      setInputValue('')
    } else {
      alert('Ingresar mas de dos letras por categoría')
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory
