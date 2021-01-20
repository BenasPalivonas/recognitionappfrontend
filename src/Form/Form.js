import React, { useState } from 'react';
import './Form.css'
import { useSelector, useDispatch } from 'react-redux'
import { setEntries } from "../actions/index"
const Form = ({ onClick }) => {
    const [value, setValue] = useState("")
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const count = () => {
        console.log(user.id);
        fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                id: user.id
            })
        }).then(response => response.json()).then(data => {
            console.log(data[0])
            dispatch(setEntries(data[0]))
        }).catch(console.log)
    }
    const buttonClick = () => {
        count();
        onClick(value);
    }
    return (
        <div>
            <p><b>Hello {user.name}, your pressed submit: {user.entries} times</b></p>
            <button className="clear pointer" onClick={() => setValue("")} > Clear </button>
            <input type="text" name="text" placeholder="enter image link" value={value} className="Form" onChange={(event) => setValue(event.target.value)} />
            <button type="button" className="Submit pointer" onClick={buttonClick}  >Submit</button>

        </div>
    );
}

export default Form