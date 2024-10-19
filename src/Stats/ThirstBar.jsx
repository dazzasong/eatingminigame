import { Box, LinearProgress, Stack, Typography } from "@mui/material";

function ThirstBar({ value }) {
  let color = "warning";

  if (value >= 25) color = "warning";
  else color = "error";

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography>Thirst:</Typography>
      <Box position="relative" left={12} width={200}>
        <LinearProgress variant="determinate" color={color} value={value} />
      </Box>
    </Stack>
  );
}

export default ThirstBar;