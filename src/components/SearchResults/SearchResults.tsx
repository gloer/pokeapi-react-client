export default function SearchResults({results}) {
    return (
        <article>
            <h1>Resultater</h1>
            {JSON.stringify(results)}
        </article>
    );
}