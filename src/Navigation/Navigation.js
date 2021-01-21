import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Navigation.css'
var change
const Navigation = ({ signOut }) => {
    const [text, setText] = useState("")
    const page = useSelector(state => state.page)
    useEffect(() => {
        if (page === "signIn") {
            change = "register"
            setText("Register")
        }
        else if (page === "register") {
            change = "signIn"
            setText("Sign In")
        }
        else {
            change = "signIn"
            setText("Sign Out")
        }
    }, [page])
    return (
        <div className="textDiv" >
            {
                page !== "signIn" && page !== "register" && page !== "menu" ?
                    <div className="navigation">
                        <button className="text dim pointer">Face Reco</button>
                        <button className="text dim pointer">foodReco</button>
                        <button className="text dim pointer">colorReco</button>
                    </div>
                    :
                    <div></div>
            }
            <button onClick={() => signOut(change)} className="text dim pointer">
                {
                    <div>{text}</div>
                }
            </button>
        </div>
    );
}
export default Navigation;
