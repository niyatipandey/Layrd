import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import GenderContext from '../context/GenderContext';

const Navbar = () => {

    const {setGender} = useContext(GenderContext)
  return (
    <nav>
        <div>
            <h1>Layrd</h1>
        </div>
        <div>
        <Link to='/library'>Library</Link>
        <Link to='/canvas'>Canvas</Link>
        <Link to='/ai'>AI Stylist</Link>
        </div>
        <div>
            <button 
            onClick={()=>{
                setGender("women")
            }}>
                For Her
            </button>
            <button 
            onClick={()=>{
                setGender("men")
            }}>
                For Him
            </button>
        </div>
    </nav>
  )
}

export default Navbar