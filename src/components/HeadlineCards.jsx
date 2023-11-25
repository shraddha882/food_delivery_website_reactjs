import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid  md:grid-cols-3 gap-6 bg-black">
      {/* cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's out,BOGO's out</p>
          <p className="px-2">Through 8/26</p>
          <p>hello shradhha</p>
          <button className="border-white bg-green-400 text-white mx-3 absolute bottom-4 rounded-md p-2">Order Now</button>
        </div>
        <img className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
      </div>

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">FullFill</p>
          <p className="px-2">Desserts Cravings</p>
          <button className="border-white bg-green-400 text-white mx-3 absolute bottom-4 rounded-md p-2">Order Now</button>
        </div>
        <img className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/16272698/pexels-photo-16272698/free-photo-of-tasty-desserts-on-board-on-table.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-green-400 text-white mx-3 absolute bottom-4 rounded-md p-2">Order Now</button>
        </div>
        <img className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
    </div>
  );
};

export default HeadlineCards;
