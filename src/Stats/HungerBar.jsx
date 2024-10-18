import { Box, LinearProgress, Stack, Typography } from "@mui/material";

function HungerBar({ value }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography>Hunger:</Typography>
      <Box width={200}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
    </Stack>
  );
}

export default HungerBar;