import React from 'react';
import { Link} from 'react-router-dom';
import { Nav, NavItem, Collapse} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoPizzaOutline } from 'react-icons/io5';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";

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
               <AiOutlineDashboard size = {25}/>
              </div>
              Admin Dashboard
            </Link>
          </NavItem>


          <NavItem>
            <Link to="/">
               <div className="md-icon">
               <IoPizzaOutline size = {25}/>
              </div>
              View All Recipes
            </Link>
            </NavItem>


            <NavItem>
            <Link to="/createRecipe">
               <div className="md-icon">
               <HiOutlinePencilAlt size = {25}/>
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
