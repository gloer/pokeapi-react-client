import PageTitle from "./components/PageTitle/PageTitle";
import SearchForm from "./components/SearchForm/SearchForm";

export default function App() {
  return (
    <main>
      <PageTitle isFancy={true}>Finn en Pokémon!</PageTitle>
      <SearchForm />
    </main>
  )
}