import Encyclopedia from "./Encyclopedia";
import Food from "./Food";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Fab, Stack, Typography } from "@mui/material";
import { ArrowBack, AutoStories } from "@mui/icons-material";
import Stats from "./Stats/Stats";

function App() {
  const death = useRef(new Audio("sfx/death.mp3"));

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
      "img/food/chips.png",
      "img/food/salad.png"
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

  const healthyFoods = ["apple", "banana", "salad", "water", "milk", "lemonade", "fresh orange juice"];

  const [encyclopediaOpened, setEncyclopediaOpened] = useState(false);

  const [foods, setFoods] = useState([]);

  const [health, setHealth] = useState(100);
  const [healthEffect, setHealthEffect] = useState(0); // 0: None | 1: Consumed healthy | 2: Consumed unhealthy
  const [hunger, setHunger] = useState(100);
  const [hungerEffect, setHungerEffect] = useState(0); // 0: None | 1: Overeating
  const [thirst, setThirst] = useState(100);
  const [thirstEffect, setThirstEffect] = useState(0); // 0: None | 1: Overhydrated
  const [calories, setCalories] = useState(0);
  const [totalConsumed, setTotalConsumed] = useState(0);
  const [hours, setHours] = useState(0);

  let isDead = health <= 0;

  if (isDead) death.current.play().catch((error) => console.error("Audio play error:", error));


  // Increments hours every 3 quarters of a second (1 game hour)
  useEffect(() => {
    const interval = setInterval(() => setHours((prevTimer) => prevTimer + 1), 750);

    if (isDead) clearInterval(interval);
    return () => clearInterval(interval);
  // eslint-disable-next-line
  }, [isDead]);

  // Updates health to increment if nourished or decrement if malnourished
  useEffect(() => {
    const interval = setInterval(() => setHealth((prevHealth) => hunger > 0 && thirst > 0 ? prevHealth + 1 : prevHealth - 10), 1000);
    
    if (health > 100) setHealth(100);

    if (isDead) clearInterval(interval);
    return () => clearInterval(interval);
  // eslint-disable-next-line
  }, [hunger > 0 && thirst > 0, health > 100, isDead ]);

  // Decrements hunger by 2 every second
  useEffect(() => {
    const interval = setInterval(() => setHunger((prevHunger) => prevHunger - 2), 1000);

    if (hunger > 100) {
      setHunger(100);
      setHealth((prevHealth) => prevHealth - 10);
      setHungerEffect(1);
    }

    if (hunger < 1 || isDead) clearInterval(interval);
    return () => clearInterval(interval);
  // eslint-disable-next-line
  }, [hunger > 100, hunger < 1, isDead]);

  // Decrements thirst by 2 every second
  useEffect(() => {
    const interval = setInterval(() => setThirst((prevThirst) => prevThirst - 2), 1000);

    if (thirst > 100) {
      setThirst(100);
      setHealth((prevHealth) => prevHealth - 10);
      setThirstEffect(1);
    }

    if (thirst < 1 || isDead) clearInterval(interval);
    return () => clearInterval(interval);
  // eslint-disable-next-line
  }, [thirst < 1 || isDead, thirst > 100]);

  // Adds food every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => addRandomFood(), 2000);

    if (isDead) clearInterval(interval);
    return () => clearInterval(interval);
  // eslint-disable-next-line
  }, [isDead]);

  const restart = () => {
    setHealth(100);
    setHealthEffect(0);
    setHunger(100);
    setHealthEffect(0);
    setThirst(100);
    setThirstEffect(0);
    setCalories(0);
    setTotalConsumed(0);
    setHours(0);
  };

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

    // Removes this after 2 seconds
    setTimeout(() => setFoods((prevFood) => prevFood.filter((food) => food.id !== id)), 2000);
  };

  const consume = (id, src, type) => {
    setFoods((prevFood) => prevFood.filter((food) => food.id !== id));
    setTotalConsumed((prevTotalConsumed) => prevTotalConsumed + 1);

    let food = src.split("/").pop().split(".")[0].replace(/-/g, " ");

    if (healthyFoods.includes(food)) {
      setHealth((prevHealth) => prevHealth + 10);
      setHealthEffect(1);
    } else {
      setHealth((prevHealth) => prevHealth - 10);
      setHealthEffect(2);
    }

    switch (type) {
      case 0:
        switch (food) {
          case "apple":
            setCalories((prevCalories) => prevCalories + 95);
            setHunger((prevHunger) => prevHunger + 20);
            setThirst((prevThirst) => prevThirst + 10);
            break;
          case "banana":
            setCalories((prevCalories) => prevCalories + 105);
            setHunger((prevHunger) => prevHunger + 20);
            break;
          case "burger":
            setCalories((prevCalories) => prevCalories + 254);
            setHunger((prevHunger) => prevHunger + 60);
            setThirst((prevThirst) => prevThirst - 20);
            break;
          case "chips":
            setCalories((prevCalories) => prevCalories + 240);
            setHunger((prevHunger) => prevHunger + 30);
            setThirst((prevThirst) => prevThirst - 30);
            break;
          case "fries":
            setCalories((prevCalories) => prevCalories + 378);
            setHunger((prevHunger) => prevHunger + 40);
            setThirst((prevThirst) => prevThirst - 30);
            break;
          case "hotdog":
            setCalories((prevCalories) => prevCalories + 151);
            setHunger((prevHunger) => prevHunger + 60);
            setThirst((prevThirst) => prevThirst - 20);
            break;
          case "ice cream":
            setCalories((prevCalories) => prevCalories + 137);
            setHunger((prevHunger) => prevHunger + 40);
            setThirst((prevThirst) => prevThirst + 20);
            break;
          case "waffle":
            setCalories((prevCalories) => prevCalories + 218);
            setHunger((prevHunger) => prevHunger + 40);
            setThirst((prevThirst) => prevThirst - 20);
            break;
          case "salad":
            setCalories((prevCalories) => prevCalories + 187);
            setHunger((prevHunger) => prevHunger + 50);
            setThirst((prevThirst) => prevThirst + 25);
            break;
          default:
            console.error("Invalid food!");
        }
        break;    
      case 1:
        switch (food) {
          case "water":
            setThirst((prevThirst) => prevThirst + 80);
            break;
          case "milk":
            setCalories((prevCalories) => prevCalories + 148);
            setHunger((prevHunger) => prevHunger + 10);
            setThirst((prevThirst) => prevThirst + 75);
            break;
          case "lemonade":
            setCalories((prevCalories) => prevCalories + 99);
            setThirst((prevThirst) => prevThirst + 70);
            break;
          case "fresh orange juice":
            setCalories((prevCalories) => prevCalories + 111);
            setHunger((prevHunger) => prevHunger + 5);
            setThirst((prevThirst) => prevThirst + 60);
            break;
          case "apple juice":
            setCalories((prevCalories) => prevCalories + 113);
            setHunger((prevHunger) => prevHunger + 5);
            setThirst((prevThirst) => prevThirst + 60);
            break;
          case "coke":
            setCalories((prevCalories) => prevCalories + 161);
            setHunger((prevHunger) => prevHunger + 5);
            setThirst((prevThirst) => prevThirst + 50);
            break;
          case "fanta":
            setCalories((prevCalories) => prevCalories + 174);
            setHunger((prevHunger) => prevHunger + 5);
            setThirst((prevThirst) => prevThirst + 50);
            break;
          case "coffee":
            setHunger((prevHunger) => prevHunger + 5);
            setThirst((prevThirst) => prevThirst + 60);
            break;
          default:
            console.error("Invalid food!");
        }
        break;
      default:
        console.error("Invalid type!");
    }

    const randomSfx = Math.floor(Math.random() * 3);

    switch (type) {
      case 0:
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
            console.error("Invalid randomSfx!");
        }
        break;
      case 1:
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
            console.error("Invalid randomSfx!");
        }
        break;
      default:
        console.error("Invalid type!");
    }
  };

  return (
    <Box>
      { !encyclopediaOpened &&
        <Box>
          <Stats
            health={health}
            healthEffect={healthEffect}
            setHealthEffect={setHealthEffect}
            hunger={hunger}
            hungerEffect={hungerEffect}
            setHungerEffect={setHungerEffect}
            thirst={thirst}
            thirstEffect={thirstEffect}
            setThirstEffect={setThirstEffect}
            calories={calories}
            totalConsumed={totalConsumed}
            hours={hours}
          />
          { health > 0 &&
            <Box>
              {foods.map((food) => (
                <div
                  key={food.id}
                  onClick={() => consume(food.id, food.src, food.type)}
                  style={{
                    position: "absolute",
                    top: food.top,
                    left: food.left
                  }}
                >
                  <Food src={food.src} />
                </div>
              ))}
            </Box>
          }
          { health < 1 &&
            <Stack position="relative" alignItems="center" top={170}>
              <Typography color="error" fontSize={60} fontWeight="bold">YOU DIED!</Typography>
              <Button onClick={restart} variant="contained" color="warning">Try again?</Button>
            </Stack>
          }
        </Box>
      }
      { encyclopediaOpened &&
        <Encyclopedia />
      }
      <Fab
        onClick={() => setEncyclopediaOpened(!encyclopediaOpened)}
        color="primary"
        sx={{
          position: "fixed",
          bottom: 14,
          left: 14
        }}
      >
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
