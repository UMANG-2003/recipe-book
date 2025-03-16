import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Cookbook</h2>
          <p className="text-sm">Your go-to place for amazing recipes!</p>
        </div>

        <div className="mb-4">
          <a href="mailto:contact@cookbook.com" className="text-sm hover:text-pink-400">
            contact@cookbook.com
          </a>
        </div>

        <div className="mb-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Cookbook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
