import React from 'react';
import { Link} from 'react-router-dom';
import { Nav, NavItem, Collapse} from 'reactstrap';

//import FA from 'react-fontawesome';
import dashIcon from './DashboardIcon';
import profileIcon from './ProfileIcon';

export default class MenuBar extends React.Component {

  handleArrowClick(e){

  }
  
  render() {
    
    return (
      <div className={this.props.collapsed? 'sidenav-container collapsed': 'sidenav-container'}>
        <div className="nav-top">
          <div className={this.props.collapsed? 'brand collapsed': 'brand'}>
            <img src="img/seniordev-sm.jpeg" alt="user"/>
          </div>
        </div>

        <div className="usernav">
          <Nav vertical>

            <NavItem>
              <Link to="/">
              <div className="md-icon av">
               <div className="avatar">
                <img src="img/seniordev-sm.jpeg" alt="user image"/>
                </div>
              </div>
                <div className="nav-item-title">Yes Chef</div>
              </Link>
              <div className="nav-pill">
              1
              </div>
            </NavItem>

            <NavItem>
              <Link to="/">
                 <div className="md-icon">
                </div>
                <div className="nav-item-title">Notifications</div>
              </Link>
              <div className="nav-pill">
              3
              </div>
            </NavItem>

          </Nav>
        </div>

        <div className="sidenav">

        <Nav vertical>

          <NavItem className="active">
            <Link to="/adminDashboard">
               <div className="md-icon">
                <dashIcon strokeColor="#ffffff"/>
              </div>
              Admin Dashboard
            </Link>
          </NavItem>


          <NavItem className="active">
            <Link to="/">
               <div className="md-icon">
                <dashIcon strokeColor="#ffffff"/>
              </div>
              View All Recipes
            </Link>
            </NavItem>


            <NavItem className="active">
            <Link to="/">
               <div className="md-icon">
                <dashIcon strokeColor="#ffffff"/>
              </div>
              Create New Recipe
            </Link>
            </NavItem>

          <NavItem>
            <Link to="/profile">
              <div className="md-icon">
                <profileIcon strokeColor="#ffffff"/>
              </div>
              Profile
            </Link>
          </NavItem>
          
        </Nav>
        </div>

        <div className="nav-bottom">
            <button onClick={this.props.handleCollapse}> 
            </button>
          </div>
      </div>
    );
  }
}
