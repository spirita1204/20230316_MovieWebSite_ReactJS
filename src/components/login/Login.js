import React, { useState} from 'react';
import { Input } from '@mui/material';
import './login.css';
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const adminUser = {
        account: "daniel",
        password: "daniel"
    }
    //驗證有效是否
    const [isAuth, setIsAuth] = useState(false);
    //存用戶資料
    const [formData, setFormData] = useState({ account: "", password: "" });
    //作頁面跳轉用
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        //避免原本預設表單提交
        e.preventDefault();
        if(formData.account == adminUser.account && formData.password == adminUser.password){
            setIsAuth(true);
            console.log("log in success!");
            navigate("/home",{
                state:{
                    isAuth:true
                }
            });
        }
    }
    return (
        <div className='outer'>
            <div className="inner login-form" style={{ align: 'center' }}>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center">Sign in</h2>
                    <div className="text-center">
                        <a href="#" className="btn btn-danger btn-block"><i className="fa fa-google"></i>Sign in with Google</a>
                    </div>
                    <div className="or-seperator"><i>or</i></div>
                    <div className="form-group">
                        <div className="input-group">
                            <Input type="text" className="form-control" name="username" placeholder="Username" required="required"
                                onChange={e => {
                                    setFormData({ ...formData, account: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <div className="input-group">
                            <Input type="password" className="form-control" name="password" placeholder="Password" required="required"
                                onChange={e => {
                                    setFormData({ ...formData, password: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block login-btn" style={{ width: '100%' }}>Sign in</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login
