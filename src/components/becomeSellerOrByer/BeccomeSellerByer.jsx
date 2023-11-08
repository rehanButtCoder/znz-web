import React from 'react';
import './BeccomeSellerByer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function BeccomeSellerByer() {
    return (
        <div>
      
            <Container className=' buyer_seller_main'>
                <Row className="cstm-row-buyer border rounded">
                    <div className='all-contents'>
                        <h2>Welcome to  <span> Communications</span></h2>
                        <div className='looking-todo'><p>What are you looking to do?</p></div>

                        <div className='seller-box border rounded'><div className='check-box-seller'><input input className='check-inp ' type='checkbox'/></div>
                        <div className='inner-seller-content'><h5>Seller</h5>
                        <p>Hire and support enthusiastic college students to help you with daily tasks and errands</p>
                        </div></div>
                        <div className='buyer-box  border rounded'><div className='check-box-buyer'><input className='check-inp ' type='checkbox'/></div>
                        
                        <div className='inner-buyer-content'><h5>Buyer</h5>
                        <p>Become a student freelancer and connect with local families to help with daily tasks and errands</p>
                        </div></div>
                        <div className='last-content-buyer-box'><p>Already have an account ?</p>   <Link className='byer-login'>login</Link>

                        </div>


                    </div>

                </Row>

            </Container>

        </div>
    )
}

export default BeccomeSellerByer
