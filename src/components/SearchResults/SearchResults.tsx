type Results = {
    name: string;
    base_experience: number;
    height: number;
    weight: number;
};

type SearchResultsProps = {
    results: Results;
};

/*
Name
Base experience
Height
Weight
Abilities
Held items
*/

export default function SearchResults({results} : SearchResultsProps ) {    
    const {name, base_experience, height, weight} = results;
    return (
        <article>
            <p>Name: {name}</p>
            <p>Base xp: {base_experience}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
        </article>
    );
}