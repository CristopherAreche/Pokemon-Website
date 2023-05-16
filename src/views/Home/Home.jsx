import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../../app/actions";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const { pokemons, length } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllPokemon()).then(() => {
        setIsLoading(false);
      });
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    if (length !== 0) {
      setPage(1);
    }
  }, [length]);

  return (
    <div className={styles.body}>
      <div className={styles.searchContainer}>
        <h1>Pokemons</h1>
        <p>Search for a pokemon by name or using its national pokedex number</p>
        <SearchBar />
      </div>
      <aside className={styles.filterContainer}>
        <Filter />
      </aside>
      <main className={styles.container}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {Array.isArray(pokemons) ? (
              <>
                <section className={styles.pokedexContainer}>
                  {pokemons
                    ?.slice(
                      (page - 1) * perPage,
                      (page - 1) * perPage + perPage
                    )
                    .map((pokemon, pos) => {
                      return (
                        <Card
                          key={pos}
                          name={pokemon?.name}
                          image={pokemon?.image}
                          pokemonId={pokemon?.pokemonId}
                          type={pokemon?.type}
                        />
                      );
                    })}
                </section>
              </>
            ) : (
              <div>Pokemons is empty.</div>
            )}
          </>
        )}
      </main>
      <footer className={styles.footer}>
        <Pagination
          page={page}
          setPage={setPage}
          pokemons={pokemons}
          length={length}
          perPage={perPage}
        />
      </footer>
    </div>
  );
};

export default Home;
