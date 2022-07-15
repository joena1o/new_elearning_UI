import Lottie from "lottie-react";
import groovyWalkAnimation from "../Assets/Login_popup.json";
import { useState } from "react";
import { conn } from "../util/conn";
import {Button, Box} from '@mui/material';
import {CircularProgress} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import {Alert} from '@mui/material';
import  axios  from "axios";
import { useNavigate } from "react-router-dom";





export default function LoginCard(){

    // const [auth, setAuth] = useState(false);

    const navigate = useNavigate();

    
   

    const Login_ = async(e)=>{

        e.preventDefault();

        setOpen(true);

        // console.log(regno + password);

        if(regno === "" && password === ""){
            setOpen(false);
            setErrorText("Please fill in blank fields");
            setError(true);
            return;
        }else{
            await axios.post(conn+"/api/login",{"reg":regno, "password":password}).then((value)=>{
                
                setOpen(false);

                // console.log(value.data);

               if(value.data){

                window.localStorage.setItem("token", JSON.stringify(value.data.token));
                window.localStorage.setItem("user_type", value.data.acounttype);
                window.localStorage.setItem("fullname", value.data.fullname);
                window.localStorage.setItem("dept", value.data.department);
                window.localStorage.setItem("reg", value.data.reg);
                window.localStorage.setItem("id", value.data._id);
                 navigate("/home");

            

               }

            });
        }

    }
    
    const SignUp_ = async (e)=>{

        e.preventDefault();

        setOpen(true);


        if(regno ==="" && dept ==="" && email === "" && password ==="" && cpassword === ""){
        
                setErrorText("Please fill in blank fields");
                setError(true);
                setOpen(false);
                return;
        }
        else{
            if(password !== cpassword){

                setErrorText("Passwords do not match");
                setError(true);

                return;
            }else{

                await axios.post(conn+"/api/register", {
                "reg":regno,
                "department":dept,
                "email":email,
                "acounttype": user,
                "fullname":name,
                "password":password}).then((value)=>{


                    if(value.status === 201 || value.status === "201"){
                        setOpen(false);
                        setMode("login");
                        console.log(value.data);
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
    const [user, setUser] = useState("student");
    const [password, setPassword] = useState("");
    const [cpassword, setCpass] = useState("");
    const [name, setName] = useState("");


    const [displayerror, setError] = useState(false);
    const [error, setErrorText] = useState("");


    const [isloading,setLoad] = useState(false);

    const [open, setOpen] = useState(false);


    return(


        <>


    <Dialog onClose={()=>setOpen(false)} open={open}>
      <Box sx={{padding:"20px"}}>
      <CircularProgress />
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
                        <label>Reg No.</label>
                        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Full name" />
                        </div>

                        <div className="form-group">
                        <label>Reg No.</label>
                        <input type='text' value={regno} onChange={(e)=>setReg(e.target.value)} className="form-control" placeholder="Enter Reg No." />
                        </div>


                        <div className="form-group">
                        <label>Department</label>
                        <input type='text' value={dept} onChange={(e)=>setDept(e.target.value)} className="form-control" placeholder="Department" />
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
                        <label>User Type</label>
                        <select onClick={(e)=>setUser(e.target.value)}>
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