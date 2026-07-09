import React, { useState } from 'react'
import { createContext } from 'react'

const GenderContext = createContext(null);

export const GenderProvider = ({children}) => {

    const [gender, setGender] = useState("women");

  return (
    <GenderContext.Provider value={{gender,setGender}}>
        {children}
    </GenderContext.Provider>
  )
}

export default GenderContext