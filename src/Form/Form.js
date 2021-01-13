import React from 'react'
import './Form.css'
const Form = ({ onClick, onInput, user, count }) => {
    const onSubmit = () => {
        onClick();
        count();
    }
    return (
        <div>
            <p><b>Hello {user.name}, your pressed submit: {user.entries} times</b></p>
            <input type="text" name="text" placeholder="enter image link" className="Form pointer" onChange={onInput} />
            <button type="button" className="Submit pointer" onClick={onSubmit}  >Submit</button>
        </div>
    );
}

export default Form