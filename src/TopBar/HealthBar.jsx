import { Box, LinearProgress } from "@mui/material";

function HealthBar({ value }) {
  return (
    <Box>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
}

export default HealthBar;