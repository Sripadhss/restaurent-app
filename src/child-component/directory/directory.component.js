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
              imageUrl:'https://www.dairyfoods.com/ext/resources/DF/2020/August/df-100/GettyImages-1194287257.jpg?1597726305',
            },
            {
              name: "veggies",
              id: 2,
              linkUrl: "/veggies",
              imageUrl:"https://image.shutterstock.com/image-photo/party-table-setting-various-veggie-260nw-1400144090.jpg",
            },
            {
              name: "fruits",
              id: 3,
              linkUrl: "/fruits",
              imageUrl: "    https://media.istockphoto.com/photos/fruit-background-picture-id529664572?k=20&m=529664572&s=612x612&w=0&h=UPKnmT4wmX8KB_nke3R0Y6mH_syPYn7KTKFFYLJEJ8U=", 
            },
            {
                name: "beverages",
                id: 4,
                linkUrl: "/beverages",
                imageUrl: "    https://media.istockphoto.com/photos/fruit-background-picture-id529664572?k=20&m=529664572&s=612x612&w=0&h=UPKnmT4wmX8KB_nke3R0Y6mH_syPYn7KTKFFYLJEJ8U=",
              },
              {
                name: "generalItems",
                id: 5,
                linkUrl: "/generaiItems",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-r_ZF8_Krk7S98Mb0_9w6q2IGQNZvbK-Y6w&usqp=CAU.jpg",
              },
          ],
        };
    }

    render() {
        return( <div className="directory-component" >
          
            <Container>
                <Row>
            {
                this.state.categories.map((category) =>(
                    <Col md="3" className="columns">
                    <MenuItem categoryname = {category} />
                    </Col>
                ))
            }
              </Row>
            </Container>

        </div>)
    }

}
export default Directory;