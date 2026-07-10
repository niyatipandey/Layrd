import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../utils/api'
import ClothingCard from '../components/ClothingCard'

const Canvas = () => {
 
  
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

  const categories = [
        { label: "Tops", value: "tops" },
        { label: "Bottoms", value: "bottom" },
        { label: "Shoes", value: "shoes" },
        { label: "Accessories", value: "accessory" },
    ];
  return (
    <>
      <Navbar />
      <main className='max-w-7xl mx-auto px-8 py-10'>
        <div className='mb-8'>
          <h1 className='font-serif text-5xl text-[#2E2621]'>Outfit Builder</h1>
          <p className='text-[#8A8072] mt-2'>Create your next look from your wardrobe</p>
        </div>
        <div className='flex gap-10 items-start'>
          <div className='w-[35%]'>
            <h3 className="text-xl font-semibold text-[#2E2621] mb-5">Wardrobe Selection</h3>
            <div className='flex mb-10 justify-between'>
                  {categories.map((category)=>(
                      <button key={category.value}
                      onClick={()=>{
                          setActiveCategory(category.value)
                      }}
                      className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-200 cursor-pointer
                      ${
                      activeCategory === category.value
                          ? "bg-[#E7C76A] text-[#2E2621] shadow-md"
                          : "bg-white text-[#2E2621] border border-[#E5DDD2] shadow-sm hover:bg-[#F8F4EE]"
                      }`}>
                          {category.label}
                      </button>
                  ))}
              </div>
              <div className='grid grid-cols-2 gap-5 mt-6 max-h-[64vh] overflow-y-auto pr-2'>
                  {items.map((item)=> (
                      <ClothingCard key={item._id} item={item} draggable={false}/>
                  ))}
              </div>
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className="text-xl font-semibold text-[#2E2621] mb-6">Canvas</h3>
            <div className="space-y-6">
              <div className="h-40 rounded-3xl border-2 border-dashed border-[#DDD5C7] bg-[#FCFAF7] flex flex-col items-center justify-center">
                <span className="text-3xl mb-2">👚</span>
                <p className="font-medium text-[#2E2621]">Top</p>
                <p className="text-sm text-[#8A8072]">Drag item here</p>
              </div>
              <div className="h-40 rounded-3xl border-2 border-dashed border-[#DDD5C7] bg-[#FCFAF7] flex flex-col items-center justify-center">
                <span className="text-3xl mb-2">👖</span>
                <p className="font-medium text-[#2E2621]">Bottom</p>
                <p className="text-sm text-[#8A8072]">Drag item here</p>
              </div>
              <div className="h-40 rounded-3xl border-2 border-dashed border-[#DDD5C7] bg-[#FCFAF7] flex flex-col items-center justify-center">
                <span className="text-3xl mb-2">👟</span>
                <p className="font-medium text-[#2E2621]">Shoes</p>
                <p className="text-sm text-[#8A8072]">Drag item here</p>
              </div>
              <div className="h-40 rounded-3xl border-2 border-dashed border-[#DDD5C7] bg-[#FCFAF7] flex flex-col items-center justify-center">
                <span className="text-3xl mb-2">👜</span>
                <p className="font-medium text-[#2E2621]">Accessory</p>
                <p className="text-sm text-[#8A8072]">Drag item here</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 items-start w-[180px] pt-12'>
            <button className='w-full py-3 rounded-xl bg-[#2E2621] text-white hover:scale-105 transition-all'>Save Outfit</button>
            <button className='w-full py-3 rounded-xl border border-[#2E2621] bg-[#E7C76A] font-medium hover:scale-105 transition-all'>AI Stylist</button>
            <button className='w-full py-3 rounded-xl border border-[#DDD5C7] bg-white hover:scale-105 transition-all'>Clear</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Canvas