import React, { useContext, useEffect, useState } from 'react'
import GenderContext from '../context/GenderContext'
import { BASE_URL } from '../utils/api'
import Navbar from '../components/Navbar'

const Library = () => {
    const {gender} = useContext(GenderContext)
    const [activeCategory, setActiveCategory] = useState("tops")
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        async function fetchItems(){
            try{
                const result = await fetch(`${BASE_URL}/items/?gender=${gender}&category=${activeCategory}`);
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
    }, [gender,activeCategory])
    
  return (
    <>
        <Navbar/>
        <div>
            <div className='flex'>
                <button
                onClick={()=>{
                    setActiveCategory("tops")
                }}>
                    Tops</button>
                <button
                onClick={()=>{
                    setActiveCategory("bottom")
                }}>Bottom</button>
                <button
                onClick={()=>{
                    setActiveCategory("shoes")
                }}>Shoes</button>
                <button
                onClick={()=>{
                    setActiveCategory("accessory")
                }}>Accessory</button>
            </div>
            {items.map((item)=>{
                return <div key={item._id} className='flex'>
                    <img src={item.imageUrl}  alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.color}</p>
                </div>
            })}
        </div>
    </>
  )
}

export default Library