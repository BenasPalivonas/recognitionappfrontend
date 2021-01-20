import React, { useState } from 'react'
import './SignIn.css';
import { useDispatch } from 'react-redux'
import { setUser } from '../actions'
const SignIn = ({ onRouteChange }) => {
    const dispatch = useDispatch();
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("")
    const onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        }).then(response => response.json()).then(user => {

            if (user.id) {
                dispatch(setUser(user));
                onRouteChange("home");
            }
            else {
                alert("Incorrect login info");
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
                        <legend className="f4 fw6 ph0 mh0 washed-blue">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                                onChange={(event) => setSignInEmail(event.target.value)}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                                onChange={(event) => setSignInPassword(event.target.value)}
                            />
                        </div>

                    </fieldset>
                    <div className="">
                        <input onClick={onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba washed-blue bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="reg">
                        <input onClick={() => onRouteChange('register')}
                            className="b ph3 pv2 input-reset ba washed-blue bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                    </div>
                </form>
            </main>
        </article >
    );
}
export default SignIn;