import React from "react";
import "./SignUpForm.css";
import Footer from "../Footer";
import InputForm from "../InputForm";


function SignUpForm ({login}){
    return (
        <>
        <div className="signUpHeader">
        <h1 className="signUp">Sign Up</h1>
        </div>
        <InputForm login={login}/>
        <Footer />
        <div className="background">
        </div>
        <div className="background1">
        </div>
        </>
    )
}

export default SignUpForm;