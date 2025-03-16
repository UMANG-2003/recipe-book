import React from "react";

function BeforeLogin() {
  return (
    <><div className="min-h-screen">
      <div className="bg-white w-[85%] mx-auto h-full my-10 rounded-xl shadow-2xl relative">
        <img
          width={270}
          className="absolute top-32 left-[40%] rotate-[30%] max-md:hidden"
          src="/arrow.png"
          alt=""
        />
        <div className="flex justify-around items-center max-md:flex-col">
          <div className="flex flex-col gap-10 max-md:p-5">
            <div className="flex flex-col gap-3 ">
              <p className="text-5xl font-bold text-red-500 max-md:text-2xl">
                Discover, Cook, and Share
              </p>
              <p className="text-5xl font-bold text-red-500 max-md:text-2xl">
                the Joy of Flavors...
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <img width={60} src="/avatar.jpg" alt="" />
              <div>
                <p className="text-gray-500 text-sm font-light">
                  You’re Just One Click Away from{" "}
                </p>
                <p className="text-gray-500 text-sm font-light">
                  {" "}
                  Discovering Your Next Favorite Recipe
                </p>
              </div>
            </div>

            <div className="px-3 flex flrx-col gap-3">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                About Us
              </button>
            </div>
          </div>

          <div>
            <img width={420} className="max-md:hidden" src="/pic1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-white w-[85%] mx-auto h-full my-10 rounded-xl shadow-2xl p-8 relative">
        <div className="flex justify-between max-md:flex-col max-md:overflow-y-scroll max-md:h-[60vh]">
          <img
            className="rounded-2xl"
            src="/cookbook.webp"
            width={500}
            alt=""
          />
          <p className="mx-10 max-sm:mx-auto">
            Welcome to Cookbook, your ultimate destination for exploring,
            creating, and sharing a vibrant world of mouthwatering recipes that
            bring joy, flavor, and inspiration to your kitchen. At Cookbook, we
            believe that cooking is more than a task—it’s an art form, a way of
            expressing creativity, and a powerful means of connecting with
            cultures, traditions, and the people you love. <span className="max-md:hidden">Whether you’re a
            seasoned chef striving to refine your culinary expertise, a
            passionate foodie looking to experiment with bold flavors, or a
            curious beginner eager to embark on your cooking journey, we are
            here to spark your imagination and guide you every step of the way.
            Dive into the rich tapestry of global cuisines, from the aromatic
            spices of Moroccan tagines to the comforting warmth of Italian
            risottos, from savory street foods of Asia to decadent desserts from
            around the world. Unearth family treasures that have stood the test
            of time and learn cutting-edge techniques to elevate your dishes to
            restaurant-quality creations. Our ever-growing library of recipes,
            paired with expert tips, detailed tutorials, and an engaging
            community of food lovers, ensures that every visit to Cookbook
            leaves you inspired and empowered. But Cookbook is more than just a
            website—it’s a gateway to discovery. It’s where food meets passion,
            and where every recipe tells a story. Whether you’re hosting a
            dinner party, searching for quick weeknight meals, or looking to
            recreate the dishes of your childhood, we’re here to help you turn
            ordinary ingredients into extraordinary experiences. Step into a
            world of culinary possibilities and let Cookbook transform the way
            you cook, share, and savor every bite.</span>
            <button
              type="button"
              className="ml-2 text-pink-700 border border-pink-700 hover:bg-pink-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:focus:ring-pink-800 dark:hover:bg-pink-500"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default BeforeLogin;
