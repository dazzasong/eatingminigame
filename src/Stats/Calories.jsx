import { Stack, Typography } from "@mui/material";
// add thirst and hunger - rapdily descresws
function Calories({ value }) {
  return (
    <Stack direction="row">
      <Typography>Calories:</Typography>
      <Typography position="relative" left={59}>{value}</Typography>
    </Stack>
  );
}

export default Calories;