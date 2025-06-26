import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import React from "react";
import Recipes from './Components/Recipes';
import TestFries from './Components/TestFries';
function Home() {
  return (
      <div className='App'>
      <center>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
                  <div className="title">
                  <h1>👨‍🍳Foodies Hub🍴</h1>
                  <div className='title1'>
                  <div> <Link to="/recipes">Recipes</Link></div></div></div>} />
           <Route path="/recipes" element={<Recipes />} />
           <Route path="/fries" element={<TestFries />} />
              <Route path="/soups" element={<TestFries />} />
                 <Route path="/curries" element={<TestFries />} />
                  <Route path="/fish" element={<TestFries />} />
                   <Route path="/chicken" element={<TestFries />} />
                    <Route path="/prawns" element={<TestFries />} />
                    <Route path="/frankies" element={<TestFries />} />
                    <Route path="/chaat" element={<TestFries />} />
                    <Route path="/beverages" element={<TestFries />} />
          </Routes>
        </BrowserRouter>
      </center>
       </div> 
  );
}
export default Home;
 