import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const CharacterAttributes = ({totalPoints}) => {
  const [points, setPoints] = useState(totalPoints)
  const [health, setHealth] = useState(0)
  const [stamina, setStamina] = useState(0)
  const [speed, setSpeed] = useState(0)

  const handleHealth = (value) => {
    if (health > Number(value)) {
      setPoints(points +1)
    } else {
      setPoints(points >= 1 ? (points - 1) : 0)
    }
    setHealth(value)
  }

  const handleStamina = (value) => {
    if (stamina > Number(value)) {
      setPoints(points +1)
    } else {
      setPoints(points >= 1 ? (points - 1) : 0)
    }
    setStamina(value)
  }

  const handleSpeed = (value) => {
    if (speed > Number(value)) {
      setPoints(points +1)
    } else {
      setPoints(points >= 1 ? (points - 1) : 0)
    }
    setSpeed(value)
  }

  const handleDisabled = (attr) => {
    if (Number(attr) === 10) {
      return true;
    } else if (points <= 0) {
      return true;
    } else  {
      return false;
    }
  }

  useEffect(() => {

  }, [points])

  return (
    <div>
      Character stats: <span id="points">{points}</span> points left.
      <div>
        <p>{health}</p>
        <input onChange={e => handleHealth(e.target.value)} disabled={handleDisabled(health)} type="range" id="health" min="0" max={totalPoints} defaultValue={health} step="1" />Health
      </div>
      <div>
      <p>{stamina}</p>
        <input onChange={e => handleStamina(e.target.value)} disabled={handleDisabled(stamina)} type="range" id="stamina" min="0" max={totalPoints} defaultValue={stamina} step="1" />Stamina
      </div>
      <div>
      <p>{speed}</p>
        <input onChange={e => handleSpeed(e.target.value)} disabled={handleDisabled(speed)} type="range" id="speed" min="0" max={totalPoints} defaultValue={speed} step="1" />Speed
      </div>
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<CharacterAttributes totalPoints={15} />);

// DONE!!!! 33%