import Food from "./Food";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

function App() {
  const srcs = [
    [ // Food
      "img/food/apple.png",
      "img/food/burger.png",
      "img/food/fries.png",
      "img/food/hotdog.png",
      "img/food/ice-cream.png",
      "img/food/waffle.png",
      "img/food/chips.png"
    ],
    [ // Drinks
      "img/drink/water.png",
      "img/drink/milk.png",
      "img/drink/lemonade.png",
      "img/drink/orange-juice.png",
      "img/drink/apple-juice.png",
      "img/drink/coffee.png"
    ]
  ];

  const [foods, setFoods] = useState([]);

  const addRandomFood = () => {
    const id = Math.random().toString(36).slice(2, 11);
    const type = Math.floor(Math.random() * 2);
    const randSrc = Math.floor(Math.random() * srcs[type].length);

    const newFood = {
      id,
      src: srcs[type][randSrc],
      type,
      top: `${Math.random() * 90}vh`, // Random position within viewport height
      left: `${Math.random() * 90}vw` // Random position within viewport width
    };

    setFoods((prevFood) => [...prevFood, newFood]);

    /* Remove food after 4 seconds
    setTimeout(() => {
      setFoods((prevFood) => prevFood.filter((food) => food.id !== id));
    }, 4000);
    */
  };

  useEffect(() => {
    // Adds a random food every 3 seconds
    const interval = setInterval(() => {
      addRandomFood();
    }, 3000);

    return () => clearInterval(interval);
  })

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
          <Food src={food.src} type={food.type} />
        </Box>
      ))}
    </Box>
  );
}

export default App;
