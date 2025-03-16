import React from 'react'

function TrendingRecipes() {
  return (
    <div className="bg-white w-[85%] mx-auto h-full my-10 rounded-xl shadow-2xl p-5 relative">
        <h1 className="text-center text-3xl mb-9">Trending Recipes</h1>
        <div className="flex gap-5 max-md:flex-col">
          {[
            {
              srcs: "/cake.jpg",
              name: " Banana Cake With Chunky Dark Chocolate",
            },
            {
              srcs: "/egg.gif",
              name: "Feta Fried Eggs",
            },
            {
              srcs: "/soup.gif",
              name: "French Onion Soup Potatoes",
            },
            {
              srcs: "/coffie.jpg",
              name: "Whipped Coffee",
            },
            {
              srcs: "/sandwich.jpg",
              name: "Grinder Sandwich",
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="w-56 border-2 border-black rounded-2xl p-3 shadow-xl bg-yellow-100 flex flex-col gap-4 max-md:mx-auto max-md:w-48"
              >
                <img
                  src={item.srcs}
                  className="w-52 h-64 rounded-2xl border-2 border-black max-md:h-40 max-md:w-40"
                  alt=""
                />
                <div className="flex flex-col justify-between h-24 gap-2">
                  <p className="text-sm text-gray-800 text-center max-md:w-40">
                    {item.name}
                  </p>
                  <button
                    type="button"
                    className="max-md:w-40 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default TrendingRecipes