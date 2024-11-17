"use client";

import { useState, useEffect } from "react";

const Content = () => {
  const [quote, setQuote] = useState<string>("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random?category=dev");
      const data = await response.json();
      setQuote(data.value);
    } catch (error) {
      console.error("Fehler beim Laden des Zitats:", error);
      setQuote("Fehler: Zitat konnte nicht geladen werden.");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="h-full flex justify-around items-center">
      <img src="assets/img/chuckNorrisComic.png" className="max-w-[30.438rem] h-auto comic" alt="Image of a Chuck Norris comic"/>

      <div className="w-[37.5rem] h-[12.5rem] flex flex-col justify-between items-center quote-and-btn-container">
        {/* <div className="w-[37.5rem] h-[18.75rem] flex flex-col justify-between items-center quote-container"> */}
        <div className="quote-container">
          <p className="text-lg italic">"{quote}"</p>
        </div>

        <button onClick={fetchQuote} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Load new quote
        </button>
      </div>
    </main>
  );
};

export default Content;