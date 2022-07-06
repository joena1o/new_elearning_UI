import { Button, Box, Modal, Typography, Card, Grid } from '@mui/material';
import axios from 'axios';
import { useState } from "react";
import { conn } from '../../util/conn';
import { CgOptions } from 'react-icons/cg';
import { CourseCard } from '../../Components/CoursesCard';



export const CourseRoute = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const createCourse = () => {

        axios.post(conn + "/api/")

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

    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [school, setSchool] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");


    return (

        <div className="course-route">

            {/* <div className='inner_'>

                No Courses created

                <div>
                    <Button variant="outlined" onClick={() => setOpen(true)}>Create New Course</Button>
                </div>

            </div> */}


            <Box sx={{ width: "100%", display:"inline-flex", justifyContent:"space-between", alignItems:"center", flexDirection:"" }} p={3}>

                <div className=''>

                   Courses

                    </div>


                    
                        <Button variant="outlined">Create Course</Button>
                    
            </Box>



            <Box className='courses' p={5}>

                <Box p={2}>Created Courses</Box>

                <hr></hr>


                <CourseCard />



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
                            <input value={department} onChange={(e) => setDepartment(e.target.value)} className="form-control" type='text' placeholder="Course Code" />
                            <label>
                                Department
                            </label>
                            <input value={school} onChange={(e) => setSchool(e.target.value)} className="form-control" type='text' placeholder="Department" />




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