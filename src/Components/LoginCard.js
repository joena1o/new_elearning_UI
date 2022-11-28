import Lottie from "lottie-react";
import groovyWalkAnimation from "../Assets/Login_popup.json";
import { useState, useEffect } from "react";
import { conn } from "../util/conn";
import {Button, Box} from '@mui/material';
import {CircularProgress} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import {Alert} from '@mui/material';
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
import { dept } from "../Data/Departments";





export default function LoginCard(){

    const navigate = useNavigate();   

    const Login_ = async(e)=>{

        e.preventDefault();

        setOpen(true);

        if(regno === "" && password === ""){

            setOpen(false);
            setErrorText("Please fill in blank fields");
            setError(true);
            return;

        }else{

                await axios.post(conn+"/api/v1/login",{"reg":regno, "password":password}).then((value)=>{
            
                setOpen(false);

               if(value.data.length > 0){

                window.localStorage.setItem("email", value.data[0]['email']);
                window.localStorage.setItem("user_type", value.data[0]['accounttype']);
                window.localStorage.setItem("fullname", value.data[0]['fullname']);
                window.localStorage.setItem("dept", value.data[0]['department']);
                window.localStorage.setItem("reg", value.data[0]['reg']);
                window.localStorage.setItem("id", value.data[0]['_id']);
              
                  navigate("/home");

               }
        

            }).catch(function(error){
                setMessage(JSON.stringify(error.response.data.msg));
                setOpen(false);
                openError(true);
            });
        }

    }



    
    const SignUp_ = async (e)=>{

        e.preventDefault();

        setOpen(true);


        if(regno ==="" && department ==="" && email === "" && password ==="" && cpassword === ""){
        
                setErrorText("Please fill in blank fields");
                setError(true);
                setOpen(false);
                return;
        }
        else{
            if(password !== cpassword && (password.length < 5) ){

                setErrorText("Passwords do not match");
                setError(true);

                return;
            
            }else{

                const formData = new FormData();
                formData.append("reg",regno);
                formData.append("department",department);
                formData.append("email",email);
                formData.append("accounttype",user);
                formData.append("fullname",name)
                formData.append("password",password)
            
                
                await axios.post(conn+"/api/v1/register", formData).then((value)=>{
                    if(value.status === 201 || value.status === "201"){
                        setOpen(false);
                        setMode("login");
                        console.log(value.data);
                    }
                    console.log(value);
                }).catch(function(error){
                    setMessage("failed");
                    setOpen(false);
                    openError(true);
                });

        }
        }
        
    }


    const [mode, setMode] = useState('login');

    const [regno, setReg] = useState("");
    const [department, setDept] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("student");
    const [password, setPassword] = useState("");
    const [cpassword, setCpass] = useState("");
    const [name, setName] = useState("");


    const [displayerror, setError] = useState(false);
    const [error, setErrorText] = useState("");


    const [isloading,setLoad] = useState(false);

    const [open, setOpen] = useState(false);

    const [erro, openError] = useState(false);

    const [message, setMessage] = useState("");

    return(


        <>

<Dialog onClose={()=>setOpen(false)} open={open}>
      <Box sx={{padding:"20px"}}>
      <CircularProgress />
      </Box>
      
    </Dialog>


    <Dialog onClose={()=>openError(false)} open={erro}>
      <Box sx={{padding:"20px"}}>
      <p>Login failed, review details and try again</p>
      </Box>
      
    </Dialog>


    <Alert severity="error" color="error" sx={{position:"fixed", bottom:"50px", fontSize:"20px", display:(displayerror)?"unset":"none"}}>
        {error}
    </Alert>

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
                        <label>Enter Fullname</label>
                        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Full name" />
                        </div>

                        <div className="form-group">
                        <label>Reg No.</label>
                        <input type='text' value={regno} onChange={(e)=>setReg(e.target.value)} className="form-control" placeholder="Enter Reg No." />
                        </div>


                        <div className="form-group">
                        <label>Department</label>
                        <select className="form-control" onChange={(e)=>setDept(e.target.value)}>
                                    {
                                        dept.map((val, key)=>(
                                            <option value={val} key={key}>{val}</option>
                                        ))
                                    }
                        </select>
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
                        <label>User Type</label><br></br>
                        <select onClick={(e)=>setUser(e.target.value)} className="form-control">
                            <option value="student">Student</option>
                            <option value="lecturer">Lecturer</option>
                        </select>
                
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

        </>
    );

}