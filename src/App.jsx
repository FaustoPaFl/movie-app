import styles from './App.module.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { MovieDetails } from './Pages/MovieDetails';

export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route exact path='/movies/:movieId' element={<MovieDetails />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
