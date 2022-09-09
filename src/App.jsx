import styles from './App.module.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";

export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route exact path='/movies'/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
