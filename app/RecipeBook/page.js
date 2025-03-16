"use client"
import React, { useState, useEffect } from "react";

function RecipeBook() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        <div className="container mx-auto my-6">
          <div className="bg-black text-white p-3 rounded-lg w-[88%] mx-auto outline-dotted">
            Are you a food enthusiast eager to explore new flavors, or a home chef
            looking to perfect your favorite dishes? Look no further! Our online
            recipe book is your ultimate guide to cooking with ease, creativity,
            and joy.
          </div>

          <div className="mx-auto flex flex-wrap gap-10 justify-between my-6">
            {[
              { srcs: "/book1 (1).jpg", name: "The Flavor Fusion Guide" },
              { srcs: "/book2.jpg", name: "Savory Secrets" },
              { srcs: "/book3.jpg", name: "Gourmet in Minutes" },
              { srcs: "/book4.jpg", name: "A World of Spices" },
              { srcs: "/book5.jpg", name: "The Healthy Plate" },
              { srcs: "/book6.jpg", name: "The Baker's Bliss" },
              { srcs: "/book7.jpg", name: "Veggie Wonders" },
              { srcs: "/book8.jpg", name: "The Soup Symphony" },
              { srcs: "/book9.jpg", name: "Brunch Like a Pro" },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="my-4 flex flex-col items-center justify-center gap-5 max-md:mx-auto"
                >
                  <img
                    src={item.srcs}
                    className="w-80 h-full rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105"
                    alt={item.name}
                  />
                  <span className="text-xl w-80 rounded-xl text-center outline-4 p-2 outline-fuchsia-700 outline-dashed bg-yellow-200">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="bg-white w-full mx-auto h-full my-10 rounded-xl shadow-2xl p-6 relative max-md:mx-auto max-md:w-[90vw]">
            <div className="flex justify-between items-center max-md:flex-col">
              <div className="rounded-xl">
                <video
                  src="/vid1.mp4"
                  className="h-60 w-full rounded-xl"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <span className="boreder-2 p-2 rounded-xl bg-black text-white">
                Quick Pizza Recipe 🍕 <br /> <br />
                1.) Dough: Mix flour, yeast, sugar, salt, water, and olive oil.
                Knead, let rise. <br />
                2.) Sauce: Sauté garlic, add tomato puree, salt, herbs, and
                simmer. <br />
                3.) Assemble: Spread sauce on rolled dough. Add cheese and
                toppings. <br />
                4.) Bake: 200°C (400°F) for 12-15 minutes. <br />
                <br />
                Enjoy your homemade pizza!
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeBook;
