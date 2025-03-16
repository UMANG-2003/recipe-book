"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useRef } from "react";

function Navbar() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const { data: session } = useSession();

  const [isExpanded, setIsExpanded] = useState(false);
  const reff = useRef(null);

  const toggleSidebar = () => {
    if (reff.current) {
      setIsExpanded((prev) => !prev);
    }
  };

  const sidebarClose = () => {
    if (reff.current) {
      setIsExpanded((prev) => !prev);
    }
  };

  if (session) {
    return (
      <>
        <nav className="px-[5vw] py-3 flex justify-between items-center">
          <div className="md:hidden">
            <img
              onClick={toggleSidebar}
              className="w-5 md:hidden"
              src="/hamburger.png"
              alt=""
            />
          </div>
          <Link href={"/"}>
            <div className="box flex gap-2 items-center cursor-pointer">
              <img
                width={45}
                src="/logo.png"
                className="rounded-full"
                alt="CookBook Logo"
              />
              <div className="text-3xl max-md:text-xl">CookBook</div>
            </div>
          </Link>

          <ul className="flex gap-9 items-center pt-3 max-md:hidden">
            {[
              { label: "Home", barWidth: "w-12", route: "/" },
              { label: "Recipe Book", barWidth: "w-24", route: "/RecipeBook" },
              { label: "New Recipes", barWidth: "w-24", route: "/NewRecipes" },
              { label: "Favourites", barWidth: "w-20", route: "/Favourites" },
            ].map((item, index) => (
              <li
                key={index}
                className="group flex flex-col justify-center items-center"
              >
                <Link href={item.route}>
                  <span className="menu text-lg cursor-pointer">
                    {item.label}
                  </span>
                </Link>
                <div
                  className={`bar ${item.barWidth} bg-black h-1 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-center`}
                ></div>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 items-center pt-3">
            <button
              type="button"
              onClick={handleSignOut}
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
            >
              SignOut
            </button>
            <img
              width={35}
              className="rounded-full"
              src={session.user?.image || "/default-avatar.png"}
              alt=""
            />
          </div>
        </nav>

        <div
          ref={reff}
          className="absolute z-10 bg-white h-full top-0 md:hidden"
          style={{
            width: isExpanded ? "60%" : "0%",
            transition: "width 1s",
          }}
        >
          <div className="cursor-pointer absolute top-5 right-5 md:hidden">
            <img
              width={30}
              onClick={sidebarClose}
              src="/cross-button.png"
              alt="Close Sidebar"
              className="md:hidden"
            />
          </div>
          <ul className="flex flex-col gap-3 items-center pt-3 mt-12 md:hidden">
            {[
              { label: "Home", barWidth: "w-12", route: "/" },
              { label: "Recipe Book", barWidth: "w-24", route: "/RecipeBook" },
              { label: "New Recipes", barWidth: "w-24", route: "/NewRecipes" },
              { label: "Favourites", barWidth: "w-20", route: "/Favourites" },
            ].map((item, index) => (
              <li
                key={index}
                className="group flex flex-col justify-center items-center  py-2 bg-yellow-100 w-full hover:bg-yellow-200 md:hidden"
              >
                <Link href={item.route}>
                  <span
                    className="menu text-lg cursor-pointer md:hidden"
                    style={{ fontSize: isExpanded ? "1rem" : "0rem" }}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  return (
    <>
      <nav className="px-[5vw] py-3 flex justify-between items-center" >
        <div className="box flex gap-2 items-center cursor-pointer">
          <img
            width={45}
            src="/logo.png"
            className="rounded-full"
            alt="CookBook Logo"
          />
          <div className="text-3xl">CookBook</div>
        </div>

        <ul className="flex gap-9 items-center pt-3 max-md:hidden">
          {[
            { label: "Home", barWidth: "w-12" },
            { label: "Recipe Book", barWidth: "w-24" },
            { label: "New Recipes", barWidth: "w-24" },
            { label: "Favourites", barWidth: "w-20" },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-center items-center"
            >
              <li className="menu text-lg cursor-pointer">{item.label}</li>
              <div
                className={`bar ${item.barWidth} bg-black h-1 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-center`}
              ></div>
            </div>
          ))}
        </ul>

        <div className="flex gap-2 items-center pt-3">
          <button
            type="button"
            onClick={() => signIn()}
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
          >
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
