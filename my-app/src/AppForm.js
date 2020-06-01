import React from 'react'

function AppForm(props){
    return(
        <div>
            <h1>Form</h1>
            <form className='inputForm'>
                <input 
                    className='text'
                    onChange={props.handleChange}
                    name='firstName'
                    placeholder='First Name'
                    value={props.firstName}
                /> <br />

                <input 
                    className='text'
                    onChange={props.handleChange}
                    name='lastName'
                    placeholder='Last Name'
                    value={props.lastName}
                /> <br />

                <input 
                    className='text'
                    onChange={props.handleChange}
                    name='Age'
                    placeholder='Age'
                    value={props.Age}
                /> <br />
            </form>

            <label className='genderFields'>
                <input 
                    className='radioButton'
                    type='radio'
                    name='Gender'
                    value='male'
                    checked={props.Gender === 'male'}
                    onChange={props.handleChange}
                /> Male <br />

                <input 
                    className='radioButton'
                    type='radio'
                    name='Gender'
                    value='female'
                    checked={props.Gender === 'female'}
                    onChange={props.handleChange}
                /> Female <br />

                <input 
                    className='radioButton'
                    type='radio'
                    name='Gender'
                    value='other'
                    checked={props.Gender === 'other'}
                    onChange={props.handleChange}
                /> Other <br />
            </label>

            <div className='currentInfo'>
                <h1>Current Information:</h1>
                <p> Name: {props.firstName} {props.lastName} </p>
                <p> Age: {props.Age} </p>
                <p> Gender: {props.Gender} </p>
            </div>
        </div>
    )
}

export default AppForm