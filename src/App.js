import react, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import './App.css';
import CharactersGrid from './components/Characters/CharactersGrid';
import Search from './components/ui/Search';


const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(result);

      setItems(result.data);
      setIsLoading(false);

    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      <Search />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
