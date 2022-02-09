import React, {Component} from 'react'
import "../styles/HeaderComponent.css"


class HeaderComponent extends Component {

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand"> Yes Chef Admin</div>
                        <ul className = "nav navbar-nav">
                            <li className="active"><a href="/">Home</a></li>
                            <li className="active"><a href="/createRecipe">Create New Recipe</a></li>
                            <li className="active"><a href="/ingredientForm">IngredientForm</a></li>
                            <li className="active"><a href="/preparationStepsForm">PreparationForm</a></li>
                            <li className="active"><a href="/adminDashboard">Admin Dashboard</a></li>
                            <li className="active"><a href="/dropDown">Labels Drop Down Component</a></li>
                        </ul>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;