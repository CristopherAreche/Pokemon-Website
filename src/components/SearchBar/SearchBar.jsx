import React from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getPokemonByName, getAllPokemon } from "../../app/actions";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.value === "") {
      dispatch(getAllPokemon());
    }
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    dispatch(getPokemonByName(event));
  };

  const handleKeyPress = () => {
    if (searchTerm.length !== 0) {
      handleSearch(searchTerm);
    } else {
      dispatch(getAllPokemon());
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className={styles.searchButton} onClick={handleKeyPress}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
