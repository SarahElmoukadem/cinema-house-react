import { Container } from '@mui/system';
import './App.css';
import MainNav from './components/MainNav/MainNav';
import Trending from './pages/Trending/Trending';

import { Route, Routes } from "react-router-dom";
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';
import Series from './pages/Series/Series';


function App() {
  return (
    <>
      {/* <Header /> */}
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
