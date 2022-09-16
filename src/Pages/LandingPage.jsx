import { MoviesGrid } from "../Components/MoviesGrid";
import { Search } from "../Components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
  const query = useQuery();
  const search = query.get('search');
  const debouncedSearch = useDebounce(search, 400);

  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
    </div>
  );
}
