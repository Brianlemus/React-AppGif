import { useState } from "react";


const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState([]);

  const onInputChanges = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1 ) return;
    // setCategories(categories => [inputValue, ...categories]);
    setInputValue('');
    onNewCategory( inputValue.trim() );
  }

  return (
      <form onSubmit={ (event)=> onSubmit(event)}>
        <input
          type="text"
          placeholder="Buscar Gif"
          value={inputValue}
          onChange={ (event) => onInputChanges(event) }
        />
      </form>
    )
}

export default AddCategory;