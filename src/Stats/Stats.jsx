import { Box, Stack } from "@mui/material";
import HealthBar from "./HealthBar";
import Calories from "./Calories";
import HungerBar from "./HungerBar";
import ThirstBar from "./ThirstBar";
import TotalConsumed from "./TotalConsumed";
import Timer from "./Timer";

export default function Stats({ health, healthEffect, setHealthEffect, hunger, hungerEffect, setHungerEffect, thirst, thirstEffect, setThirstEffect, calories, totalConsumed, hours }) {
  return (
    <Stack direction="row" justifyContent="space-between" m={1}>
      <Box>
        <HealthBar value={health} effect={healthEffect} setEffect={setHealthEffect} />
        <HungerBar value={hunger} effect={hungerEffect} setEffect={setHungerEffect} />
        <ThirstBar value={thirst} effect={thirstEffect} setEffect={setThirstEffect} />
      </Box>
      <Box>
        <Timer value={hours} />
      </Box>
      <Box>
        <Calories value={calories} />
        <TotalConsumed value={totalConsumed} />
      </Box>
    </Stack>
  );
}