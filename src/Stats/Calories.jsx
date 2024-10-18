import { Stack, Typography } from "@mui/material";
// add thirst and hunger - rapdily descresws
function Calories({ value }) {
  return (
    <Stack>
      <Typography>Calories: {value}</Typography>
    </Stack>
  );
}

export default Calories;