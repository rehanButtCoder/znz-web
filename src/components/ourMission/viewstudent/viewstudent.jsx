import React from 'react'
import style from './viewstudent.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Viewstudent() {
  return (
 <div className={style.sec3_main}>
    <Container fluid>
        <Row >
            <Col lg={6}><div className={style.student_sec_left}>
             
                 {/* <img src={require('../../images/About Us page-Find Student helpers.png')} width='100%'/>  */}
                </div></Col>
            <Col lg={6}><div className={style.student_sec_right}>    <h2>Find Student helpers in your area</h2>
            <p>We ensure easy access to trusted students whenever you need it. You don’t
              have to do everything on your own, when you can have someone to help you.</p>
              <Link>Get started</Link>
              </div></Col>
        </Row>
    </Container>




 </div>
  )
}

export default Viewstudent
