// import React, { useState } from "react";
// import { spicyFoods, getNewRandomSpicyFood } from "../data/SpicyFoodList";

// function SpicyFoodList() {
//   const [foods, setFoods] = useState(spicyFoods);

//   function handleAddFood() {
//     const newFood = getNewRandomSpicyFood();
//     console.log(newFood);
//   }

//   const foodList = foods.map((food) => (
//     <li key={food.id}>
//       {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
//     </li>
//   ));

//   return (
//     <div>
//       <button onClick={handleAddFood}>Add New Food</button>
//       <ul>{foodList}</ul>
//     </div>
//   );
// }

// export default SpicyFoodList;

import React, { useState } from 'react';

const getNewSpicyFood = () => {
  // Sample data structure for a spicy food item
  return {
    id: new Date().getTime(),
    name: 'Spicy Food',
    heatLevel: Math.floor(Math.random() * 10) + 1,
    cuisine: 'Unknown',
  };
};

function SpicyFoodList() {
  const [foods, setFoods] = useState([]);
  const [filterBy, setFilterBy] = useState('All');

  const handleAddFood = () => {
    const newFood = getNewSpicyFood();
    setFoods((prevFoods) => [...prevFoods, newFood]);
  };

  const handleLiClick = (id) => {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === 'All') {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;

