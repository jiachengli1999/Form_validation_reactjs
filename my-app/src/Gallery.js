import React, {Component} from 'react';
import {
    Row, Col, Card, CardBody, CardTitle, CardText, CardImg
  } from 'reactstrap';

class Gallery extends Component{
    constructor(){
        super()
        this.state={
            images: [],
        }
    }

    componentDidMount(){
        fetch('http://localhost:8000/image_storage')
        .then(results => results.json())
        .then(results => this.setState({images: results}));
    }
    
    render(){
        return (
            <div>
                {this.state.images.map(i => (
                    <div key={i.id}>
                        <Card>
                            <CardTitle>{i.title}</CardTitle>
                            <CardImg src={i.image} width="500px"></CardImg>
                        </Card>
                    </div>
                ))}
            </div>
        )
    }
}
export default Gallery;