import { Box, Stack } from "@mui/material";
import HealthBar from "./HealthBar";
import Calories from "./Calories";
import HungerBar from "./HungerBar";
import ThirstBar from "./ThirstBar";
import TotalConsumed from "./TotalConsumed";

export default function Stats({ health, hunger, thirst, calories, totalConsumed }) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box>
        <HealthBar value={health} />
        <HungerBar value={hunger} />
        <ThirstBar value={thirst} />
      </Box>
      <Box>
        <Calories value={calories} />
        <TotalConsumed value={totalConsumed} />
      </Box>
    </Stack>
  );
}