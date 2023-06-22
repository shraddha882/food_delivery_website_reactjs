import React from 'react'
import { categories} from '../data/data.js';

const Category = () => {
    console.log(categories)
  return (
    <div className='bg-black max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-green-400 font-bold text-4xl text-center'>Top Rated Menue Items</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
    {categories.map((item,index)=>(
        <div key = {index} className='bg-green-200 rounded-lg p-4 flex justify-between items-center cursor-pointer'>
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name}
            className='w-20'
            />


        </div>
    ))}
      </div>
    </div>
  )
}

export default Category
