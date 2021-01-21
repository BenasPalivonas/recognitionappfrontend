import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Navigation.css'
import { setPage } from '../actions/index'
var change

const Navigation = ({ signOut }) => {
    const dispatch = useDispatch();
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
                        <button onClick={() => {
                            dispatch(setPage("faceReco"))

                        }} className="text dim pointer">Face Reco</button>
                        <button onClick={() => {
                            dispatch(setPage("foodReco"))

                        }} className="text dim pointer">Food Reco</button>
                        <button onClick={() => {
                            dispatch(setPage("colorReco"))

                        }} className="text dim pointer">Color Reco</button>
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
