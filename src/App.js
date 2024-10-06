import TopBar from "./TopBar/TopBar";
import Food from "./Food";
import { Stack } from "@mui/material";

function App() {
  return (
    <div>
      <Stack direction="row">
        <Food />
        <Food />
        <Food />
      </Stack>
    </div>
  );
}

export default App;
