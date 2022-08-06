import { Button, Box, Modal, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { conn } from '../../util/conn';
import { ResourceLayout } from "../../Layouts/ResourceLayout";
import { MdFormatListBulleted } from 'react-icons/md';
import { TbUpload } from 'react-icons/tb';
import axios from "axios";
import { Departments } from '../../Components/Departments';
import { CircularProgress } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Lottie from 'lottie-react';
import popup from '../../Assets/96295-success-popup.json';
import { dept } from "../../Data/Departments";



export const ResourceRoute = () => {

    const user = window.localStorage.getItem("user_type");


    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState(window.localStorage.getItem("dept"));
    const [school, setSchool] = useState("");
    const [descript, setDescript] = useState("");
    const [category, setCategory] = useState("");
    const [attach, setFile] = useState();


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [loading, setLoad] = useState(false);
    const [error, setError] = useState(false);
    const [errormsg, setMsg] = useState("");

    const userid = window.localStorage.getItem('id');


    const config = {
        headers: {
            'Content-type': 'application/json',
        }
    };



    const UploadResource_ = async (event) => {

        event.preventDefault();

        setLoad(true);


        const formData = new FormData();
        formData.append("attach", attach);
        formData.append("title", title);
        formData.append("department", department);
        formData.append("school", school);
        formData.append("description", descript)
        formData.append("createdBy", userid);


        if (title.length === 0 && department.length === 0 && school.length === 0 && descript.length === 0 && category.length === 0) {

            alert("Empty Fields");
            return;

        } else {

            console.log(formData.getAll("category"));

            await axios.post(conn + '/api/v1/public',
                formData,
                config
            ).then((value) => {
                /// CHECK RESPONSE
                setLoad(false);
                setMsg(value.data.msg);
                setError(true);
                console.log(value.data.msg);
            }).catch((err) => {
                setLoad(false);
                setMsg(err.data);
                setError(true);
                console.log(err.data);
            });

        }

    }


    const EditResource = async(e)=>{

        e.preventDefault();

        setLoad(true);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("department", department);
        formData.append("school", school);
        formData.append("description", descript);


        if(title === "" && department ==="" && school === "" && descript === ""){
        alert("Empty fields");
        return;
        }else{
            await axios.put(conn + '/api/v1/public',
            formData).then((value)=>{
                console.log(value.data);
            }).catch((error)=>{
                console.log(error.data);
            });
        }
    
    }



    const saveFile = (e) => {
        setFile(e.target.files[0]);
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

        <div className="resource-route">


            <div className="Banner">

                <b style={{ letterSpacing: "2px" }}>RESOURCES</b>
                
                <div className='resource-route-icons'>

                    <span><MdFormatListBulleted /></span>
                    {(user !== "student") ? (
                        <span onClick={() => handleOpen()}><TbUpload /></span>
                    ) : (<></>)}

                </div>

            </div>

            <Departments />

            <Dialog onClose={() => setLoad(false)} open={loading}>
                <Box sx={{ padding: "20px" }}>
                    <CircularProgress />
                </Box>

            </Dialog>

            <Dialog onClose={() => setError(false)} open={error}>

                    <div style={{width:"50px",height:"50px"}}>
                    <Lottie animationData={popup} />
                    </div>

                <Box sx={{ padding: "20px" }}>
                    <p>{errormsg}</p>
                </Box>

            </Dialog>



            <ResourceLayout />


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Upload Resource
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form>
                            <label>
                                Title
                            </label>
                            <input value={title} required onChange={(e) => setTitle(e.target.value)} className="form-control" type='text' placeholder="Title" />
                            <label>
                                Department
                            </label>
                            <select onChange={(e) => setDepartment(e.target.value)} className="form-control">
                                    {
                                        dept.map((val, key)=>(
                                            <option value={val} key={key}>{val}</option>
                                        ))
                                    }
                            </select>
                            <label>
                                School
                            </label>
                            <input value={school} required onChange={(e) => setSchool(e.target.value)} className="form-control" type='text' placeholder="School" />
                            <label>
                                Description
                            </label>
                            <input value={descript} required onChange={(e) => setDescript(e.target.value)} className="form-control" type='text' placeholder="Description" />
                            <label>
                                Category
                            </label>
                            <select value={category} required onChange={(e) => setCategory(e.target.value)} >

                                <option value="books">Books</option>
                                <option value="handout">Paper</option>
                                <option value="journal">Journal</option>
                                <option value="thesis">Thesis</option>
                                <option value="pastquestions">Past Questions</option>

                            </select>

                            <br></br>
                            <input onChange={(e) => saveFile(e)} className="form-control" type='file' />


                            <br></br>
                            <Button variant='outlined' onClick={(e) => UploadResource_(e)}>Upload Resource</Button>
                            <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>

        </div>

    );

}