import React from 'react';
import classes from './RecipeNameCard.module.css';
import { Link } from 'react-router-dom';

interface schema {
  id: string;
  imageURL: string[];
  name: string;
  courseType: string;
  difficulty: string[];
}
const RecipeNameCard = ({ imageURL, name, courseType, difficulty,id }: schema) => {
  return (
    <div>

      <li className={classes.recipe}>
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

      </li>

    </div>
  );
};

export default RecipeNameCard;