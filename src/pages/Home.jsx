// pages/Home.jsx
import { useState } from "react";
import data from "../data";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function Home() {
  const [extensions, setExtensions] = useState(data);
  console.log(extensions);
  const [filter, setFilter] = useState("showAll");

  // ✅ ADD THIS FUNCTION
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

  function getFilteredCards() {
    if (filter === "active") {
      return extensions.filter((card) => card.isActive);
    }
    if (filter === "inactive") {
      return extensions.filter((card) => !card.isActive);
    }
    return extensions; // showAll fallback
  }

  return (
    <>
      <div className="main-wrapper">
        <div className="header">
          <h1>Extensions List</h1>
          <div className="navBar">
            <Button label="Show All" onClick={() => handleFilter("showAll")} />

            <Button label="Active" onClick={() => handleFilter("active")} />

            <Button label="Inactive" onClick={() => handleFilter("inactive")} />
          </div>
        </div>
        <div className="cards-wrapper">
          {getFilteredCards().map((card) => {
            return (
              <div key={card.id}>
                <Card
                  // key={card.id}
                  id={card.id}
                  logo={card.logo}
                  name={card.name}
                  description={card.description}
                  isActive={card.isActive}
                  handleToggle={handleToggle}
                  handleRemove={handleRemove}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

//here is my pseudocode, annotation & flow. Still matching this? or no?
