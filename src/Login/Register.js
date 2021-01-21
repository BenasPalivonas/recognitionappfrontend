import React, { useState } from 'react'
import './SignIn.css';
import { setPage } from '../actions/index'
import { useDispatch } from 'react-redux';
const Register = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const onSubmitResgister = (event) => {
        event.preventDefault()
        let found = false;
        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                found = true;
            }
        }
        if (found === false) {
            alert("enter a valid email");
            return 0;
        }
        fetch('https://whispering-peak-11656.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                email: email,
                name: username,
                password: password
            })
        }).then(response => response.json()).then(data => {
            console.log(data);
            if (data === "Fill in the required fields") {
                alert(data);
            }
            else if (data === "User already exsists") {
                alert(data);
            }
            else if (data) {
                dispatch(setPage("signIn"))

            }
            else {
                alert('unable to register');
            }
        }
        )
    }
    return (
        <article className="br2 ba dark-gray b--black-10  w100 
          In ">
            <main className="pa4 washed-blue">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0 washed-blue">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="Username">Username</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="Username" name="Username" id="Username"
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={onSubmitResgister}
                            className="b ph3 pv2 input-reset ba washed-blue bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                    </div>
                </form>
            </main>
        </article>
    );
}
export default Register;