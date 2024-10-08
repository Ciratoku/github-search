import { AppBar, Toolbar, Button } from "@mui/material";
import "./SearchHeader.scss";

function SearchHeader() {
  return (
    <AppBar sx={{ bgcolor: "#00838F" }}>
      <Toolbar>
        <input className="search-bar" placeholder="Введите поисковый запрос" />
        <Button className="search-btn" variant="contained" sx={{ left: 10 }}>
          ИСКАТЬ
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default SearchHeader;
