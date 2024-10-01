import TopBar from "./TopBar/TopBar";
import Food from "./Food";
import { Stack } from "@mui/material";

function App() {
  return (
    <div>
      <TopBar />
      <Stack direction="row">
        <div>
          <Food />
          <Food />
        </div>
        <div>
          <Food />
          <Food />
        </div>
        <div>
          <Food />
          <Food />
        </div>  
      </Stack>
    </div>
  );
}

export default App;
