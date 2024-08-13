import SearchHeader from "./components/SearchHeader/SearchHeader";
import { BottomNavigation, Stack } from "@mui/material";

function App() {
  return (
    <Stack direction="column" spacing={40}>
      <SearchHeader />
      <div
        style={{
          maxWidth: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "2em",
          color: "#4F4F4F",
        }}
      >
        Добро пожаловать
      </div>
      <BottomNavigation
        sx={{
          width: "100%",
          height: "5%",
          bgcolor: "#4F4F4F",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      ></BottomNavigation>
    </Stack>
  );
}

export default App;
