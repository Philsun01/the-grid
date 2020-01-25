import React, {useState} from 'react';
import './App.css';

function App() {

  const storage = window.localStorage;

  const loadData = () => {
    if(storage.getItem('grid')){
      console.log(storage.getItem('grid'))
      return JSON.parse(storage.getItem('grid'));
    }
    return Array(9).fill(false);
  }

  const [grid, setGrid] = useState(loadData());
  
  return (
    <div className="App">
      <h1>The Persistant Grid</h1>
        <div className = "container">
        {
          grid.map( (bool, idx) => { 
            return <div 
              className = {bool ? 'checked':'empty'} 
              key = {idx}
              onClick = {() => {
                const _grid = [...grid]
                _grid[idx] = !_grid[idx];
                setGrid(_grid);
                storage.setItem('grid',JSON.stringify(_grid))
              }}
              />})
        }
        </div>
    </div>
  );
}

export default App;
