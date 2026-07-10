import React from 'react'
import { useState, useEffect } from 'react'

const ClothingItem = () => {

    const [activeCategory, setActiveCategory] = useState("tops")
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
              setLoading(true)
              async function fetchItems(){
                  try{
                      let url = `${BASE_URL}/items/`
      
                      if(activeCategory !== 'all'){
                          url += `?category=${activeCategory}`
                      }
                      const result = await fetch(url);
                      const data =await result.json();
                      if(!result.ok){
                          return;
                      }
                      setItems(data)
                      setLoading(false)
      
                  }catch(err){
                      console.log(err)
                  }
              }
              fetchItems();
          },[activeCategory])
          
  return (
    <div>ClothingItem</div>
  )
}

export default ClothingItem