import React from 'react'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListRecipeComponent from './components/ListRecipeComponent';
import CreateRecipeComponent from './components/CreateRecipeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import IngredientForm from './components/IngredientForm';
import PreparationStepsForm from './components/PreparationStepsForm';
import AdminDashboard from './components/AdminDashboard';
import LabelsDropDownForm from './components/DifficultyDropDownForm';
import CuisineTypeCheckboxForm from './components/TypeCheckboxForm';

export default function App() {
  return (
    <BrowserRouter>

      <HeaderComponent />
      <br />
      <Routes>
        <Route path="/" element={<ListRecipeComponent />} />
        {/* <Route path="/ingredientForm" element={<IngredientForm />} /> */}
        <Route path="/recipes" element={<ListRecipeComponent />} />
        <Route path="/createRecipe" element={<CreateRecipeComponent />} />
        <Route path="/updateRecipe/:id" element={<CreateRecipeComponent />} />
        {/* <Route path="/preparationStepsForm" element={<PreparationStepsForm />} /> */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />


      </Routes>
      <br />

      <FooterComponent />

    </BrowserRouter>

  )
}