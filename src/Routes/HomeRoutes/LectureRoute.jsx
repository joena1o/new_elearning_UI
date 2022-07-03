import { Button, Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import {conn} from '../../util/conn';
import axios from "axios";



export const LectureRoute = () => {


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [dept, setDept] = useState("");
    const [school, setSchool] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");


    const createLecture_ = async (e)=>{

        e.preventDefault();

        if(title.length === 0 && code.length === 0 && dept.length === 0 && school.length === 0 && date.length === 0 && time.length === 0 ){
            return;
        }else{

            await axios.post(conn+"/api/LectureRoom",{
                "courseTitle":title,
                "courseCode":code,
                "department":dept
            }).then((value)=>{

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
                <Button variant="outlined" onClick={handleOpen} >Create Lecture</Button>
                <Button variant="outlined">Join Lecture</Button>
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                       Create New Lecture
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form>
                            <label>
                                Course Title
                            </label>
                            <input className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} type='text' placeholder="Course Title" />
                            <label>
                                Course Code
                            </label>
                            <input className="form-control" value={code} onChange={(e)=>setCode(e.target.value)} type='text' placeholder="Course Code" />
                            <label>
                                School
                            </label>
                            <input className="form-control" value={school} onChange={(e)=>setSchool(e.target.value)} type='text' placeholder="School" />
                            <label>
                                Department
                            </label>
                            <input className="form-control" value={dept} onChange={(e)=>setDept(e.target.value)} type='text' placeholder="Department" />
                            <label>
                                Lecture Date
                            </label>
                            <input className="form-control" value={date} onChange={(e)=>setDate(e.target.value)} type='date' placeholder="Department" />
                            <label>
                                Lecture Time
                            </label>
                            <input className="form-control" value={time} onChange={(e)=>setTime(e.target.value)} type='time' placeholder="Department" /><br></br>
                            <Button variant='outlined' onClick={(e)=>createLecture_(e)}>Create Lecture</Button>
                            <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>

        </div>

    );

}