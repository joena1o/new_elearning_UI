import { Card, Grid, Box, Modal, Typography, Button, Avatar, Tab, Tabs, CircularProgress } from '@mui/material';
import {conn} from "../util/conn";
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CoverPhoto } from './CourseCoverPhoto';
import {style} from '../Styles/Modal.js';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import Lottie from 'lottie-react';
import popup from '../Assets/96295-success-popup.json';

export const CourseCardHeader = (props) => {


    const reg = window.localStorage.getItem("reg");
    const user = window.localStorage.getItem("user_type");


    const [value, setValue] = useState('1');


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [open1, setOpen] = useState(false);
   

    

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const [open4, setOpen4] = useState(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);


    const [content, setContent] = useState("");
    const [material, setMaterial] = useState("PDF");
    const [code, setCode] = useState(props.data.courseCode);
    const [doc, setDoc] = useState("");


    const [schTime, setTime] = useState("");
    const [schDate, setDate] = useState("");
    const [title, setTitle] = useState("");


    const navigate = useNavigate();

    const location = useLocation();

    const call = ()=>{
        setValue("1");
        props.callback(1);
    }

    const call2 = ()=>{
        setValue("2");
        props.callback(2);
    }


    const uploadResource = async(e)=>{

        e.preventDefault();
        setOpen(true);

        const formdata = new FormData();
        formdata.append("content", content);
        formdata.append("materialType", material);
        formdata.append("courseCode", code);
        formdata.append("image", doc);
        await axios.post(conn+"/api/v1/material",formdata).then((value)=>{
            console.log(value.data);
            setOpen(false);
            setOpen2(false);
            setOpen4(true);
        }).catch((error)=>{
            setOpen(false);
            console.log(error.data);
        })


    }


    const ScheduleLecture = async(e)=>{

        e.preventDefault();
        setOpen(true);

        await axios.post(conn+"/api/v1/schedule", {
            "courseTitle":title,
            "courseCode": code,
            "department": props.data.department,
            "classType": "private",
            "createdBy": reg,
            "time": schTime,
            "date": schDate
        }).then((value)=>{
            setOpen(false);
            setOpen3(false);
            setOpen4(true);
            console.log(value.data);
        }).catch((error)=>{
            setOpen(false);
            console.log(error.data);
        })

    }

    return (

        <div class="course-card">

            <CoverPhoto />


            <Grid container sx={{ width: "100%", flexGrow: "1", padding: "60px 30px", alignItems: "center" }}>



                <Grid item lg={2} md={2} sm={3} xs={9} sx={{ alignItems: "center", fontSize: "24px" }}>


                </Grid>

                <Grid  container lg={10} md={9} sm={9} xs={9} sx={{ display: "inline-flex", marginTop: { lg: "-65px", md: "-50px", sm: "-75px" }, flexDirection: "column", textAlign: "start" }} >

                    <Grid item lg={10}>

                        <p><b>{props.data.courseCode}</b></p>
                        <p style={{fontStyle:"italic"}}>Course Title: {props.data.courseTitle}</p>
                        <p style={{fontStyle:"italic"}}>Department: {props.data.department}</p>
                        <p style={{fontStyle:"italic"}}>Course Content: {props.data.courseContent}</p>
                        <p style={{fontStyle:"italic"}}>Class Type: {props.data.classType}</p>
                        <br></br>

                        <Box>
                            <p style={{ color: "grey", textTransform: "uppercase", marginTop: "10px" }}><b>Number Of Students: {props.data.joined.length}</b></p>
                        </Box>
                        <br></br>


                        {(user==="lecturer" && props.data.reg === reg)?<div className='filter' style={{ marginTop: "20px" }}>

                            <Button variant="outlined" color="warning" sx={{ marginRight: "5px" }} onClick={handleOpen2}>Resources</Button>
                            <Button variant="outlined" color="warning" sx={{ marginRight: "5px" }} onClick={handleOpen3}>Lecture</Button>
                            {/* <Button variant="outlined" color="warning" sx={{ marginRight: "5px" }}>Announcement</Button> */}

                        </div>:<></>}

                    </Grid>


                </Grid>


            </Grid>


            

        

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{ padding: "30px 10px" }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {

                    (user === "student") ? (
                        <>
                            <MenuItem >
                                Leave Class
                            </MenuItem>


                        </>
                    ) : (

                        <>
                            <MenuItem >
                                Edit
                            </MenuItem>

                            <MenuItem >
                                Delete
                            </MenuItem>
                        </>

                    )

                }



            </Menu>

            

                <div style={{width:"100%", display:"inline-flex",justifyContent:"center"}}>
                <Tabs value={value}  color="warning" aria-label="basic tabs example">
                    <Tab label="Resource" value="1" onClick={()=>call()} />
                    <Tab label="Lecture" value="2" onClick={()=>call2()} />
                </Tabs>
                </div>

                <hr></hr>


                


                <Modal
                open={open2}
                sx={{ zIndex: "1" }}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title2"
                aria-describedby="modal-modal-description2">

                <Box sx={style}>
                    <Typography id="modal-modal-title2" variant="h6" component="h2">
                        Upload Resource
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                        <form>
                           
                           <textarea  onChange={(e)=>setContent(e.target.value)} placeholder='Content' className="form-control" />
                           <input type="text" disabled value={props.data.courseCode} placeholder='Course Code' className="form-control" />
                           <input type="file" onChange={(e)=>setDoc(e.target.files[0])} className="form-control" />

                           <br></br>



                            <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                                <Button variant='outlined' color="error" onClick={(e)=>uploadResource(e)} >Upload</Button>
                                <Button variant='outlined' color='primary' onClick={handleClose2}>Cancel</Button>
                            </div>

                        </form>
                    </Typography>
                </Box>
            </Modal>


            <Modal
                open={open3}
                onClose={handleClose3}
                sx={{ zIndex: "1" }}
                aria-labelledby="modal-modal-title2"
                aria-describedby="modal-modal-description2">

                <Box sx={style}>
                    <Typography id="modal-modal-title2" variant="h6" component="h2">
                        Schedule Lecture
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                        <form>
                           
                            <input type="text" placeholder='Lecture Title' onChange={(e)=>setTitle(e.target.value)}  className="form-control" />
                           <input type="time" onChange={(e)=>setTime(e.target.value)} className="form-control" />
                           <input type="date" onChange={(e)=>setDate(e.target.value)} className="form-control" />

                           <br></br>



                            <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                                <Button variant='outlined' color="error" onClick={(e)=>ScheduleLecture(e)}>Upload</Button>
                                <Button variant='outlined' color='primary' onClick={handleClose3}>Cancel</Button>
                            </div>

                        </form>
                    </Typography>
                </Box>
            </Modal>

            <Dialog onClose={() => setOpen(false)} open={open1} sx={{ zIndex: "10" }}>
                <Box sx={{ padding: "20px" }}>
                    <CircularProgress />
                </Box>

                </Dialog>


                <Dialog onClose={() => setOpen4(false)} open={open4} sx={{ zIndex: "10" }}>

                <Box sx={{ padding: "20px" }}>
                    <div style={{width:"100px", height:"100px", margin:"20px 0px"}}>
                    <Lottie animationData={popup} />
                    </div>
                    Resources Upload successfully
                </Box>

                </Dialog>




        </div>

    );

}