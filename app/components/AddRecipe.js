import React, { useState, useEffect } from "react";

export default function AddRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    steps: "",
    image: null,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Submitted:", recipe);
    alert("Your recipe has been submitted successfully!");
    
    
    setRecipe({
      name: "",
      ingredients: "",
      steps: "",
      image: null,
    });

    
    document.getElementById("image").value = ""; 
  };

 
  if (!isClient) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="bg-white w-[70%] mx-auto my-10 p-8 rounded-xl shadow-2xl max-md:my-0  max-md:w-full">
      <h1 className="text-3xl font-bold text-center mb-6">Add Your own Recipe</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Recipe Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-pink-300"
            placeholder="Enter the recipe name"
          />
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-pink-300"
            placeholder="List the ingredients, separated by commas"
          ></textarea>
        </div>
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Cooking Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            required
            rows="6"
            className="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-pink-300"
            placeholder="Describe the steps to prepare the recipe"
          ></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload an Image (Optional)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
