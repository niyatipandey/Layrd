import React from 'react'
import { BASE_URL, getAuthHeader } from '../utils/api'

export const OutfitCard = ({outfit,onDelete }) => {

    const slots = [
        outfit.slots.top,
        outfit.slots.shoes,
        outfit.slots.bottom,
        outfit.slots.accessory
    ].filter(Boolean)

  return (
      <div className='bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:scale-103'>
        <div className='grid grid-cols-2 gap-[2px] bg-[#F0EBE3]'>
            {[outfit.slots.top, outfit.slots.accessory, outfit.slots.bottom, outfit.slots.shoes].map((item, i) => (
                <div key={i} className='bg-[#FAFAF8] aspect-square flex items-center justify-center p-3'>
                    {item ? (
                    <img src={item.imageUrl} alt={item.name}
                        className='w-full h-full object-contain' />
                    ) : (
                    <div className='w-full h-full border border-dashed border-[#DDD5C7] rounded-lg' />
                    )}
                </div>
            ))}
        </div>
        <div className='px-4 py-3 flex items-center justify-between'>
            <p className='text-xs text-[#8A8072]'>
            {new Date(outfit.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
            <button onClick={onDelete}
            className='text-xs text-[#8A8072] hover:text-red-500 transition-colors'>
            Delete
            </button>
        </div>
      </div>
    )
}
