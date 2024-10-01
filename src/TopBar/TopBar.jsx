import { Stack } from "@mui/material";
import UnhealthinessBar from "./HealthBar";
import Calories from "./Calories";

export default function TopBar() {
  return (
    <Stack>
      <UnhealthinessBar />
      <Calories />
    </Stack>
  );
}