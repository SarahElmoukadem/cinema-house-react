import { Container } from '@mui/system';
import './App.css';
import Header from './components/Header/Header';
import MainNav from './components/MainNav/MainNav';
import Trending from './pages/Trending/Trending';

import { Search } from '@mui/icons-material';
import { Route, Routes } from "react-router-dom";
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';


function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>

          <Routes>
            <Route path="/trending" element={<Trending/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>

        </Container>
      </div>
      <MainNav />
    </>
  );
}

export default App;
