import React from 'react';

const App = () => {
  const recipes = [
    {
      id: 1,
      title: 'Spicy Egg Fried Rice',
      description: 'A quick and delicious egg fried rice with a spicy twist.',
      image: '/egg.gif',
    },
    {
      id: 2,
      title: 'Chicken Biryani',
      description: 'A flavorful and aromatic biryani that’s a feast for the senses.',
      image: '/ChickenBiryani.jpg',
    },
    {
      id: 3,
      title: 'Vegetable Stir-Fry',
      description: 'A healthy and colorful stir-fry loaded with fresh veggies.',
      image: '/Veggie-Stir-Fry-Recipe.jpg',
    },
  ];

  const favourites = [
    {
      id: 1,
      title: 'Butter Chicken',
      description: 'Rich and creamy butter chicken for an indulgent treat.',
      image: '/chicken.jpg',
    },
    {
      id: 2,
      title: 'Tandoori Paneer Tikka',
      description: 'Smoky and spicy paneer tikka with a charred finish.',
      image: '/Paneer-butter-masala.jpg',
    },
    {
      id: 3,
      title: 'Mango Kulfi',
      description: 'A traditional Indian mango dessert to cool your palate.',
      image: '/MangoKulfi.jpg',
    },
  ];

  return (
    <div>
   

    
      <div className="py-12 bg-gray-800 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">Favourites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {favourites.map((favourite) => (
            <div
              key={favourite.id}
              className="bg-gray-900 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={favourite.image}
                alt={favourite.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{favourite.title}</h3>
                <p className="mt-2 text-sm">{favourite.description}</p>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-12 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          New Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-700">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{recipe.description}</p>
                <button className="mt-4 w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default App;
