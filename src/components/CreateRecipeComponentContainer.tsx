
import React from 'react';
import CreateRecipeComponent from '../components/CreateRecipeComponent';
import MenuBar from '../components/menubar/MenuBar';



export default function CreateRecipeComponentContainer() {

return (
    <div className='mainblock'>
        <MenuBar/>
         <CreateRecipeComponent />
    </div>
   
    );


}