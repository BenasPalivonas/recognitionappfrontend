import React from 'react'
import './Navigation.css'
var change
var text
const Navigation = ({ signOut, Page }) => {
    if (Page === "signIn") {
        change = "register"
        text = "Register"
    }
    else if (Page === "register") {
        change = "signIn"
        text = "Sign In"
    }
    else if (Page === "home") {
        change = "signIn"
        text = "Sign Out"
    }

    return (
        <div className="textDiv">
            <button onClick={() => signOut(change)} className="f1 text dim pointer">
                {
                    <div>{text}</div>
                }
            </button>
        </div>
    );
}
export default Navigation;
