import React, { Component } from 'react';
import LineCharts from './LineChartDemo';
import PieCharts from './PieChartDemo';
import LineChartCuisine from './LineChartCuisine';
import RecentRecipeCard from './RecentRecipeCard';
import { Container, Row, Col} from 'reactstrap';


class Dashboard extends Component {
    constructor(props) {
		super(props);
		this.cuisine_data = props.cuisine_data;
        this.usership_data = props.usership_data;
        this.total_recipe_count = props.total_recipe_count;
        this.most_common_cuisine = props.most_common_cuisine;
	}

    cuisine_colors = ['#0088FE', '#FFBB38', '#00C49F', '#FF8042', '#8510d8', '#FFC0CB','#1b25c6', '#FF3232'];

    render() {
        return (
          <div className={this.props.collapsed? 'page-container collapsed': 'page-container'}>

          <div className="main-content">
                  <Container fluid={true}>

                      <Row>

                          <Col lg="12">
                              <strong>Usership and Engagement Growth</strong>
                              <div className="card linechart">
                                  <p></p>
                                  <LineCharts data = {this.usership_data}/>
                                  <div className="card-mid">
                                      <div className="data-container">

                                        <div className="current-data">
                                            <p className="stat">Total Users</p>
                                            <p className="stat-data views">67</p>
                                        </div>

                                        <div className="previous-data">
                                            <p className="stat">New Users</p>
                                            <p className="stat-data bookmarks" style={{color: "blue"}}>55</p>
                                        </div>

                                        <div className="previous-data">
                                            <p className="stat">Weekly Usership Growth</p>
                                            <p className="stat-data bookmarks" style={{color: "orange"}}>+27.1%</p>
                                        </div>

                                        <div className="previous-data">
                                            <p className="stat">Total Views</p>
                                            <p className="stat-data views" style={{color: "red"}}>443</p>
                                        </div>

                                        <div className="previous-data">
                                            <p className="stat">Views Per User</p>
                                            <p className="stat-data bookmarks" style={{color: "green"}}>6.6</p>
                                        </div>

                                        
                                        <div className="previous-data">
                                            <p className="stat">Weekly Engagement Growth</p>
                                            <p className="stat-data bookmarks" style={{color: "darkviolet"}}>+12.8%</p>
                                        </div>

                                     </div>
                                  </div>

                              </div>
                          </Col>
    
    
                      </Row>
    
                  </Container>
                  <p></p>


                  <Container fluid={true}>

                      <Row>
    
                          <Col sm="12" md="8" lg="5">
                            <strong>Yes Chef Cuisine Distribution</strong>
                                <div className="card pie">
                                        <div className="card-mid">
                                            <div className="data-container">

                                            <div className="current-data">
                                                <p className="stat">Total Recipe Count</p>
                                                <p className="stat-data bookmarks"> {this.total_recipe_count}</p>
                                            </div>
                                                <div className="previous-data">
                                                    <p className="stat">Top Cuisine</p>
                                                    <p className="stat-data views">{this.most_common_cuisine}</p>
                                                </div>
                                            </div>
                                    </div>
                                    <PieCharts data ={this.cuisine_data} colors = {this.cuisine_colors} primColor="#4562ec"/>
                                </div>
                          </Col>
                          <Col sm="12" md="9" lg="7">
                          <strong>Daily Total Views By Cuisine </strong>
                                <div className="card linechart">
                                    <LineChartCuisine cuisines={this.cuisine_data} colors = {this.cuisine_colors}/>
                                </div>
                          </Col>
                      </Row>
                  </Container>



                  <p></p>



                  <Container fluid={true}>
                      <Row>
                          <Col sm="12" md="8" lg="4">
                            <strong>Top Rated Recipes</strong>
                                <div className="card pie">
                                    <div className="recipe-container">
                                        <RecentRecipeCard urlMapping="getTopRatedRecipes"/>
                                    </div>
                                </div>
                          </Col>

                          <Col sm="12" md="8" lg="4">
                            <strong>Most Viewed Recipes</strong>
                                <div className="card pie">
                                    <div className="recipe-container">
                                        <RecentRecipeCard urlMapping="getMostViewedRecipes"/>
                                    </div>
                                </div>
                          </Col>

                          <Col sm="12" md="8" lg="4">
                            <strong>Recently Uploaded Recipes </strong>
                                <div className="card pie">
                                    <div className="recipe-container">
                                        <RecentRecipeCard urlMapping="getRecentRecipes" />
                                    </div>
                                </div>
                          </Col>
                      </Row>
                  </Container>

            </div>
            </div>
        );
      }
    }

export default Dashboard;