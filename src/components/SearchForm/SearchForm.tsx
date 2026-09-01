import { useState } from "react";
import "./SearchForm.css";
import SearchResults from "../SearchResults/SearchResults";

export default function SearchForm() {

  const [results, setResults] = useState(null);
  const [userHasSearched, setUserHasSearched] = useState(false);

  async function findPokemon(formData: FormData) {
    const q = String(formData.get("search-text"));
    setUserHasSearched(true);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);
    if(response.status === 404 || response.status === 400) {
      console.log(response.status);
      setResults(null);      
    } else {
      const data = await response.json();
      setResults(data);
    }
  }

  return (
    <>
      <form 
        className="search-form"
        action={findPokemon}
      >
        <label htmlFor="search-text">Navn på Pokémon:</label>
        <input 
          type="text" 
          id="search-text" 
          name="search-text"          
        />
        <button type="submit">Finn!</button>
      </form>
      <div className="search-results">
        {results === null && userHasSearched && (
          <>
            <span className="no-results">Ingen resultater funnet.</span>
          </>
        )}

        {results !== null && (
          <div>
            <SearchResults results={results} />             
          </div>
        )
      }
      </div>
    </>
  );
}