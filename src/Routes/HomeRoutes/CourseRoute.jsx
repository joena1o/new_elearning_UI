import { Button, Box, Modal, Typography, Tab, Tabs } from '@mui/material';
import axios from 'axios';
import { useState } from "react";
import { conn } from '../../util/conn';
import { CoursesCard } from '../../Components/CoursesCard';
import { CircularProgress } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useEffect } from 'react';
import { Loader } from '../../Components/Loader';
import Lottie from "lottie-react";
import Empty from "../../Assets/629-empty-box.json";
import { dept } from '../../Data/Departments';



export const CourseRoute = () => {


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState(window.localStorage.getItem("dept"));
    const [code, setCode] = useState("");
    const [classtype, setClass] = useState("private");
    const [courseContent, setContent] = useState("");



    const user = window.localStorage.getItem("user_type");
    const [isloading, setStatus] = useState(true);
    const [courses, setCourses] = useState([]);
    const [waiting, setWait] = useState(true);


    const [index, setIndex] = useState("");




    useEffect(() => {

        getCourses();

    }, []);


    const fullname = window.localStorage.getItem(
        "fullname"
    );

    const reg = window.localStorage.getItem(
        "reg"
    );

    const config = {
        headers: {
            'Content-type': 'application/json',
        }
    };

    const createCourse = async (e) => {
        e.preventDefault();
        handleClose();
        setOpen(true);
        await axios.post(conn + "/api/v1/courses", {
            "courseTitle": title,
            "courseCode": code,
            "department": department,
            "classType": classtype,
            "courseContent": courseContent,
            "createdBy": fullname,
            "reg": reg
        }).then((value) => {
            setOpen(false);
        }).catch((error) => {
        });
    }

    const getCourses = async () => {
        await axios.get(conn + "/api/v1/courses", config).then((value) => {
            if (value.status === "200" || value.status === 200) {
                setCourses(value.data.reverse());
                setStatus(false);
                setWait(false);
                console.log(value.data);
            } else {
                setWait(false);
            }
        })
    }


    const DeleteCourse = async (e) => {
        e.preventDefault();
        await axios.delete(conn + "/api/v1/course" + index).then((value) => {
            console.log(value.data);
        });
    }


    const [value, setValue] = useState('1');


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

            <Dialog onClose={() => setOpen(false)} open={open} sx={{ zIndex: "2" }}>
                <Box sx={{ padding: "20px" }}>
                    <CircularProgress />
                </Box>

            </Dialog>


            <div className="course-route">

                <Box sx={{ width: "100%", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>

                    {

                        (user === "lecturer") ? <Tabs value={value} aria-label="basic tabs example">
                            <Tab label="Created" value="1" onClick={() => setValue("1")} />
                            <Tab label="Joined" value="2" onClick={() => setValue("2")} />
                        </Tabs> : <></>

                    }

                </Box>

                {(value === "1") ? <Box>



                    {(courses.length === 0) ? <>{(waiting === false) ? <div className='inner_'>

                        No Courses created


                        <div style={{ height: "300px", margin: "30px", display: "inline-flex", justifyContent: "center" }}>
                            <Lottie animationData={Empty} />
                        </div>

                        <div>
                            <Button variant="outlined" onClick={() => setOpen(true)}>Create New Course</Button>
                        </div>

                    </div> : <div style={{ height: "300px", margin: "30px", display: "inline-flex", justifyContent: "center" }}><CircularProgress /></div>}</> : <>


                        {(user === "lecturer") ? (<Box sx={{ width: "100%", display: "inline-flex", justifyContent: "space-between", alignItems: "center", flexDirection: "" }} p={3}>

                            <div className=''>
                                <b></b>
                            </div>

                            <Button variant="outlined" color="warning" onClick={() => setOpen(true)}>Create Course</Button>

                        </Box>) : (<></>)
                        }

                        <div className={(user === "lecturer")?'course-cont':'course-cont2'}><Box className='courses' p={5}>

                            <Box p={2} sx={{ textTransform: "uppercase", letterSpacing: "2px" }}><h4>Courses</h4></Box>

                            <hr></hr>

                            {
                                (isloading) ? (
                                    <Loader />
                                ) : (
                                    (user !== "lecturer") ? courses.map((val, key) =>
                                        (val.joined.find(
                                            (item) => {
                                                return item.reg === reg
                                            })) ? <CoursesCard data={val} key={key} callback={handleOpen} callbackB={handleOpen2} callbackC={setIndex} /> : <></>
                                    ) : courses.map((val, key) => (val.reg === reg) ? <CoursesCard data={val} key={key} callback={handleOpen} callbackB={handleOpen2} callbackC={setIndex} /> : <></>)
                                )
                            }

                        </Box></div>

                    </>}

                </Box> : <>
                <div className='course-cont2'>
                    <div style={{width: "100%", padding:"30px"}}>
                        {(user === "lecturer") ? courses.map((val, key) =>
                            (val.joined.find(
                                (item) => {
                                    return item.reg === reg
                                })) ? <CoursesCard data={val} key={key} callback={handleOpen} callbackB={handleOpen2} callbackC={setIndex} /> : <></>
                        ) : courses.map((val, key) => (val.reg === reg) ? <CoursesCard data={val} key={key} callback={handleOpen} callbackB={handleOpen2} callbackC={setIndex} /> : <></>)}
                    </div></div>

                </>}


                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
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
                                <input value={title} required onChange={(e) => setTitle(e.target.value)} className="form-control" type='text' placeholder="Course Title" />
                                <label>
                                    Course Code
                                </label>
                                <input value={code} required onChange={(e) => setCode(e.target.value)} className="form-control" type='text' placeholder="Course Code" />
                                <label>
                                    Course Content
                                </label><br></br>
                                <textarea value={courseContent} style={{ height: "120px" }} required onChange={(e) => setContent(e.target.value)} className="form-control" type='text' placeholder="Course Content e.g Introduction to biotechnology..." />
                                <label>
                                    Department
                                </label>
                                <select onChange={(e) => setDepartment(e.target.value)} className="form-control">
                                    {
                                        dept.map((val, key) => (
                                            <option value={val} key={key}>{val}</option>
                                        ))
                                    }
                                </select>
                                <label>
                                    Class Type
                                </label>
                                <select onChange={(e) => setClass(e.target.value)} className="form-control">
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                                <br></br>

                                <br></br>

                                <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                                    <Button variant='outlined' onClick={(e) => createCourse(e)}>Create</Button>
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
                aria-describedby="modal-modal-description2">

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
                                <Button variant='outlined' color="error" onClick={DeleteCourse}>Delete</Button>
                                <Button variant='outlined' color='primary' onClick={handleClose2}>Cancel</Button>
                            </div>

                        </form>
                    </Typography>
                </Box>
            </Modal>

        </>

    );

}