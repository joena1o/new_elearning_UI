import { Button, Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import {conn} from '../../util/conn';
import axios from "axios";
import { config } from "../../util/config";
import { dept } from "../../Data/Departments";



export const LectureRoute = () => {

    const user = window.localStorage.getItem("user_type");


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [department, setDept] = useState("");
    const [school, setSchool] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");


    const createLecture_ = async (e)=>{

        e.preventDefault();

        if(title.length === 0 && code.length === 0 && department.length === 0 && school.length === 0 && date.length === 0 && time.length === 0 ){
            return;
        }else{

            await axios.post(conn+"/api/LectureRoom",{
                "courseTitle":title,
                "courseCode":code,
                "department":dept,
               
            },  config).then((value)=>{

                 console.log(value);

            });

        }

       


    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };


    return (

        <div className="lecture-route">



            No Pending Lecture

            <div>
                {

                    (user!=="student")?(
                    <Button variant="outlined" onClick={handleOpen} >Create Lecture</Button>
                    ):(<></>)
                }
                {/* <Button variant="outlined">Join Lecture</Button> */}
            </div>


            {/* <LectureAddFab /> */}


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Course
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form>
                            <label>
                                Course Title
                            </label>
                            <input value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" type='text' placeholder="Course Title" />
                            <label>
                                Course Code
                            </label>
                            <input value={code} onChange={(e)=>setCode(e.target.value)} className="form-control" type='text' placeholder="Course Code" />
                            <label>
                                Department
                            </label>
                            <select onChange={(e) => setDept(e.target.value)} className="form-control">
                                    {
                                        dept.map((val, key)=>(
                                            <option value={val} key={key}>{val}</option>
                                        ))
                                    }
                                </select>
                            <label>
                                Lecture Date
                            </label>
                            <input value={date} onChange={(e)=>setDate(e.target.value)} className="form-control" type='date' placeholder="Date" />
                            <label>
                               Lecture Time
                            </label>
                            <input value={time} onChange={(e)=>setTime(e.target.value)} className="form-control" type='date' placeholder="Time" />
                            

                       
                            
                            <br></br>
                            <Button variant='outlined'>Create</Button>
                            <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>

        </div>

    );

}