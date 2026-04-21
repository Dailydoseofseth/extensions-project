import Toggle from "./Toggle";

export default function Card({
  id,
  logo,
  name,
  description,
  isActive,
  handleToggle,
  handleRemove,
  onLogoClick,
}) {
  return (
    <div className="theCards">
      <img src={logo} alt={name} onClick={onLogoClick} />
      <h2>{name}</h2>
      <p>{description}</p>

      {/* TARGETS bottom row for CSS */}
      <div className="card-controls">
        <button onClick={() => handleRemove(id)}>Remove</button>

        <Toggle isActive={isActive} onToggle={() => handleToggle(id)} />
      </div>
    </div>
  );
}

// export default function Card(card) {
//   return (
//     <div className="theCards">
//       <img src={card.logo} alt={card.name} />
//       <h2>{card.name}</h2>
//       <p>{card.description}</p>

//       <Toggle isActive={card.isActive} />
//     </div>
