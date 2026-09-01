type Results = {
    name: string;
    base_experience: number;
    height: number;
    weight: number;    
}

/*
Name
Base experience
Height
Weight
Abilities
Held items
*/

export default function SearchResults(results: unknown) {
    const data:Results = results.results;
    const {name, base_experience, height, weight} = data;
    return (
        <article>
            <p>Name: {name}</p>
            <p>Base xp: {base_experience}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
        </article>
    );
}