import React from 'react';
import { Link} from 'react-router-dom';
import { Nav, NavItem, Collapse} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import DashboardIcon from './DashboardIcon';
import ProfileIcon from './ProfileIcon';


export default class MenuBar extends React.Component {

  handleArrowClick(e){

  }
  
  render() {
    
    return (
      <div className={this.props.collapsed? 'sidenav-container collapsed': 'sidenav-container'}>

        <div className="sidenav">

        <Nav vertical>
          <NavItem>
            <Link to="/adminDashboard">
               <div className="md-icon">
                <DashboardIcon strokeColor="#ffffff"/>
              </div>
              Admin Dashboard
            </Link>
          </NavItem>


          <NavItem>
            <Link to="/">
               <div className="md-icon">
               <FontAwesomeIcon icon="fa-solid fa-shrimp" />
              </div>
              View All Recipes
            </Link>
            </NavItem>


            <NavItem>
            <Link to="/createRecipe">
               <div className="md-icon">
               <FontAwesomeIcon icon={"fa-bell"} strokeColor="#ffffff"/>
              </div>
              Create New Recipe
            </Link>
            </NavItem>

          <NavItem>
            <Link to="/profile">
              <div className="md-icon">
                <ProfileIcon strokeColor="#ffffff"/>
              </div>
              Profile
            </Link>
          </NavItem>
          
        </Nav>
        </div>

      </div>
    );
  }
}
