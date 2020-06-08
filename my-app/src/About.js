import React, { Component } from 'react'
import stars from './pics/stars.PNG'
import mountain from './pics/mountain.PNG'
import mushrooms from './pics/mushrooms.PNG'
import words from './pics/words.PNG'
import wood from './pics/wood2.PNG'
import './About.css'
class About extends Component{
    render(){
        return(
            <div>
                <div className='head'>
                    <div className="title">Some Title</div>
                </div>
                <div className='body'>
                    <div className='item-area1'>
                        <img className='mountain' src={mountain}/> 
                        <div className='text-area1'>
                            <h1>Sub Title 1</h1>
                            <p>"Sets the width and height of thedsadsa.</p>
                            <p>The first value sets the width, the sdsadsa.</p>
                            <p>If only one value is given, the sedsadsadsa"</p>
                            <button>Watch Trailer</button>
                        </div>
                    </div><br/>
                    <div className='item-area2'>
                        <img className='mushrooms' src={mushrooms}/>
                        <div className='text-area2'>
                            <h1>Sub Title 2</h1>
                            <p>"Sets the width and height of thedsadsa.</p>
                            <p>The first value sets the width, the sdsadsa.</p>
                            <p>If only one value is given, the sedsadsadsa"</p>
                            <button>Watch Trailer</button>
                        </div>
                    </div><br/>
                    <div className='item-area3'>
                        <img className='words' src={words}/>
                        <div className='text-area3'>
                            <h1>Sub Title 3</h1>
                            <p>"Sets the width and height of thedsadsa.</p>
                            <p>The first value sets the width, the sdsadsa.</p>
                            <p>If only one value is given, the sedsadsadsa"</p>
                            <button>Watch Trailer</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
export default About