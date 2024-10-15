import { useState } from "react";

export default function Food({ src, type }) {
  const eat1 = new Audio("sfx/eat/eat1.mp3");
  const eat2 = new Audio("sfx/eat/eat2.mp3");
  const eat3 = new Audio("sfx/eat/eat3.mp3");
  const drink1 = new Audio("sfx/drink/drink1.mp3");
  const drink2 = new Audio("sfx/drink/drink2.mp3");
  const drink3 = new Audio("sfx/drink/drink3.mp3");
  
  const [isConsumed, setIsConsumed] = useState(false);
  const consume = () => {
    setIsConsumed(true);
    const randomSfx = Math.floor(Math.random() * 3);
    if (type === 0) {
      switch (randomSfx) {
        case 0:
          eat1.play();
          break;
        case 1:
          eat2.play();
          break;
        case 2:
          eat3.play();
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
        case 2:
          drink3.play();
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
          src={src}
          alt=""
          width={240}
          onClick={consume}
          style={{ cursor: "grab" }}
        />
      )}
    </div>
  );
}