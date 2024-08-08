import "./SearchHeader.scss";

function SearchHeader() {
  return (
    <header className="search-header">
      <input
        className="search-bar"
        placeholder="Введите поисковый запрос"
      ></input>
      <button>ИСКАТЬ</button>
    </header>
  );
}

export default SearchHeader;
