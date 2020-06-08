import React, {Component, Dimensions} from 'react';
import {
    Row, Col, Card, CardBody, CardTitle, CardText, CardImg
  } from 'reactstrap';
import './Gallery.scss'



class Gallery extends Component{
    constructor(){
        super()
        this.state={
            images: [],
            currentImg: '',
            index: 0,
        }
    }

    componentDidMount(){
        fetch('http://localhost:8000/image_storage')
        .then(results => results.json())
        .then(results => this.setState({images: results}));
    }
    
    next = () => {
        this.state.index += 1
        this.setState({
            currentImg: this.state.images[this.state.index]
        })
    }

    prev = () => {
        this.state.index -= 1
        this.setState({
            currentImg: this.state.images[this.state.index]
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.prev} disabled={this.state.index === 0}>
                    prev
                </button>
                <button onClick={this.next} disabled={this.state.index === this.state.images.length-1}>
                    next
                </button>

                <div className='slider'>
                    <div className='slider-wrapper'>
                        {this.state.images.map(i => (
                            <div className='images' key={i.id}>
                                <Card>
                                    <CardTitle>{i.title}</CardTitle>
                                    <CardImg className='img'
                                    src={i.image} 
                                    onClick={this.imageClick}
                                    />
                                    <div className='description'>
                                        <p>{i.description === ''? 'No Description' : i.description}</p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default Gallery;