import React, { useState } from "react";
import { getTranslations, DEFAULT_LANGUAGE } from "./config";

const I18nComponent = () => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const translations = getTranslations(language);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex flex-col h-96 mt-32">
      <div className="bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-2">Select the language of your page</h1>
        <select
          className="block p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:border-blue-500"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="mr">Marathi</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{translations.greeting}</h1>
          <p className="text-lg text-gray-600">{translations.intro}</p>
        </div>
      </div>
    </div>
  );
};

export default I18nComponent;
