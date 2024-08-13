import SearchHeader from "./components/SearchHeader/SearchHeader";
import { BottomNavigation } from "@mui/material";

function App() {
  return (
    <>
      <SearchHeader />
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
    </>
  );
}

export default App;
