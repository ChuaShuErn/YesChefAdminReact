import React, { Component } from 'react'
import "../styles/HeaderComponent.css"


class HeaderComponent extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-brand"> Yes Chef Admin</div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/">Home</a></li>
                    <li className="active"><a href="/createRecipe">Create New Recipe</a></li>
                    <li className="active"><a href="/adminDashboard">Admin Dashboard</a></li>

                </ul>

            </nav>
        );
    }
}

export default HeaderComponent;