import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import NavBar from './component/NavBar';
import FoodRecipesAPI from './api/FoodRecipesAPI';
import SideBar from './component/SideBar';
import FavRecipesPage from './pages/FavRecipesPage';
import DrinkRecipesListPage from './pages/DrinkRecipesListPage';
import { Route, Routes } from 'react-router-dom';
import FoodRecipesListPage from './pages/FoodRecipesListPage';

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <> 
      <SideBar></SideBar>
      <div className='container'>
        <Routes>
          <Route path="/" element={<FavRecipesPage/>}/>
          <Route path="/my-fav-recipes" element={<FavRecipesPage/>}/>
          <Route path="/food-recipes-list" element={<FoodRecipesListPage/>}/>
          <Route path="/drink-recipes-list" element={<DrinkRecipesListPage/>}/>
        </Routes>
      </div>
      
      
    </>
  )
}

export default App
