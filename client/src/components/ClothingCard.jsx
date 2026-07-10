import React from 'react'

const ClothingCard = ({item}) => {
  return (
    <div className='bg-white rounded-2xl shadow-sm'>
        <img src={item.imageUrl}  alt={item.name}
        className='w-full h-80 object-contain p-4' />
        <h3 className='mt-4 text-base font-medium text-[#2E2621]'>{item.name}</h3>
        <p className='text-sm text-[#8A8072]'>{item.color}</p>
    </div>
  )
}

export default ClothingCard