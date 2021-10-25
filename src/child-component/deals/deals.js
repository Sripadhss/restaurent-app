import React from 'react';
import './deals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row ,Col} from 'react-bootstrap';

function Deals(){
    return(
      
            

        <div className= "card">
        
           <h3 class="colorchange" style={{color:"aqua"}}> <marquee scrollamount="10" behavior="alternate" scrolldelay="2" style={{width:"100%"}}>Best Offers For Limited Period , Hurry Up!!</marquee></h3>
             
           

        <Container  >
            <Row>
            <Col md="3"className="col">
            <div className="biryani"><h6>Biryani+coke at 299/-</h6></div>


        </Col>
        <Col md="3"className="col">
            <div className="dinner"><h6> Non-veg thali at 999/-</h6></div>


        </Col>
        <Col md="3" className="col">
            <div className="dinner"><h6> Veg-thali at 799/-</h6></div>


        </Col>
        <Col md="3" className="col">
            <div className="dinner"><h6> Arabian Mandi 599/-</h6></div>


        </Col>
        <Col md="3" className="col">
            <div className="dinner"><h6> Unlimited Alcohol at 1500/-</h6></div>


        </Col>
        <Col md="3" className="col">
            <div className="dinner"><h6> Membership offer 15%</h6></div>


        </Col>

        </Row>
             </Container>
        </div>
        


    )
}
export default Deals;