import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import FoodMenu from './components/FoodMenu';
import Category from './components/Category';
function App() {
  return (
    <div  >
     <Navbar/>
     <Hero/>
     <HeadlineCards/>
     <FoodMenu/>
     <Category/>
    </div>
  );
}

export default App;
