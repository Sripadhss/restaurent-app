import React from "react";
import MenuItem from "../menu-item/menu.item.component"
import {Container,Row,Col,Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './directory.css'
 

class Directory extends React.Component{

    constructor(props) {
        super(props);

        //this.states value is an array of categories
        this.state = {
        
          categories: [
            {
              name: "Deserts",
              id: 1,
              linkUrl: "/Deserts",
              imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfhsLBm3OkHmV2041lqzyqNB-9u83OYOXtWzCjUC5jrOaXmsuUZPZqZDkWeAwI0zSxNIQ&usqp=CAU"
            },
            {
              name: "Biryani",
              id: 2,
              linkUrl: "/Biryani",
              imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0J7uSLUUWuzJsCCe4nccCH5r2JAi9JdIuw&usqp=CAU",
            },
            {
              name: "Starters",
              id: 3,
              linkUrl: "/Starters",
              imageUrl: " https://thumbs.dreamstime.com/b/tawa-fish-punjabi-recipe-as-starters-served-north-indian-style-plate-nicely-garnished-onion-rings-photographed-174010914.jpg", 
            },
            {
                name: "Soft Drinks",
                id: 4,
                linkUrl: "/beverages",
                imageUrl: "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAKz-7GSoniAJ2JiHRQ35m9WP7S8pF_g-OA&usqp=CAU",
              },
              {
                
                name: "Alcohol",
                id: 5,
                linkUrl: "/Alcohol",
                imageUrl: "https://c4.wallpaperflare.com/wallpaper/801/113/82/hennessy-wallpaper-preview.jpg"
              },
          ],
        };
    }

    render() {
        return( <div className="directory-component" style={{backgroundColor:'black'}} >
          
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