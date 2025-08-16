import { useEffect, useState } from 'react';
import Search from './components/Search.jsx';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  }
};

 const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
  }, []);



  return (
    <main>
      <div className='pattern' />
      <div className='wrapper' >
        <header>
          <img src="/hero.png" alt="Hero Banner" />
          <h1> Discover <span className="text-gradient">movies</span> you'll enjoy without the Hassle </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
    </main>
  )
}

export default App;