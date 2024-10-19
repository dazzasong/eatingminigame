import { Box, Stack, Typography } from "@mui/material";
import HealthBar from "./HealthBar";
import Calories from "./Calories";
import HungerBar from "./HungerBar";
import ThirstBar from "./ThirstBar";
import TotalConsumed from "./TotalConsumed";
import Timer from "./Timer";

export default function Stats({ health, hunger, thirst, calories, totalConsumed, timer }) {
  return (
    <Stack direction="row" justifyContent="space-between" mx={1}>
      <Box>
        <HealthBar value={health} />
        <HungerBar value={hunger} />
        <ThirstBar value={thirst} />
      </Box>
      <Box>
        <Timer value={timer} />
      </Box>
      <Box width={160}>
        <Calories value={calories} />
        <TotalConsumed value={totalConsumed} />
      </Box>
    </Stack>
  );
}