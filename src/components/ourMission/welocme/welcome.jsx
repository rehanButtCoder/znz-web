import React from 'react'
import style from './welcome.module.css'

import { Col, Container, Row } from 'react-bootstrap'


function Welcome() {
  return (
   
   
      <div className={style.sec1}>

      <Container fluid>
        <Row>
            <Col  lg={6} md={6}>
            <div className={style.sec1_left}>
                <h1>Welcome To ZNZ TECH</h1>
          <h6>Our mission is to help all students obtain academic success by making work more flexible and accessible.</h6>
            </div>
            </Col>

           < Col lg={6} md={6}>
            <div className={style.sec1_right}>

                {/* <img src={require("..//../images/Group21894.png")} ></img> */}
            </div>
            </Col>
            
        </Row>
        
      </Container>
      
      
    </div>
    
  
  )
}

export default Welcome
