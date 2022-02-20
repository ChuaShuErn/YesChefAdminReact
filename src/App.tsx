import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginComponent from './components/login/LoginComponent';
import AdminDashboardContainer from './components/AdminDashboardContainer';
import CreateRecipeComponentContainer from './components/CreateRecipeComponentContainer';
import ListRecipeComponentContainer from './components/ListRecipeComponentContainer';

export default function App() {
  
  
  return (
    
    <BrowserRouter>
    

      <br />
      <Routes>
        
        <Route path="/" element={<LoginComponent />}  />
        {/* <Route path="/ingredientForm" element={<IngredientForm />} /> */}
        
          <Route path="/recipes" element={<ListRecipeComponentContainer />} />
          <Route path="/createRecipe" element={<CreateRecipeComponentContainer />} />
          <Route path="/updateRecipe/:id" element={<CreateRecipeComponentContainer />} />
          {/* <Route path="/preparationStepsForm" element={<PreparationStepsForm />} /> */}
          <Route path="/adminDashboard" element={<AdminDashboardContainer />} />
        
          <Route path="/loginComponent" element={<LoginComponent />} />
          

      </Routes>
      <br />
      

    </BrowserRouter>
    

  )
}