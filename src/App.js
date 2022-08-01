import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// Components
import { Navigation } from './components/navigation/navigation.js';
import { Background } from './components/background/background.js';
import { Footer } from './components/footer/footer.js';

// Pages
import { Home } from './pages/home/home.js';
import { Music } from './pages/music/music.js';
import { Gallery } from './pages/gallery/gallery.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Navigation />}/>
      </Routes>
      <Routes>
        <Route path='/*' element={<Background />}/>
      </Routes>

      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='/music' element={<Music /> }/>
          <Route path='/gallery' element={<Gallery /> }/>
        </Routes>
      </main>
      
      <Routes>
        <Route path='/*' element={<Footer />}/>
      </Routes>
    </Router>
  );
}

export default App;
