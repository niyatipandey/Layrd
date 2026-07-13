import React,{ useState , useEffect} from 'react'
import Navbar from '../components/Navbar'
import { BASE_URL, getAuthHeader } from '../utils/api'

const Wardrobe = () => {

  const [outfits, setOutfits] = useState([])

  async function getOutfit(){
    try{
      console.log(outfits)
      const response = await fetch(`${BASE_URL}/outfits`,{
        headers: getAuthHeader()
      })
      if(!response.ok){
        return;
      }
      const data = await response.json();
      console.log(data);
      setOutfits(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getOutfit();
  },[]);

  return (
    <>
      <Navbar />
    </>
  )
}

export default Wardrobe