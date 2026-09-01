type Ability = {
    name: string;
    url: string;
};

type AbilityProps = {
    is_hidden: boolean;
    slot: number;
    ability: Ability;
}

type HeldItem = {
    item: {
        name: string;
        url: string;
    };
};


type Results = {
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: AbilityProps[];
    held_items: HeldItem[];
}

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
    const {name, base_experience, height, weight, abilities, held_items} = results;
    if(name) {
        return (
            <article>
                <p>Name: {name}</p>
                <p>Base xp: {base_experience}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <h2>Abilities</h2>
                <section>
                    {                    
                        abilities.map(ability => <p key={`${name}${ability.ability.name}`}>{ability.ability.name}</p>)
                    }
                </section>
                <h2>Held items</h2>
                <section>                    
                    {
                        held_items.length > 0 ? held_items.map(item => <p key={`${name}${item.item.name}`}>{item.item.name}</p>)
                        : <p>No held items</p>
                    }
                </section>
            </article>
        );
    }
    return (
        <p>Ingen resultater funnet</p>
    );
}