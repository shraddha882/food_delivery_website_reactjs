import React, { useState } from "react";
import { data } from "../data/data.js";

const FoodMenu = () => {
//   console.log(data);
const  [foods, setFoods]  = useState(data);
const filterType = (category)=>{
    setFoods(
        data.filter((item)=>{
            return item.category === category;
        })
    )
};

//filter by price
const filterPrice=(price)=>{
    setFoods(
        data.filter((item)=>{
            return  item.price === price;
        })
    );
};
  return (
    <div className="text-white max-w-[1640px] m-auto px-4 py-12 bg-black">
      <h1 className="text-green-400 font-bold text-4xl text-center">Top Rated Menu Items</h1>

      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-white ">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={()=>setFoods(data)} className=" m-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-md p-2">All</button>
            <button onClick={()=>filterType('burger')} className=" m-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-md p-2">Burger</button>
            <button onClick={()=>filterType('pizza')} className=" m-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-white  rounded-md p-2"> Pizza</button>
            <button onClick={()=>filterType('salad')} className="m-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-md p-2">Salads</button>
            <button onClick={()=>filterType('chicken')} className=" m-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-white  rounded-md p-2">Chicken</button>
           
          </div> 
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-white ">Filter Prices</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={()=>filterPrice('$')} className=" m-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-md p-2">$</button>
            <button  onClick={()=>filterPrice('$$')} className=" m-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-md p-2">$$</button>
            <button  onClick={()=>filterPrice('$$$')} className=" m-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-md p-2">$$$</button>
            <button  onClick={()=>filterPrice('$$$$')} className=" m-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-md p-2">$$$$</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
     {foods.map((item,index)=>(
        <div key = {index} className="border  shadow-lg hover:scale-105 duration-300 rounded-lg">
            <img src={item.image} alt={item.name} 
            className="w-full h-[200px] object-cover rounded-t-lg"/>
            <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                    <span className="bg-green-400 text-white p-1 rounded-lg">{item.price}</span>
                </p>
            </div>
        </div>
     ) )}
      </div>
    </div>
  );
};

export default FoodMenu;
