import TopBar from "./TopBar/TopBar";
import Food from "./Food";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

function App() {
  const [foods, setFoods] = useState([]);

  const addRandomFood = () => {
    const id = Math.random().toString(36).slice(2, 11);

    const newFood = {
      id,
      top: `${Math.random() * 90}vh`, // Random position within viewport height
      left: `${Math.random() * 90}vw` // Random position within viewport width
    };

    setFoods((prevFood) => [...prevFood, newFood]);

    // Remove the food after 5 seconds
    //setTimeout(() => {
    //  setFoods((prevFood) => prevFood.filter((food) => food.id !== id));
    //}, 5000);
  };

  useEffect(() => {
    // Adds a random food every second
    const interval = setInterval(() => {
      addRandomFood();
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <Box
      position="relative"
      width="100vw"
      height="100vh"
    >
      {foods.map((food) => (
        <Box
          key={food.id}
          position="absolute"
          top={food.top}
          left={food.left}
        >
          <Food />
        </Box>
      ))}
    </Box>
  );
}

export default App;
