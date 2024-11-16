"use client"; // Diese Zeile fügt den Client-Modus hinzu

import { useState, useEffect } from "react";

const Content = () => {
  const [quote, setQuote] = useState<string>(""); // State für das Zitat

  // Funktion zum Laden eines neuen Zitats
  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/random?category=dev"
      );
      const data = await response.json();
      setQuote(data.value); // Zitat im State speichern
    } catch (error) {
      console.error("Fehler beim Laden des Zitats:", error);
      setQuote("Fehler: Zitat konnte nicht geladen werden.");
    }
  };

  // Zitat einmalig beim Laden der Seite holen
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="flex flex-col md:flex-row justify-center items-center p-8 space-y-4 md:space-y-0 md:space-x-8">
      <div>
        <img src="assets/img/chuckNorrisComic.png" className="rounded shadow-lg" alt="Image of a Chuck Norris cartoon"/>
      </div>

      {/* Rechter Bereich: Zitat */}
      <div className="text-center md:text-left">
        <p className="text-lg italic mb-4">"{quote}"</p>
        <button
          onClick={fetchQuote} // Button ruft die API auf
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Neues Zitat laden
        </button>
      </div>
    </main>
  );
};

export default Content;