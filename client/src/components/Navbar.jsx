import React, { useContext,useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {User} from 'lucide-react'
import AuthContext from '../context/AuthContext'

const Navbar = () => {

    const {token,user,logout} = useContext(AuthContext)
    const [showDropDown, setShowDropDown] = useState(false)
    const navigate = useNavigate()

    const handleLogout = ()=>{
        logout();
        setShowDropDown(false);
        navigate('/login')
    }

  return (
    <nav className='w-full border-b border-[#E8DED1] bg-[#F5F1EA]'>
        <div className='max-w-7xl mx-auto h-20 px-8 flex items-center justify-between'>
            <h1 className='font-serif text-4xl tracking-[0.25em] text-[#2E2621]'>Layrd</h1>
            <div className='flex items-center gap-12 text-[17px] text-[#4B4138]'>
                <Link to='/library'
                className="hover:text-[#2E2621] transition-colors">Library</Link>
                <Link to='/canvas'
                className="hover:text-[#2E2621] transition-colors">Canvas</Link>
                <Link to='/wardrobe'
                className="hover:text-[#2E2621] transition-colors">Wardrobe</Link>
            </div>
            <div className='relative'>
                <button onClick={()=> token ? setShowDropDown(!showDropDown) : navigate('/login')}>
                    <User size={18} className='text-[#2E2621]'/>
                </button>
            </div>
            {showDropDown && token && (
                <div className='absolute right-0 top-15 w-48 bg-white border border-[#E8DED1] rounded-xl shadow-lg py-2 z-50'>
                    <p className='px-4 py-2 text-sm text-[#8A8072] border-b border-[#E8DED1]'>{user?.name}</p>
                    <button onClick={handleLogout}
                    className='w-full text-left px-4 py-2 text-sm text-[#2E2621] hover:bg-[#F8F4EE] transition-colors'>
                        Logout
                    </button>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar