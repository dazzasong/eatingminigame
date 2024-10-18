import { Box, LinearProgress, Stack, Typography } from "@mui/material";

function ThirstBar({ value }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography>Thirst:</Typography>
      <Box position="relative" left={12} width={200}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
    </Stack>
  );
}

export default ThirstBar;