import React from 'react';
import { Link} from 'react-router-dom';
import { Nav, NavItem, Collapse} from 'reactstrap';

import { IoPizzaOutline, IoPersonOutline } from 'react-icons/io5';
import { HiOutlinePencilAlt, HiOutlineLogout} from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";

import DashboardIcon from './DashboardIcon';
import ProfileIcon from './ProfileIcon';


export default class MenuBar extends React.Component {

  handleArrowClick(e){

  }
  
  render() {
    
    return (
      
      <div className={this.props.collapsed? 'sidenav-container collapsed': 'sidenav-container'}>


      <div className="usernav">
          <Link to="/">
            <div className="page-title">Yes Chef</div>
            <div className="page-subtitle">Better food everyday</div>
            </Link>
        </div>


        <div className="usernav">
          <Link to="/profile">
            <div className="nav-item-title">Gabriel Chua Al-Pinz</div>
            <div className="nav-item-subtitle">Yes Chef Administrator</div>
            </Link>
        </div>



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
                <IoPersonOutline size = {25} style={{strokeWidth: "10"}}/>
              </div>
              Profile
            </Link>
          </NavItem>

         

          <NavItem>
            <Link to="/logout">
              <div className="md-icon">
                <HiOutlineLogout size = {25}/>
              </div>
              Log Out
            </Link>
          </NavItem>
          
        </Nav>
        </div>

      </div>
    );
  }
}
