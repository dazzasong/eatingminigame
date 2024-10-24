import { Button, Stack, Typography } from "@mui/material";

export default function Death({ restart, highScore }) {
  return (
    <Stack alignItems="center" position="relative" top={120}>
      <Typography color="error" fontSize={60} fontWeight="bold">YOU DIED!</Typography>
      <Button onClick={restart} variant="contained" color="warning">Try again?</Button>
      <Typography mt={2}>High score: <b>{highScore}</b></Typography>
    </Stack>
  );
}