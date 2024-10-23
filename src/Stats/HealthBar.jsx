import { useEffect } from "react";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const variants = {
  initial: { x: -10, opacity: 0 },
  animate: { x: 0, opacity: [null, 1, 0]}
};

function HealthBar({ value, effect, setEffect }) {
  useEffect(() => {
    setTimeout(() => {
      setEffect(0);
    }, 800);
  // eslint-disable-next-line
  }, [effect]);
  
  const effectText = () => {
    switch (effect) {
      case 0:
        return null;
      case 1:
        return "Healthy!";
      case 2:
        return "Unhealthy!";
      default:
        return;
    }
  };
          
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
      <motion.div
        initial={"initial"}
        animate={effect ? "animate" : null}
        variants={variants}
      >
        <Typography color="success" fontWeight="bold" position="relative" left={6}>{effectText()}</Typography>
      </motion.div>
    </Stack>
  );
}

export default HealthBar;