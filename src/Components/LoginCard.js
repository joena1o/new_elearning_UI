import Lottie from "lottie-react";
import groovyWalkAnimation from "../Assets/Login_popup.json";
import { useState } from "react";
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

export default function LoginCard(){

    // const [auth, setAuth] = useState(false);
    const [mode, setMode] = useState('login');

    return(

        <div className="login-section">

            <div className="login-card">

                <div className="login-display">

                {/* {(mode==='login')? <p>USER LOGIN</p> : <p>SIGN UP</p>} */}

                    <div>
                    <Lottie animationData={groovyWalkAnimation} />
                    </div>

                    <div>
                        <h4>CONNECTED EDUCATION</h4>
                    </div>

                </div>

                {(mode==='login')?<div className="login-form">

                   <form>

                        <div className="form-group">
                        <label>Enter ID N0.</label>
                        <input type='text' className="form-control" placeholder="ID NO. eg EEE/19U/4556" />
                        </div>
                        
                        <label>Password</label>
                        <div className="form-group">
                        
                        <input type='password' className="form-control" placeholder="Enter Password" />
                        </div><br></br>



                        <div className="form-group">
                        <Link to='/home'><Button variant="outlined" color='warning'>Login</Button></Link>
                        </div>


                        <div className="form-group">
                        <Button variant="link" color='warning' onClick={()=>setMode('signup')}>No Account? Click here to sign up</Button>
                        </div>
                        

                   </form>

                </div>:

                <div className="signup-form">

                   <form>

                        <div className="form-group">
                        <label>Full name</label>
                        <input type='text' className="form-control" placeholder="First Name" />
                        </div>

                        <div className="form-group">
                        <label>Department</label>
                        <input type='text' className="form-control" placeholder="Email Address" />
                        </div>
                        

                        <div className="form-group">
                        <label>Reg No.</label>
                        <input type='password' className="form-control" placeholder="Enter Reg No." />
                        </div>

                        <div className="form-group">
                        <label>Phone</label>
                        <input type='phone' className="form-control" placeholder="Enter Phone Number" />
                        </div>

                        <div className="form-group">
                        <label>Email</label>
                        <input type='email' className="form-control" placeholder="Enter Email Address" />
                        </div>

                        <div className="form-group">
                        <label>Enter Password</label>
                        <input type='email' className="form-control" placeholder="Enter Password" />
                        </div>

                        <div className="form-group">
                        <label>Confirm Password</label>
                        <input type='password' className="form-control" placeholder="Confirm Password" />
                        </div><br></br>


                        <div className="form-group">
                        <Button variant="outlined" color='warning'>Sign Up</Button>
                        </div>


                        <div className="form-group">
                        <Button variant="link" color='warning' onClick={()=>setMode('login')}>Click Here to login instead</Button>
                        </div>
                        

                   </form>

                </div>

    }

            </div>

        </div>

    );

}