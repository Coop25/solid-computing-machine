import React, { useState } from "react";
import "./InputForm.css";
var is_valid_email = function(email) { return /^.+@.+\..+$/.test(email); }

function InputForm(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [passwordConfirm, setConfirm] = useState("")
    const [pin, setPin] = useState("")
    const [contactFirst, setContactFirst] = useState("")
    const [contactLast, setContactLast] = useState("")
    const [phone, setPhone] = useState("")
    return (
    <form className="mainForm">
        <label>
        <h2>First Name:</h2>
            <input className="firstName" type="text" name="First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
        </label>
        <label>
        <h2>Last Name:</h2>
            <input className="lastName" type="text" name="Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <label>
        <h2>Email:</h2>
            <input className="email" type="text" name="Password" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
        <h2>Password:</h2>
            <input className="password" type="password" name="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label>
            <h2>Enter Password Again:</h2>
            <input className="password" type="password" name="Passwords Must Match" value={passwordConfirm} onChange={(event) => setConfirm(event.target.value)}  />
        </label>
        <label>
            <h2>Pin:</h2>
            <input className="pin" type="number" name="Enter Your Pin" value={pin} onChange={(event) => setPin(event.target.value)}  />
        </label>
        <label>
            <h2>Contact First Name:</h2>
            <input className="contactFirst" type="text" name="contact First" value={contactFirst} onChange={(event) => setContactFirst(event.target.value)} />
        </label>
        <label>
            <h2>Contact Last Name:</h2>
            <input className="contactLast" type="text" name="contact Last" value={contactLast} onChange={(event) => setContactLast(event.target.value)}  />
        </label>
        <label>
            <h2>Contact Phone Number:</h2>

            <input className="contactPhone" type="number" name="Phone Number" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <button className="button" onClick={event => {
            event.preventDefault();
            if (!firstName || !lastName || !email || !password || !passwordConfirm || !pin || !contactFirst || !contactLast || !phone) {
            } else if (password.length < 6 && password === passwordConfirm) {
                alert(
                    `Choose a more secure password`
                );
                    } else if (pin.length < 4) {
                        alert(
                            `Choose a more secure pin`
                    )
                    } else if (pin.length > 4) {
                        alert(
                            `Choose a shorter pin`
                        )
                    } else if (!is_valid_email(email)) {
                        alert(
                            `Choose a valid email`
                        )
                
            } else {
                alert(`Welcome back, ${firstName} ${lastName}`)
            }

            setFirstName("");
            setLastName("");
            setPassword("");
            setConfirm("");
            setPin("");
            setContactFirst("");
            setContactLast("");
            setPhone("");
            setEmail("");
        }}>
        Submit
        </button>
    </form>
    )
}

export default InputForm;