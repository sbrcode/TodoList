import React, { useState } from "react";
import Checkbox from "./components/Checkbox";
import { OPTIONS } from "./Constants";

function App() {
  const [checkboxes, setCheckboxes] = useState(
    OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
  ))
  const [allselected, setAllselected] = useState(true)
  
  const selectAllCheckboxes = (isSelected, isClicked) => {
    Object.keys(checkboxes).forEach(checkbox => {
      setCheckboxes(prevState => ({
        ...prevState,
        [checkbox]: isSelected
      }))
    })
    setAllselected(isClicked)
  }
  
  const handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    setCheckboxes({
      ...checkboxes,
      [name]: !checkboxes[name]
    })
  }

  const createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={checkboxes[option]}
      onCheckboxChange={handleCheckboxChange}
      key={option}
    />
  );

  const createCheckboxes = () => OPTIONS.map(createCheckbox);

  const allSelectStyle = {
    padding: 12,
    borderRadius: 6,
    marginBottom: 6,
  }

  const unSelectStyle = {
    ...allSelectStyle,
    color: 'white',
    backgroundColor: 'lightslategrey'
  }

  return (
    <div style={{margin: 15}}>
      {allselected
        ? <button style={allSelectStyle} onClick={() => selectAllCheckboxes(true, false)}>Select all</button>
        : <button style={unSelectStyle} onClick={() => selectAllCheckboxes(false, true)}>Unselect All</button>
      }
      {createCheckboxes()}
    </div>
  );
}

export default App;
