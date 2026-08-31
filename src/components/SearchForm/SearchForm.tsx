import { useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {

  const [results, setResults] = useState(null);
  const [searchText, setSearchText] = useState("");

  async function submitHandler(event: React.SubmitEvent) {
    event.preventDefault();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`);
    const data = await response.json();
    setResults(data);
  }

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <form 
        className="search-form"
        onSubmit={submitHandler}
      >
        <label htmlFor="search-text">Navn på Pokémon:</label>
        <input 
          type="text" 
          id="search-text" 
          value={searchText}
          onChange={inputHandler}
        />
        <button type="submit">Finn!</button>
      </form>
      <div className="search-results">
        {results === null && (
          <span className="no-results">Ingen resultater funnet.</span>
        )}

        {results !== null && (
          JSON.stringify(results)
        )}
      </div>
    </>
  );
}