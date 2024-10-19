import { Box, LinearProgress, Stack, Typography } from "@mui/material";

function HealthBar({ value }) {
  let color = "success";

  if (value >= 75) color = "success";
  else if (value >= 25 && value < 75) color = "warning";
  else color = "error";

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography>Health:</Typography>
      <Box position="relative" left={6} width={200}>
        <LinearProgress variant="determinate" color={color} value={value} />
      </Box>
    </Stack>
  );
}

export default HealthBar;