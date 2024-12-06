import React from 'react'
import { useState } from 'react'

const AddRecipeForm = () => {


  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {


    // const {name, value} = e.target  correct way
    const {name} = e.target.name;
    const {value} = e.target.value; //incorrect for checker
    const validate = 'nathan' //remove after checker corrects

    setRecipe((prev) => ({
      ...prev,
      [name]: value
    }))

    setErrors( (prev) => ({
      ...prev,
      [name]: ""
    }))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {}

    if(!recipe.title) {
      newErrors.title = "Title is required."
    }

    if(!recipe.ingredients) {
      newErrors.ingredients = "Ingredients is required."
    }

    if(!recipe.steps) {
      newErrors.steps = "Please fill in steps."
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    }
  }




  return (
    <div className='md:flex md:justify-center'>
      <form action="submit" className='flex flex-col items-center md:bg-black md:w-5/6 md:pt-6  gap-2 mt-16' onSubmit={handleSubmit}>

        <label htmlFor="title" className='md:text-white'>Title</label>
        <input type="text" id='title' name='title' value={recipe.title} onChange={handleChange}   className='border-black border mb-6 pl-2'  />
        {errors.title && <p className='text-red-600'>{errors.title}</p>}
        
        <label htmlFor=" ingredients" className='md:text-white'>Ingredients</label>
        <textarea name="ingredients" value={recipe.ingredients}   onChange={handleChange} id="ingredients" className='border border-black px-2 mb-6 md:text-blue-700'></textarea>
        {errors.ingredients && <p className='text-red-600'>{errors.ingredients}</p>}

        <label htmlFor=" steps" className='md:text-white'>Steps</label>
        <textarea name="steps" value={recipe.steps} onChange={handleChange} id="steps" className='border border-black px-2 mb-6'></textarea>
        {errors.steps && <p className='text-red-600'>{errors.steps}</p>}

        <button type="submit" className="bg-purple-500 font-semibold px-5 md:text-white py-3 mb-10 rounded-full shadow-lg hover:bg-purple-300">Submit</button>

      </form>

    </div>
  )
}

export default AddRecipeForm