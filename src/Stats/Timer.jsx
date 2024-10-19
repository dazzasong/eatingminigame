import { Typography } from "@mui/material";

function Timer({ value }) {
  return (
    <Typography fontSize={18}>TIME PASSED: <b>{value} hours</b></Typography>
  )
}

export default Timer;