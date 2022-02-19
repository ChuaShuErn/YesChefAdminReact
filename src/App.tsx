import React from 'react'


import { BrowserRouter, Routes, Route, useLocation, useParams} from "react-router-dom";
import ListRecipeComponent from './components/ListRecipeComponent';
import CreateRecipeComponent from './components/CreateRecipeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import IngredientForm from './components/IngredientForm';
import PreparationStepsForm from './components/PreparationStepsForm';
import AdminDashboard from './components/AdminDashboard';
import LabelsDropDownForm from './components/DifficultyDropDownForm';
import CuisineTypeCheckboxForm from './components/TypeCheckboxForm';
import MenuBar from './components/menubar/MenuBar';
import LoginComponent from './components/login/LoginComponent';
import { Login } from '@mui/icons-material';
import { Navbar } from 'reactstrap';
import {Location} from 'history';


export default function App() {
  
  const location = window.location.href.slice(-1);
  console.log(location);
  
  
  return (
    
    <BrowserRouter>
    
    <div className='mainblock'>
    
      
      
      {location ==='/'?null:<MenuBar/>}
      <br />
      <Routes>
        
        <Route path="/" element={<LoginComponent />}  />
        {/* <Route path="/ingredientForm" element={<IngredientForm />} /> */}
        
          
          <Route path="/recipes" element={<ListRecipeComponent />} />
          <Route path="/createRecipe" element={<CreateRecipeComponent />} />
          <Route path="/updateRecipe/:id" element={<CreateRecipeComponent />} />
          {/* <Route path="/preparationStepsForm" element={<PreparationStepsForm />} /> */}
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        
          <Route path="/loginComponent" element={<LoginComponent />} />
          
        

      </Routes>
      <br />

      <FooterComponent />
    </div>
    </BrowserRouter>
    

  )
}