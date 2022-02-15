import React, { Component } from 'react';
import LineCharts from './LineChartDemo';
import PieCharts from './PieChartDemo';
import LineChartCuisine from './LineChartCuisine';
import { Container, Row, Col} from 'reactstrap';




export default class Dashboard extends Component {
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

                                  <LineCharts/>

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
                                            <p className="stat">Total Views</p>
                                            <p className="stat-data views" style={{color: "red"}}>443</p>
                                        </div>

                                        <div className="previous-data">
                                            <p className="stat">Views Per User</p>
                                            <p className="stat-data bookmarks" style={{color: "green"}}>6.6</p>
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
                                                <p className="stat-data bookmarks">43</p>
                                            </div>
                                                <div className="previous-data">
                                                    <p className="stat">Top Cuisine</p>
                                                    <p className="stat-data views">Thai(37.1%)</p>
                                                </div>

                                            </div>
                                    </div>
                                    <PieCharts primColor="#4562ec"/>

                                </div>

                          </Col>

                          <Col sm="12" md="9" lg="7">
                          <strong>Daily Total Views By Cuisine </strong>
                                <div className="card linechart">

                                    <LineChartCuisine/>

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

                                        <table>
                                            <tr>   
                                                <td>
                                                    <span className="recipe-name">Korean Stone-bowl Bimbimbap</span>
                                                    <p className="recipe-cuisine">Korean</p>
                                                </td>
                    
                                                <td> <span className="recipe-rating">4.76 </span></td>
                                            </tr>

                                            <tr>   

                                                <td width="95%">
                                                    <span className="recipe-name">Fiery Crab Pad Thai</span>
                                                    <p className="recipe-cuisine">Thai</p>
                                                </td>
                    
                                                <td> <span className="recipe-rating">4.69 </span></td>
                                            </tr>

                                            <tr>   

                                                <td width="95%">

                                                    <span className="recipe-name">Saigon Pho Noodle Soup</span>
                                                    <p className="recipe-cuisine">Vietnamese</p>
                                                </td>
                    
                                                <td> <span className="recipe-rating">4.62 </span></td>

                                            </tr>

                                        </table>



                                    </div>
                       

                                </div>

                          </Col>

                          <Col sm="12" md="8" lg="4">
                            <strong>Most Viewed Recipes</strong>
                            <div className="card pie">
                            
                            <div className="recipe-container">

                                <table>
                                    <tr>   

                                        <td>
                                            <span className="recipe-name">Tetsu-ya Fluffy Cheesecake</span>
                                            <p className="recipe-cuisine">Japanese</p>
                                        </td>
            
                                        <td> <span className="recipe-views">5764 </span></td>
                                    </tr>

                                    <tr>   

                                        <td>
                                            <span className="recipe-name">Phuket Rose Milk Tea</span>
                                            <p className="recipe-cuisine">Thai</p>
                                        </td>
            
                                        <td> <span className="recipe-views">5471 </span></td>
                                    </tr>

                                    <tr>   

                                        <td width="95%">

                                            <span className="recipe-name">Oh-my-Cod Fish and Chips</span>
                                            <p className="recipe-cuisine">British</p>
                                        </td>
            
                                        <td> <span className="recipe-views">5321 </span></td>

                                    </tr>

                                </table>



                            </div>
               

                        </div>

                          </Col>

                          <Col sm="12" md="8" lg="4">
                            <strong>Recently Uploaded Recipes </strong>
                            <div className="card pie">
                            
                            <div className="recipe-container">

                                <table>
                                    <tr>   

                                        <td width="85%">
                                            <span className="recipe-name">Valentine Chocolate Cake</span>
                                            <p className="recipe-cuisine">American</p>
                                        </td>
            
                                        <td> <span className="recipe-date">14 Feb </span></td>
                                    </tr>

                                    <tr>   

                                        <td>
                                            <span className="recipe-name">Dan Dan Mian</span>
                                            <p className="recipe-cuisine">Chinese</p>
                                        </td>
            
                                        <td> <span className="recipe-date">11 Feb </span></td>
                                    </tr>

                                    <tr>   

                                        <td>

                                            <span className="recipe-name">Crispy Thosai</span>
                                            <p className="recipe-cuisine">Indian</p>
                                        </td>
            
                                        <td> <span className="recipe-date">09 Feb </span></td>

                                    </tr>

                                </table>



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