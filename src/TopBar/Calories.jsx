import { LinearProgress } from "@mui/material";
// add thirst and hunger - rapdily descresws
function Calories({ value }) {
  return (
    <LinearProgress variant="determinate" value={value} />
  );
}

export default Calories;