import { useState } from "react";
import "./SearchForm.css";
import SearchResults from "../SearchResults/SearchResults";

type Search = {
  id: string;
  value: string;
};

export default function SearchForm() {

  const [results, setResults] = useState(null);
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [searchHistory, setSearchHistory] = useState<Search[]>([]);

  async function findPokemon(formData: FormData) {
    setUserHasSearched(true);
    
    const q = String(formData.get("search-text"));  
    const newSearch = { id: crypto.randomUUID(), value: q};  
    let newHistory = [newSearch, ...searchHistory];
    
    if(newHistory.length > 3) {
      newHistory = newHistory.slice(0,-1);
    }
    setSearchHistory(newHistory);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);
    if(response.status === 404 || response.status === 400) {      
      setResults(null);      
    } else {
      const data = await response.json();      
      setResults(data);
    }
  }

  return (
    <div>
      <form 
        className="search-form"
        action={findPokemon}
      >
        <label htmlFor="search-text">Navn på Pokémon:</label>
        <input 
          type="text" 
          id="search-text" 
          name="search-text"   
          required       
        />
        <button type="submit">Finn!</button>
      </form>
      <hr/>
      <p style={{display: "flex", gap: "0.5rem"}}>Siste søkeord: {
          searchHistory.map(s => <span key={s.id}>Id: {s.id} - {s.value}</span>)
        }
      </p>
      <hr/>
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
    </div>
  );
}