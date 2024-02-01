import React, { useState } from 'react';
import List from './components/List'
import Filter from './components/Filter'


//Default items
const INITIAL_ITEMS = [
  {'color' : 'red', 'number' : 1},
  {'color' : 'red', 'number' : 2},
  {'color' : 'red', 'number' : 3},
  {'color' : 'green', 'number' : 1},
  {'color' : 'green', 'number' : 2},
  {'color' : 'green', 'number' : 3},
  {'color' : 'blue', 'number' : 1},
  {'color' : 'blue', 'number' : 2},
  {'color' : 'blue', 'number' : 3},
  {'color' : 'orange', 'number' : 1},
  {'color' : 'orange', 'number' : 2},
  {'color' : 'orange', 'number' : 3},
]

function App() {

  //Initialize with default values
  const [selectedColor, setSelectedColor] = useState('all')
  const [selectedNumber, setSelectedNumber] = useState('all')
  const [selectedSort, setSelectedSort] = useState('default')
  const [items, setItems] = useState([...INITIAL_ITEMS])

  

  //Sets the filtered values every time something in the filter changes
  const onChangeFilter = (color, number, sort) => {
    setSelectedColor(color)
    setSelectedNumber(number)
    setSelectedSort(sort)
  }

  return (
    <div className="container">
      
      <div className="content">
        {/*Pass items to the filter as a prop, so the filter only generates with the values of the items*/}
        <Filter items={items} filter={onChangeFilter} />
        <List items={items} color={selectedColor} number={selectedNumber} sort={selectedSort} />
      </div>
    </div>
  );
}

export default App;
