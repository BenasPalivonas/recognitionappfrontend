import React from 'react'
import './SignIn.css';
class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            username: "",
            id: 1,
            password: ""
        }
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    onUserNameChange = (event) => {
        this.setState({ username: event.target.value });
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }
    onSubmitResgister = (event) => {

        event.preventDefault()

        let found = false;
        for (let i = 0; i < this.state.email.length; i++) {
            if (this.state.email[i] === '@') {
                found = true;
            }
        }
        if (found === false) {
            alert("enter a valid email");
            return 0;
        }
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                name: this.state.username,
                id: this.state.id,
                password: this.state.password
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
                this.props.onRouteChange("signIn");

            }
            else {
                alert('unable to register');
            }
        }
        )
    }
    render() {
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
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="Username">Username</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="Username" name="Username" id="Username"
                                    onChange={this.onUserNameChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>

                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitResgister}
                                className="b ph3 pv2 input-reset ba washed-blue bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                        </div>

                    </form>
                </main>
            </article>
        );
    }
}
export default Register;