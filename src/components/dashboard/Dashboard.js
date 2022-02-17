import React, { Component } from 'react';
import LineCharts from './LineChartDemo';
import PieCharts from './PieChartDemo';
import LineChartCuisine from './LineChartCuisine';
import { Container, Row, Col} from 'reactstrap';





export default class Dashboard extends Component {
    
    cuisine_data = [
        {name: 'Thai', value: 14}, 
        {name: 'Vietnamese', value: 9}, 
        {name: 'Korean', value: 3},  
        {name: 'Japanese', value: 10},
        {name: 'Chinese', value: 8}, 
        {name: 'British', value: 5}, 
        {name: 'Indian', value: 10}, 
        {name: 'American', value: 10}];

    cuisine_colors = ['#0088FE', '#FFBB38', '#00C49F', '#FF8042', '#8510d8', '#FFC0CB','#1b25c6', '#FF3232'];
    
	cuisine_views = [
        {day: '8 Feb', Thai: 8, Vietnamese: 9, Korean: 7, Japanese: 10, Chinese: 12, British: 11, Indian: 8, American: 14},
        {day: '9 Feb', Thai: 9, Vietnamese: 11, Korean: 5, Japanese: 9, Chinese: 14, British: 12, Indian: 9, American: 12},
        {day: '10 Feb', Thai: 7, Vietnamese: 13, Korean: 12, Japanese: 11, Chinese: 13, British: 13, Indian: 11, American: 13},
        {day: '11 Feb', Thai: 9, Vietnamese: 11, Korean: 13, Japanese: 12, Chinese: 9, British: 11, Indian: 10, American: 10},
        {day: '12 Feb', Thai: 10, Vietnamese: 14, Korean: 14, Japanese: 14, Chinese: 15, British: 15, Indian: 12, American: 14},
        {day: '13 Feb', Thai: 12, Vietnamese: 13, Korean: 11, Japanese: 15, Chinese: 18, British: 16, Indian: 13, American: 14},
        {day: '14 Feb', Thai: 11, Vietnamese: 15, Korean: 16, Japanese: 17, Chinese: 6, British: 12, Indian: 12, American: 16}
    ];


    usership_data = [
        {day: '1 Feb', Users: 1, Views: 2},
        {day: '2 Feb', Users: 3, Views: 10},
        {day: '3 Feb', Users: 6, Views: 56},
        {day: '4 Feb', Users: 2, Views: 80},
        {day: '5 Feb', Users: 2, Views: 108},
        {day: '6 Feb', Users: 3, Views: 132},
        {day: '7 Feb', Users: 4, Views: 206},
        {day: '8 Feb', Users: 8, Views: 298},
        {day: '9 Feb', Users: 9, Views: 302},
        {day: '10 Feb', Users: 5, Views: 369},
        {day: '11 Feb', Users: 8, Views: 490},
        {day: '12 Feb', Users: 5, Views: 555},
        {day: '13 Feb', Users: 3, Views: 666},
        {day: '14 Feb', Users: 9, Views: 681}
  ];

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
                                                <p className="stat-data bookmarks">70</p>
                                            </div>
                                                <div className="previous-data">
                                                    <p className="stat">Top Cuisine</p>
                                                    <p className="stat-data views">Thai(20.6%)</p>
                                                </div>

                                            </div>
                                    </div>
                                    <PieCharts data ={this.cuisine_data} colors = {this.cuisine_colors} primColor="#4562ec"/>

                                </div>

                          </Col>

                          <Col sm="12" md="9" lg="7">
                          <strong>Daily Total Views By Cuisine </strong>
                                <div className="card linechart">

                                    <LineChartCuisine data={this.cuisine_views} cuisines={this.cuisine_data} colors = {this.cuisine_colors}/>

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