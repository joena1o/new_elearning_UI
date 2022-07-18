import { Button, Box, Modal, Typography, Card, Grid } from '@mui/material';
import axios from 'axios';
import { useState } from "react";
import { conn } from '../../util/conn';
import { CgOptions } from 'react-icons/cg';
import { CoursesCard } from '../../Components/CoursesCard';
import {CircularProgress} from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { Loader } from '../../Components/Loader';



export const CourseRoute = () => {


    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [code, setCode] = useState("");
    const [classtype, setClass] = useState("private");


    const user = window.localStorage.getItem("user_type");
    const name = window.localStorage.getItem("fullname");
    const reg = window.localStorage.getItem("reg");

    const [isloading, setStatus] = useState(true);

    const [courses, setCourses] = useState([]);

    


    useEffect(()=>{

        getCourses();

    });

    const token = window.localStorage.getItem("token");

    const config = {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
      };

    const createCourse = async (e) => {

        e.preventDefault();

        handleClose();

        setOpen(true);

        

        await axios.post(conn + "/api/LectureRoom", {
            "courseTitle": title,
            "courseCode": code,
            "department": department,
            "classtype": classtype,
            "lecturename": name,
            "reg": reg
        }, config).then((value) => {

            setOpen(false);

            console.log(value.data);

        });

    }

    const getCourses = async () => {

       


        await axios.get(conn+"/api/LectureRoom",config).then((value)=>{

            if(value.status == "200" || value.status == 200){
                setCourses(value.data);
                setStatus(false);
            }
        })



    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 380,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    


    return (

        <>

<Dialog onClose={()=>setOpen(false)} open={open} sx={{zIndex:"2"}}>
      <Box sx={{padding:"20px"}}>
      <CircularProgress />
      </Box>
      
    </Dialog>


            <div className="course-route">

                {/* <div className='inner_'>

                No Courses created

                <div>
                    <Button variant="outlined" onClick={() => setOpen(true)}>Create New Course</Button>
                </div>

            </div> */}


               {(user!=="student")?(<Box sx={{ width: "100%", display: "inline-flex", justifyContent: "space-between", alignItems: "center", flexDirection: "" }} p={3}>

                    <div className=''>

                        Courses

                    </div>



                    <Button variant="outlined" onClick={() => setOpen(true)}>Create Course</Button>

                </Box>):(<></>)
                }

                <Box className='courses' p={5}>

                    <Box p={2} sx={{textTransform:"uppercase", letterSpacing:"2px"}}><h4>Courses</h4></Box>

                    <hr></hr>

                    {

                        (isloading)?(
                            <Loader />
                        ):(

                            courses.map((val,key)=>

                            <CoursesCard data={val} key={key} callback={handleOpen} callbackB={handleOpen2}  />

                            )

                        )

                    }


                    



                </Box>


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
                                <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" type='text' placeholder="Course Title" />
                                <label>
                                    Course Code
                                </label>
                                <input value={code} onChange={(e) => setCode(e.target.value)} className="form-control" type='text' placeholder="Course Code" />
                                <label>
                                    Department
                                </label>
                                <input value={department} onChange={(e) => setDepartment(e.target.value)} className="form-control" type='text' placeholder="Department" />

                                <label>
                                    Class Type
                                </label>
                                <select onChange={(e)=>setClass(e.target.value)}>
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                                <br></br>




                                <br></br>

                                <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                                    <Button variant='outlined' onClick={(e)=>createCourse(e)}>Create</Button>
                                    <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                                </div>

                            </form>
                        </Typography>
                    </Box>
                </Modal>




            </div>


            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title2"
                aria-describedby="modal-modal-description2"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title2" variant="h6" component="h2">
                        Delete Course
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                        <form>


                            <p>Are You Sure you want to delete this item?</p>



                            <br></br>

                            <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                                <Button variant='outlined' color="error">Create</Button>
                                <Button variant='outlined' color='primary' onClick={handleClose2}>Cancel</Button>
                            </div>

                        </form>
                    </Typography>
                </Box>
            </Modal>

        </>

    );

}