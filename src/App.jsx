import React,{ useState } from 'react';
import './App.css';

function App() {
  const list = [
    "banana",
    "apple",
    "orange",
    "grapes",
    "pomegrante",
    "lemon"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    const filteredValues = list.filter(
      (item) => 
    item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    
    setFilterList(filteredValues);
  }
    
  return (
    <div className="app">
      <div>
        <input type="text" onChange={handleSearch} />
      </div>
      {filterList.map((item) => (
        <div>{item}</div>
      ))}
    </div> 
  );
}

export default App;