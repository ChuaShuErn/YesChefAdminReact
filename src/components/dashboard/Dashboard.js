import React, { Component } from 'react';
import LineCharts from './LineChartDemo';
import PieCharts from './PieChartDemo';
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
                                            <p className="stat">Total Views</p>
                                            <p className="stat-data bookmarks">137</p>
                                        </div>

                                        <div className="previous-data">
                                            <p className="stat">Avg User Views</p>
                                            <p className="stat-data bookmarks">4.5</p>
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
    
                          <Col sm="12" md="8" lg="3">
                            <strong>Recipe Cuisine Breakdown</strong>
                                <div className="card pie">
                                        <div className="card-mid">
                                            <div className="data-container">
                                                <div className="previous-data">
                                                    <p className="stat">Top Cuisine</p>
                                                    <p className="stat-data bookmarks">Thai(39%)</p>
                                                </div>

                                            </div>
                                    </div>
                                    <PieCharts primColor="#4562ec"/>

                                </div>

                          </Col>
    
                      </Row>
    
                  </Container>



            </div>
            </div>
        );
      }
    }