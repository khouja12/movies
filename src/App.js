import './App.css';
import { useState } from 'react';
import { moviesData } from './components/Data/Data';
import MovieList from './components/MovieList/MovieList'
import AddMovie from './components/AddMovie/AddMovie';
import FilterMovie from './components/FilterMovie/FilterMovie';
function App() {
  
  const [movies, setMovies] = useState(moviesData);
  const add = (newMovies) => {
    setMovies([...movies, newMovies])
  };

  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <FilterMovie search={search} setSearch={setSearch} />
      <MovieList movies={movies} search={search} />
      <AddMovie add={add} />
      
    </div>
  );
}

export default App;
