import { Card, Grid, Avatar, Box } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { style } from '../Styles/Modal.js';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import { conn } from '../util/conn.js';

export const ResourceRightCard = (props) => {

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);


    const [courseId, setCourse] = useState(props.data._id);
    const [dialog, setDialog] = useState(false);

    const [dialogmsg, setDialogMsg] = useState("");

    const reg = window.localStorage.getItem("reg");
    const department = window.localStorage.getItem("dept");


    const JoinCourse = async (e) => {

        e.preventDefault();
        await axios.post(conn + "/api/v1/lecture/" + courseId, {
            "reg": reg,
            "department": department
        }).then((value) => {
            console.log(value.data);
            setDialog(true);
            setDialogMsg(value.data.msg);
        }).catch((error) => {
            console.log(error.data);
        })

    }

    return (

        <div className="resource-right-card">

            <Card variant="outlined" sx={{ width: "90%", padding: "20px", margin: "20px 0px" }}>

                <Box >

                    <div style={{ width: "100%", paddingLeft: "5%", fontSize: "14px" }}>
                        <span style={{ margin: "20px 0" }}><b>{props.data.courseCode}</b></span><br></br><hr></hr>
                        <p><span>{props.data.courseTitle}</span></p>
                        <p>Department: {props.data.department}</p>
                        <p>Lecturer: {props.data.createdBy}</p>
                    </div>

                    <div className='card-foot' style={{ textAlign: "end", fontSize: "14px" }}>
                        {!(props.data.joined.find(
                            (item)=>{
                                return item.reg === reg
                            }))?<Button variant="text" onClick={handleOpen2} color='primary'>Join</Button>:<><Button variant="text"  color='error'>Leave Course</Button></>}
                    </div>

                </Box>

            </Card>


            <Dialog onClose={() => setDialog(false)} open={dialog}>
                <Box sx={{ padding: "20px" }}>
                    <p>{dialogmsg}</p>
                </Box>
            </Dialog>


            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title2"
                aria-describedby="modal-modal-description2">

                <Box sx={style}>
                    <Typography id="modal-modal-title2" variant="h6" component="h2">
                        Course Enrollment
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description2" sx={{ mt: 2 }}>



                        <form>

                            <div style={{ width: "100%", paddingLeft: "5%", fontSize: "17px" }}>
                                <div>
                                    <Avatar sx={{ width: "60px", height: "60px" }}>H</Avatar>
                                </div><br></br>
                                <p>Lecturer: {props.data.createdBy}</p>
                                <span style={{ margin: "20px 0" }}><b>Course Code: {props.data.courseCode}</b></span><br></br><hr></hr>
                                <span>{props.data.courseTitle}</span><br></br><br></br>
                                <p>Department: {props.data.department}</p>
                                <p><b>Course Content:</b> {props.data.courseContent}</p>

                            </div>

                            <br></br>

                            <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                                <Button variant='outlined' color="warning" onClick={(e) => JoinCourse(e)}>Join Now</Button>
                                <Button variant='outlined' color='primary' onClick={handleClose2}>Cancel</Button>
                            </div>

                        </form>
                    </Typography>
                </Box>
            </Modal>

        </div>

    );

}