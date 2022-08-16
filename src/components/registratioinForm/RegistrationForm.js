import React, {useState} from "react";
import "./registrationForm.scss";
import InputText from "../inputText/InputText"
import SuperButton from "../superButton/SuperButton";

function RegistrationForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const emailError = email ? '' : 'email required'
    const passwordError = password ? '' : 'password required'
    const confirmError = confirmPassword ? '' : 'confirm password required'

    const onEnterPassword = () => {
        alert('подтвердите пароль!!')
    }

    const sendDataHandler = () => {
        const post = {
            email: email,
            password: password,
        }

        if (password !== confirmPassword) {
            alert('неверно введен пароль подтверждения...')
        } else {
            fetch("https://somebackend.com/api/post", {
                method: "POST",
                body: JSON.stringify(post)
            })
            .then((res) => res.json())
            .then((data) => {console.log(data);})
            .catch((e) =>{
                console.log(e);
            })
            
        }
    }

    const passwordPlace = password || confirmPassword
    const disabledBtn = passwordPlace === '';

    return (
        <div className = "container">
            <div className = "registerWrapper">
                <div className = "registerWindow">
                    <h1 className = "logo">New User</h1>
                    <h2 className = "signUp">Sign Up</h2>
                    <div className = "emailWrapper">
                        <InputText
                            formName = {"Email"}
                            type = {"email"}
                            value = {email}
                            onChangeText = {setEmail}
                            error = {emailError}
                            inputStyle
                        />
                    </div>
                    <div className = "passwordWrapper">
                        <InputText
                            className = "password"
                            formName = {'Password'}
                            type = {'password'}
                            value = {password}
                            onChangeText = {setPassword}
                            onEnter = {onEnterPassword}
                            error = {passwordError}
                            inputStyle
                        />

                    </div>
                    <div className = "passwordWrapper">
                        <InputText
                            className = "password"
                            formName = {'Confirm password'}
                            type = {'password'}
                            value = {confirmPassword}
                            onChangeText = {setConfirmPassword}
                            onEnter = {sendDataHandler}
                            error = {confirmError}
                            inputStyle
                        />
                    </div>
                    <div className = "buttons">
                        <div className = "refuseBtn">
                            <SuperButton 
                                classBtn={'cancelBtn'}>
                                Cancel
                            </SuperButton>   
                        </div>
                        <div className = "registerBtn">
                            <SuperButton
                                classBtn={'confirmBtn'}
                                onClick={sendDataHandler}
                                disabled={disabledBtn}>
                                Sign Up
                            </SuperButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;