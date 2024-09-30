import { useState } from "react";

export default function Food({ src, drink=false }) {
  const [isConsumed, setIsConsumed] = useState(false);

  const eat1 = new Audio("eat1.mp3");
  const eat2 = new Audio("eat2.mp3");
  const drink1 = new Audio("drink1.mp3");
  const drink2 = new Audio("drink2.mp3");

  const consume = () => {
    setIsConsumed(true);
    const randomSfx = Math.floor(Math.random() * 2);
    if (drink) {
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
    } else {
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