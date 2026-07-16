import { useState } from "react";
import { LanguageButton } from "./components/LanguageButton";
import { LanguageCard } from "./components/LanguageCard";
import { languages } from "./data/languages";

export const App = () => {
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);

  return (
    <div className="container">
      <h1>Learn Web development</h1>
      <div className="buttons-container">
        {languages.map((lang) => {
          return (
            <LanguageButton
              key={lang.id}
              title={lang.title}

              isActive={lang.id === activeLanguage.id}

              onClickEvent={() => setActiveLanguage(lang)}
            />
          );
        })}
      </div>
      <LanguageCard linguaggio={activeLanguage} />
    </div>
  );
};

export default App;
