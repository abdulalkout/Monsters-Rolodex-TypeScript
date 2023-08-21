import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect, ChangeEvent } from 'react';
import { getData } from './utils/data.utils';


export type monster =  {
  id : string;
  name : string;
  email : string;
}

// functional Component 
const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonesters] = useState<monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // setState the search filed 
  const onSearchChange = (event : ChangeEvent<HTMLInputElement> ): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  
  // Side effect just to fetch the data (used only once)
  useEffect(()=>{
    const fetchUser = async () => {
        const users = await getData<monster[]>('https://jsonplaceholder.typicode.com/users');
        setMonesters(users)
    }

    fetchUser();
  },[])
  
  
  // Side effect for the new filtered monsters and setState the obj value
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  },[monsters, searchField])

  
  return(
    <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox className='monster-search-box' placeholder='search monsters' onEventHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
  )
}

export default App;
