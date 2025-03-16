"use client"
import React, { useState, useEffect } from "react";

const NewRecipes = () => {
  const [isLoading, setIsLoading] = useState(true);

  const recipes = [
    {
      id: 1,
      title: "Spicy Egg Fried Rice",
      description: "A quick and delicious egg fried rice with a spicy twist.",
      image: "/egg.gif",
    },
    {
      id: 2,
      title: "Chicken Biryani",
      description:
        "A flavorful and aromatic biryani that’s a feast for the senses.",
      image: "/ChickenBiryani.jpg",
    },
    {
      id: 3,
      title: "Vegetable Stir-Fry",
      description: "A healthy and colorful stir-fry loaded with fresh veggies.",
      image: "/Veggie-Stir-Fry-Recipe.jpg",
    },
    {
      id: 4,
      title: "Paneer Butter Masala",
      description: "A creamy and flavorful paneer dish perfect with naan.",
      image: "Paneer-butter-masala.jpg",
    },
    {
      id: 5,
      title: "Chocolate Lava Cake",
      description: "A rich chocolate cake with a gooey molten center.",
      image: "chocolate-cake.jpg",
    },
    {
      id: 6,
      title: "Caesar Salad",
      description: "A refreshing salad with crisp lettuce and creamy dressing.",
      image: "vegan-caesar-salad.webp",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        <div className="py-5">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            New Recipes
          </h2>
          <div className="flex flex-wrap justify-center gap-6 px-4 max-w-6xl mx-auto">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-80"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 text-sm my-2">{recipe.description}</p>
                  <button className="bg-orange-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NewRecipes;
