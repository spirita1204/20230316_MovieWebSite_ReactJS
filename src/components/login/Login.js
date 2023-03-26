import React from 'react';
import { Input } from '@mui/material';
import './login.css';

const Login = () => {
    return (
        <div class="login-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <Input type="text" name="" required="">
                        <label>Username</label>
                    </Input>
                </div>
                <div class="user-box">
                    <Input type="password" name="" required="">
                        <label>Password</label>
                    </Input>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
    )
}

export default Login
