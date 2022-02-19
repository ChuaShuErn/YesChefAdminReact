import React from 'react';
import ListRecipeComponent from './ListRecipeComponent';
import MenuBar from '../components/menubar/MenuBar';


export default function ListRecipeComponentContainer(){

    
    
    return (
        <div className='mainblock'>
            <MenuBar/>
             <ListRecipeComponent />
        </div>
       
        );
    
    
}


