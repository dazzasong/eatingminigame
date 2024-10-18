import { Box, LinearProgress, Stack, Typography } from "@mui/material";

function HealthBar({ value }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography>Health:</Typography>
      <Box position="relative" left={6} width={200}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
    </Stack>
  );
}

export default HealthBar;