import React from 'react';
import { Input } from '@mui/material';
import './login.css';



const Login = () => {
    return (
        <div className='outer'>
            <div className="inner login-form" style={{align:'center'}}>
                <form action="" method="post">
                    <h2 className="text-center">Sign in</h2>
                    <div className="text-center">
                        <a href="#" className="btn btn-danger btn-block"><i className="fa fa-google"></i>Sign in with Google</a>
                    </div>
                    <div className="or-seperator"><i>or</i></div>
                    <div className="form-group">
                        <div className="input-group">
                            <Input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
                        </div>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <div className="input-group">
                            <Input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
                        </div>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block login-btn" style={{width:'100%'}}>Sign in</button>
                    </div>

                </form>
                
            </div>  
        </div>
    )
}

export default Login
