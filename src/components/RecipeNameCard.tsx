import React from 'react';
import classes from './RecipeNameCard.module.css';
import { Link } from 'react-router-dom';
import RecipeService from'../services/RecipeService';
import Button from '@mui/material';

interface schema {
  id: string;
  imageURL: string[];
  name: string;
  courseType: string;
  difficulty: string[];
}
const RecipeNameCard = ({ imageURL, name, courseType, difficulty,id }: schema) => {

  const getBackgroundColour = (value:string[]) =>{
    let colour;
    if (value[0] == 'Easy'){
      colour = '#4aa336';
    }
    if (value[0] == 'Medium'){
      colour = '#e37610';
    }
    if (value[0] == 'Advanced'){
      colour = '#c41837';
    }
    return colour;
  }

  function deleteRecipe(){
    console.log("delete pressed");
    console.log(id);
    RecipeService.deleteRecipe(id);
    window.location.reload();
  }
  return (
    <div className={classes.container}>
      <img src={imageURL.slice(-1)[0] ?? "https://yeschefbucket.s3.ap-southeast-1.amazonaws.com/pork_rice.jpg"} 
      onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "https://yeschefbucket.s3.ap-southeast-1.amazonaws.com/pork_rice.jpg";
        }} alt="img alt text" style={{ borderRadius:40, width: 300, height: 300 }} />
        <div className={classes.container__text}> 
        <div className={classes.h1}> {name} </div>
        <div className={classes.h1}>{courseType}</div>
        <div className={classes.banner} style = {{backgroundColor: getBackgroundColour(difficulty)}}>{difficulty}</div>
        


        <button className={classes.btn2} onClick ={deleteRecipe}>
        Delete
        </button>

        <button className={classes.btn}>
        <Link to={'/updateRecipe/' + id}>
          Update
        </Link>
        </button>

        
        
        </div>
        





    </div>
  );
};

export default RecipeNameCard;

      {/* <li className={classes.recipe}>
        <img src={imageURL.slice(-1)[0] ?? "https://yeschefbucket.s3.ap-southeast-1.amazonaws.com/pork_rice.jpg"} onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "https://yeschefbucket.s3.ap-southeast-1.amazonaws.com/pork_rice.jpg";
        }} alt="img alt text" style={{ width: 150, height: 150 }} />
        <h2>{name}</h2>
        <h3>{courseType}</h3>
        <p>{difficulty}</p>
        <Link to={'/updateRecipe/' + id}>
          Update
        </Link>

        <button onClick={deleteRecipe}>
          Delete
        </button>

      </li> */}