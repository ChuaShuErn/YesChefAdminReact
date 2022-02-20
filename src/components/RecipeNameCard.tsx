import React,{ useState } from 'react';
import classes from './RecipeNameCard.module.css';
import { Link } from 'react-router-dom';
import RecipeService from'../services/RecipeService';



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

  function deleteRecipe() {

    RecipeService.deleteRecipe(id);
    window.location.reload();
    alert("Recipe Deleted")
    console.log("delete pressed")
    console.log(id);
    
  }


  return (
    <div className={classes.container}>
      <img src={imageURL.slice(-1)[0] ?? "https://yeschefbucket.s3.ap-southeast-1.amazonaws.com/pork_rice.jpg"} 
      onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "https://yeschefbucket.s3.ap-southeast-1.amazonaws.com/pork_rice.jpg";
        }} alt="img alt text" style={{ borderRadius:40, width: 150, height: 150 }} />
        <div className={classes.container__text}> 
        <div className={classes.body} > {name} </div>
        {/* <div className={classes.body}>{courseType}</div> */}
        </div>

        <div className={classes.banner} style = {{backgroundColor: getBackgroundColour(difficulty)}}>{difficulty}</div>


        <button className={classes.delete} onClick = {()=> {if(window.confirm('Are you sure to delete this recipe?')){
        {{deleteRecipe()}}}}}>
        Delete
        </button>

        <button className={classes.update}>
        <Link to={'/updateRecipe/' + id}>
          Update
        </Link>
        </button>
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