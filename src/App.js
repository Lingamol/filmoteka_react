import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from 'pages/Home';
import Library from 'pages/Library';
import NotFound from 'pages/Notfound';
import Movies from 'pages/Movies';
import About from 'pages/About';
import AboutMe from 'components/AboutMe';
import AboutTeam from 'components/AboutTeam';
import SharedLayout from 'components/SharedLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/movies/:id_movie" element={<Movies />} />
          <Route path="/about" element={<About />}>
            <Route path="me" element={<AboutMe />} />
            <Route path="team" element={<AboutTeam />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
