import React from "react";
import MenuItem from "../menu-item/menu.item.component"
import {Container,Row,Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './directory.css'
 

class Directory extends React.Component{

    constructor(props) {
        super(props);

        //this.states value is an array of categories
        this.state = {
        
          categories: [
            {
              name: "dairy",
              id: 1,
              linkUrl: "/dairy",
            },
            {
              name: "veggies",
              id: 2,
              linkUrl: "/veggies",
            },
            {
              name: "fruits",
              id: 3,
              linkUrl: "/fruits", 
            },
            {
                name: "beverages",
                id: 4,
                linkUrl: "/beverages",
              },
              {
                name: "generalItems",
                id: 5,
                linkUrl: "/generalItems",
              },
          ],
        };
    }

    render() {
        return( <div className="directory-component" >
          
            <Container>
                <Row>
            {
                this.state.categories.map(({name,imageurl}) =>(
                    <Col md="3" className="columns">
                    <MenuItem categoryname = {name} />
                    </Col>
                ))
            }
              </Row>
            </Container>

        </div>)
    }

}
export default Directory;