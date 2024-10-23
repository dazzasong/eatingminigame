import { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Medication } from "@mui/icons-material";

export default function RequestMeds({ requestedMeds, setRequestedMeds, health }) {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (requestedMeds) {
      const interval = setInterval(() => setCount((prevCount) => prevCount - 1), 1000);
  
      if (count < 1) {
        clearInterval(interval);
        setRequestedMeds(false);
      }
  
      return () => clearInterval(interval);
    }
  // eslint-disable-next-line
  }, [requestedMeds, count])

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Button
        onClick={() => setRequestedMeds(true)}
        variant="contained"
        color="success"
        size="small"
        startIcon={<Medication />}
        disabled={requestedMeds || count < 1 || health >= 25}
      >
        <b>REQUEST MEDS</b>
      </Button>
      { requestedMeds &&
        <Typography fontWeight="bold">{count}</Typography>
      }
    </Stack>
  );
}