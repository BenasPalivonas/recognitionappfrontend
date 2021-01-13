import React from 'react'
import './SignIn.css';
class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            signInEmail: "",
            signInPassword: "",
            signInUsername: "",
            id: 1
        }
    }
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value });
    }
    onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch('https://whispering-peak-11656.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        }).then(response => response.json()).then(user => {

            if (user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange("home");
            }
            else {
                alert("Incorrect login info");
            }

        }
        )

    }

    render() {
        const { onRouteChange } = this.props;
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
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>

                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitSignIn}
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

}
export default SignIn;