import { useState } from "react"
import AddCategory from './components/AddCategory.jsx';
import GifGrid from './components/GifGrid.jsx';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one punch']);

  const onAddCategory = ( newCategory: string ) => {

    if( categories.includes(newCategory) ) return;

    // setCategories ([...categories, 'valorNuevo']);
    // categories.push(newCategory);

    console.log(newCategory);
    // setCategories ([newCategory, ...categories]);
    setCategories ([newCategory]);
    
    // setCategories([...categories, newCategory ]);
    
  }

  console.log(categories);
  
  return (
    <>
    {/* titulos */}
      <h1>Prueba</h1>

      {/* input */}
      <AddCategory 
        onNewCategory={ (value : string) => onAddCategory(value) }
      // setCategories={setCategories} 
      />

      { 
        categories.map( (category) => (
          <GifGrid 
            key={category} 
            category={category} 
          /> 
        )) 
      }
      
    </>
  )
}
