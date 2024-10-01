import { useState } from "react";

export default function Food() {
  const srcs = [
    [ // Food
      "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-01-buffalo-wings%2Fbuffalo-wings-351"
    ],
    [ // Drinks
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-12-strawberry-banana-smoothie%2Fstrawberry-banana-smoothie-221"
    ]
  ];

  const eat1 = new Audio("eat1.mp3");
  const eat2 = new Audio("eat2.mp3");
  const drink1 = new Audio("drink1.mp3");
  const drink2 = new Audio("drink2.mp3");

  const type = Math.floor(Math.random() * 2);
  const randomFood = () => {
    const randInt = Math.floor(Math.random() * srcs[type].length);
    return srcs[type][randInt];
  }
  
  const [isConsumed, setIsConsumed] = useState(false);
  const consume = () => {
    setIsConsumed(true);
    const randomSfx = Math.floor(Math.random() * 2);
    if (type === 0) {
      switch (randomSfx) {
        case 0:
          eat1.play();
          break;
        case 1:
          eat2.play();
          break;
        default:
          throw new Error("Invalid randomSfx!");
      }
    } else {
      switch (randomSfx) {
        case 0:
          drink1.play();
          break;
        case 1:
          drink2.play();
          break;
        default:
          throw new Error("Invalid randomSfx!");
      }
    }
  }

  return (
    <div>
      {!isConsumed && (
        <img
          src={randomFood()}
          alt=""
          width={240}
          onClick={consume}
          style={{ cursor: "grab" }}
        />
      )}
    </div>
  );
}