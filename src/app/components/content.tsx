"use client"; // This directive enables the use of React hooks on the client-side in Next.js.

import { useState, useEffect } from "react";


/**
 * Content component.
 * 
 * This component fetches and displays a random Chuck Norris quote from an external API.
 * It shows the quote alongside an image and a button to fetch a new quote.
 * The quote is fetched once when the component is mounted and can be refreshed by the user.
 * 
 * @returns {JSX.Element} The rendered content with the quote and image, including a button to load a new quote.
 */
const Content = () => {
  const [quote, setQuote] = useState<string>("");

  /**
   * Fetches a random Chuck Norris quote from the API and updates the quote state.
   * If the API request fails, a default error message is set as the quote.
   */
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random?category=dev");
      const data = await response.json();
      setQuote(data.value);
    } catch (error) {
      console.error("Error loading quote:", error);
      setQuote("Error: Quote could not be loaded.");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="h-full flex justify-around items-center">
      <img src="assets/img/chuckNorrisComic.png" className="max-w-[30.438rem] h-auto comic" alt="Image of a Chuck Norris comic"/>

      <div className="w-[37.5rem] h-[12.5rem] flex flex-col justify-between items-center quote-and-btn-container">
        <div className="quote-container">
          <p className="text-lg italic">&quot;{quote}&quot;</p>
        </div>

        <button onClick={fetchQuote} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Load new quote
        </button>
      </div>
    </main>
  );
};

export default Content;