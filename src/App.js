import Encyclopedia from "./Encyclopedia";
import Food from "./Food";
import { useEffect, useRef, useState } from "react";
import { Box, Fab } from "@mui/material";
import { ArrowBack, AutoStories } from "@mui/icons-material";

function App() {
  const eat1 = useRef(new Audio("sfx/eat/eat1.mp3"));
  const eat2 = useRef(new Audio("sfx/eat/eat2.mp3"));
  const eat3 = useRef(new Audio("sfx/eat/eat3.mp3"));
  const drink1 = useRef(new Audio("sfx/drink/drink1.mp3"));
  const drink2 = useRef(new Audio("sfx/drink/drink2.mp3"));
  const drink3 = useRef(new Audio("sfx/drink/drink3.mp3"));

  const srcs = [
    [ // Food
      "img/food/apple.png",
      "img/food/banana.png",
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
      "img/drink/fresh-orange-juice.png",
      "img/drink/apple-juice.png",
      "img/drink/coke.png",
      "img/drink/fanta.png",
      "img/drink/coffee.png"
    ]
  ];

  const [encyclopediaOpened, setEncyclopediaOpened] = useState(false);

  const [foods, setFoods] = useState([]);

  const addRandomFood = () => {
    const id = Math.random().toString(36).slice(2, 11);
    const type = Math.floor(Math.random() * 2);
    const randSrc = Math.floor(Math.random() * srcs[type].length);

    const newFood = {
      id,
      src: srcs[type][randSrc],
      type,
      top: `${Math.random() * (100 - (240 / window.innerHeight) * 100)}vh`,
      left: `${Math.random() * (100 - (240 / window.innerWidth) * 100)}vw`
    };

    setFoods((prevFood) => [...prevFood, newFood]);

    // Remove food after 1 second
    setTimeout(() => {
      setFoods((prevFood) => prevFood.filter((food) => food.id !== id));
    }, 1000);
  };

  const consume = (id, type) => {
    setFoods((prevFood) => prevFood.filter((food) => food.id !== id));
    const randomSfx = Math.floor(Math.random() * 3);
    if (type === 0) {
      switch (randomSfx) {
        case 0:
          if (!eat1.current.paused) eat1.current.currentTime = 0; // Restart if already playing
          eat1.current.play().catch((error) => console.error("Audio play error:", error));
          break;
        case 1:
          if (!eat2.current.paused) eat2.current.currentTime = 0;
          eat2.current.play().catch((error) => console.error("Audio play error:", error));
          break;
        case 2:
          if (!eat3.current.paused) eat3.current.currentTime = 0;
          eat3.current.play().catch((error) => console.error("Audio play error:", error));
          break;
        default:
          throw new Error("Invalid randomSfx!");
      }
    } else {
      switch (randomSfx) {
        case 0:
          if (!drink1.current.paused) drink1.current.currentTime = 0;
          drink1.current.play().catch((error) => console.error("Audio play error:", error));
          break;
        case 1:
          if (!drink2.current.paused) drink2.current.currentTime = 0;
          drink2.current.play().catch((error) => console.error("Audio play error:", error));
          break;
        case 2:
          if (!drink3.current.paused) drink3.current.currentTime = 0;
          drink3.current.play().catch((error) => console.error("Audio play error:", error));
          break;
        default:
          throw new Error("Invalid randomSfx!");
      }
    }
  }
/* temporary disable
  useEffect(() => {
    // Adds a random food every second
    const interval = setInterval(() => {
      addRandomFood();
    }, 1000);

    return () => clearInterval(interval);
  })
*/
  return (
    <Box
      position="relative"
      width="100vw"
      height="100vh"
    >
      {foods.map((food) => (
        <div
          key={food.id}
          onClick={() => consume(food.id, food.type)}
          style={{
            position: "absolute",
            top: food.top,
            left: food.left
          }}
        >
          <Food src={food.src} />
        </div>
      ))}
      { encyclopediaOpened &&
        <Encyclopedia />
      }
      <Fab onClick={() => setEncyclopediaOpened(!encyclopediaOpened)} color="primary" sx={{ position: "fixed", bottom: 14, left: 14 }}>
        { encyclopediaOpened &&
          <ArrowBack />
        }
        { !encyclopediaOpened &&
          <AutoStories />
        }
      </Fab>
    </Box>
  );
}

export default App;
