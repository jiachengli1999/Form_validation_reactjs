import React, { Component } from 'react'

class AppForm extends Component{
    constructor(props){
        super(props)
        this.state = ({
            firstName: "",
            lastName: "",
            Gender: "",
            Age: "",
        })
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const { value, name } = e.target
        this.setState({
          [name]: value
        })
      }
    
    render(){
        return(
            <div>
                <h1>Form</h1>
                <form className='inputForm'>
                    <input 
                        className='text'
                        onChange={this.handleChange}
                        name='firstName'
                        placeholder='First Name'
                        value={this.state.firstName}
                    /> <br />
    
                    <input 
                        className='text'
                        onChange={this.handleChange}
                        name='lastName'
                        placeholder='Last Name'
                        value={this.state.lastName}
                    /> <br />
    
                    <input 
                        className='text'
                        onChange={this.handleChange}
                        name='Age'
                        placeholder='Age'
                        value={this.state.Age}
                    /> <br />
                </form>
    
                <label className='genderFields'>
                    <input 
                        className='radioButton'
                        type='radio'
                        name='Gender'
                        value='male'
                        checked={this.state.Gender === 'male'}
                        onChange={this.handleChange}
                    /> Male <br />
    
                    <input 
                        className='radioButton'
                        type='radio'
                        name='Gender'
                        value='female'
                        checked={this.state.Gender === 'female'}
                        onChange={this.handleChange}
                    /> Female <br />
    
                    <input 
                        className='radioButton'
                        type='radio'
                        name='Gender'
                        value='other'
                        checked={this.state.Gender === 'other'}
                        onChange={this.handleChange}
                    /> Other <br />
                </label>
    
                <div className='currentInfo'>
                    <h1>Current Information:</h1>
                    <p> Name: {this.state.firstName} {this.state.lastName} </p>
                    <p> Age: {this.state.Age} </p>
                    <p> Gender: {this.state.Gender} </p>
                </div>
            </div>
        )
    }
}

export default AppForm