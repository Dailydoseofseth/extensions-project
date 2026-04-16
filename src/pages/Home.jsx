// pages/Home.jsx
import { useState } from "react";
import data from "../data";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Home() {
  const [extensions, setExtensions] = useState(data);
  console.log(extensions);
  const [filter, setFilter] = useState("showAll");
    const [darkMode, setDarkMode] = useState(true);
    console.log("darkMode:", darkMode);
    console.log("filter:", filter);

  const [logoClicks, setLogoClicks] = useState(0);
    const [easterEgg, setEasterEgg] = useState(false);
    console.log("logoClicks:", logoClicks);
    console.log("easterEgg:", easterEgg);

  function handleToggle(id) {
    setExtensions((prev) =>
      prev.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            isActive: !card.isActive,
          };
        } else {
          return card;
        }
      }),
    );
  }

  function handleRemove(id) {
    setExtensions((prev) => prev.filter((card) => card.id !== id));
  }

  function handleFilter(type) {
    setFilter(type);
  }

  // show new 'filtered data' array (active, inactive, showall)
  function getFilteredCards() {
    if (filter === "active") {
      return extensions.filter((card) => card.isActive);
    }
    if (filter === "inactive") {
      return extensions.filter((card) => !card.isActive);
    }
    return extensions; // OR "showAlL"
  }

  function handleThemeToggle() {
    setDarkMode((prev) => !prev);
  }

  function handleLogoClick() {
    setLogoClicks((prev) => {
      const newCount = prev + 1;

      if (newCount === 3) {
        setEasterEgg(true); // 🔥 triggers full UI mode
        return 0;
      }

      return newCount;
    });
  }

  return (
    // <div className={darkMode ? "dark" : "light"}>
    <div
      className={`${darkMode ? "dark" : "light"} ${easterEgg ? "easterEgg" : ""}`}
    >
      <div className="topBar">
        <img
          src="/assets/images/logo.svg"
          alt="Extensions Logo"
          onClick={handleLogoClick}
        />

        <button className="mode" onClick={handleThemeToggle}>
          <img
            src={
              darkMode
                ? "/assets/images/icon-sun.svg"
                : "/assets/images/icon-moon.svg"
            }
            alt="theme toggle"
          />
        </button>
      </div>

      <div className="header">
        <h1>Extensions List</h1>

        <div className="navBar">
          <Button label="Show All" onClick={() => handleFilter("showAll")} />
          <Button label="Active" onClick={() => handleFilter("active")} />
          <Button label="Inactive" onClick={() => handleFilter("inactive")} />
        </div>
      </div>

      <div className="cards-wrapper">
        {getFilteredCards().map((card) => (
          <div key={card.id}>
            <Card
              id={card.id}
              logo={card.logo}
              name={card.name}
              description={card.description}
              isActive={card.isActive}
              handleToggle={handleToggle}
              handleRemove={handleRemove}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
