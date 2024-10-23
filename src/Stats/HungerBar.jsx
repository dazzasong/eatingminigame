import { useEffect } from "react";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const variants = {
  initial: { x: -10, opacity: 0 },
  animate: { x: 0, opacity: [null, 1, 0]}
};

function HungerBar({ value, effect, setEffect }) {
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
        return "Overeating!";
      default:
        return;
    }
  };

  let color = "warning";

  if (value >= 25) color = "warning";
  else color = "error";

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography>Hunger:</Typography>
      <Box width={200}>
        <LinearProgress variant="determinate" color={color} value={value} />
      </Box>
      <motion.div
        initial={"initial"}
        animate={effect ? "animate" : null}
        variants={variants}
      >
        <Typography color="error" fontWeight="bold">{effectText()}</Typography>
      </motion.div>
    </Stack>
  );
}

export default HungerBar;