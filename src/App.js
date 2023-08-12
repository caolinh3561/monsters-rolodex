import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filterMonsters, setFilterMonsters] = useState([]);
  console.log("rendered!");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setMonsters(res));
  }, []);

  useEffect(() => {
    var cloneFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    setFilterMonsters(cloneFilterMonsters);
  }, [searchString, monsters]);
  const handleSearch = (e) => {
    setSearchString(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        handleSearch={handleSearch}
        className="search-box"
        placeholder="search monsters"
      />
      <CardList monsters={filterMonsters} className="monster-list" />
    </div>
  );
};

export default App;
