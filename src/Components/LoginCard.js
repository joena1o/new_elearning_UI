import Lottie from "lottie-react";
import groovyWalkAnimation from "../Assets/Login_popup.json";
import { useState } from "react";
import { conn } from "../util/conn";
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import  axios  from "axios";
import { useNavigate } from "react-router-dom";



export default function LoginCard(){

    // const [auth, setAuth] = useState(false);

    const navigate = useNavigate();


    const Login_ = async(e)=>{

        e.preventDefault();

        console.log(regno + password);

        if(regno === "" && password === ""){
            console.log("check");
            return;
        }else{
            await axios.post(conn+"/api/login",{"reg":regno, "password":password}).then((value)=>{

                console.log(value);

               if(value.data){
                    navigate("/home");
               }

            });
        }

    }
    
    const SignUp_ = async (e)=>{

        e.preventDefault();


        if(regno ==="" && dept ==="" && email === "" && password ==="" && cpassword === ""){
                alert("Empty Fields")
                return;
        }
        else{
            if(password !== cpassword){

                alert(
                    "Password do not match"
                );

                return;
            }else{

                await axios.post(conn+"/api/register", {
                "reg":regno,
                "department":dept,
                "email":email,
                "password":password}).then((value)=>{


                    if(value.statusCode == 201 || value.statusCode == "201"){
                        setMode("login");
                    }

                console.log(value);

            })

            }
        }
            
            

    }


    const [mode, setMode] = useState('login');

    const [regno, setReg] = useState("");
    const [dept, setDept] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpass] = useState("");


    const [isloading,setLoad] = useState(false);


    return(

        <div className="login-section">

            <div className="login-card">

                <div className="login-display">


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
                        <input type='text' value={regno} onChange={(e)=>setReg(e.target.value)} required className="form-control" placeholder="ID NO. eg EEE/19U/4556" />
                        </div>
                        
                        <label>Password</label>
                        <div className="form-group">
                        
                        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required className="form-control" placeholder="Enter Password" />
                        </div><br></br>



                        <div className="form-group">
                        <Button variant="outlined" onClick={(e)=>Login_(e)}  color='warning'>Login</Button>
                        </div>


                        <div className="form-group">
                        <Button variant="link" color='warning' onClick={()=>setMode('signup')}>No Account? Click here to sign up</Button>
                        </div>
                        

                   </form>

                </div>:

                <div className="signup-form">

                   <form>

                       

                        <div className="form-group">
                        <label>Reg No.</label>
                        <input type='text' value={regno} onChange={(e)=>setReg(e.target.value)} className="form-control" placeholder="Enter Reg No." />
                        </div>


                        <div className="form-group">
                        <label>Department</label>
                        <input type='text' value={dept} onChange={(e)=>setDept(e.target.value)} className="form-control" placeholder="Email Address" />
                        </div>
                        


                        <div className="form-group">
                        <label>Email</label>
                        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Email Address" />
                        </div>

                        <div className="form-group">
                        <label>Enter Password</label>
                        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter Password" />
                        </div>

                        <div className="form-group">
                        <label>Confirm Password</label>
                        <input type='password' value={cpassword} onChange={(e)=>setCpass(e.target.value)} className="form-control" placeholder="Confirm Password" />
                        </div><br></br>


                        <div className="form-group">
                        <Button variant="outlined" onClick={(e)=>SignUp_(e)} color='warning'>Sign Up</Button>
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