import React, {useState} from 'react'
import FoodContext from './FoodContext'

const FoodContextProvider = ({children}) => {
  const [category, setCategory] = useState([]);
  const [input, setInput] = useState("");

  return (
    <FoodContext.Provider value={{category, setCategory, input, setInput}}>
      {children}
    </FoodContext.Provider>
  )
}

export default FoodContextProvider;
