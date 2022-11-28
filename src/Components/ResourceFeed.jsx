import { Avatar, Box, Card, Grid } from "@mui/material";
import { Button,  Modal, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { conn } from "../util/conn";
import {MdMoreHoriz} from 'react-icons/md';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Lottie from 'lottie-react';
import { CircularProgress } from '@mui/material';
import popup from "../Assets/629-empty-box.json";
import { useState } from "react";
import axios from "axios";
import trash from '../Assets/104230-simple-trash-clear.json';
import { dept } from "../Data/Departments";
import { useNavigate } from "react-router";

export const ResourceFeed = (prop) => {



    const navigate = useNavigate();

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

    const id = window.localStorage.getItem("id");

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [loading, setLoad] = useState(false);
    const [error, setError] = useState(false);


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [edit, setEdit] = useState(false);
    const handleEdit = () => setEdit(true);
    const handleEditClose = () => setEdit(false);


    const [title, setTitle] = useState(prop.data.title);
    const [department, setDepartment] = useState(prop.data.department);
    const [school, setSchool] = useState(prop.data.school);
    const [descript, setDescript] = useState(prop.data.description);


    const [msg, setMsg] = useState("");
    const [mss, setMss] = useState(false);


    const item_id = prop.data._id;

    

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const DeleteResource = async(e)=>{

        e.preventDefault();

        setLoad(true);

    
        await axios.delete(conn+ '/api/v1/public/'+item_id).then((value)=>{
            console.log(value.data);
            setMss(true);
            setMsg(value.data.msg);
            setLoad(false);
        }).catch((error)=>{
            console.log(error.data);
            setLoad(false);
        })


    }


    const EditResource = async(e)=>{

        e.preventDefault();

        setLoad(true);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("department", department);
        formData.append("school", school);
        formData.append("description", descript);

        console.log(formData.getAll("school"));


        if(title === "" && department ==="" && school === "" && descript === ""){
        alert("Empty fields");
        return;
        }else{
            await axios.put(conn + '/api/v1/public/'+item_id,
            {
                "title":title,
                "department": department,
                "school": school,
                "description": descript 
            }).then((value)=>{
                console.log(value.data);
                setLoad(false);
            }).catch((error)=>{
                console.log(error.data);
                setLoad(false);
                setError(true);
                setMsg(JSON.stringify(error.data))
            });

        }
    
    }

    return (

        <Box sx={{ width: "96%" }}>

            <Card variant='outlined' sx={{ padding: "10px", width: "100%", textAlign: "start" }}>
                
                <div style={{display:"inline-flex", fontSize:"25px", justifyContent:"flex-start",width:"100%"}} onClick={handleClick}>
                    <MdMoreHoriz  />
                </div>

                <iframe src={prop.data.attach} title={prop.data.createdBy.fullname} width="100%" height="100px" style={{margin:"20px 0px"}}></iframe>
                <hr></hr>



                <div style={{ padding: "10px 10px" }}>

                    <span style={{width:"100%", fontSize:"15px", padding:"20px 0px", textTransform:"uppercase", overflowX:"ellipsis", textOverflow:"fade", fontWeight:"bold"}}>{prop.data.title}</span>
                    <p style={{textTransform:"uppercase"}}><small>{prop.data.category}</small></p>
                    <p><small>{prop.data.department}</small></p>
                </div>


                <hr style={{backgroundColor:"#CE7248"}}></hr>

                <Grid container direction='row' spacing={7} sx={{ alignItems: "flex-start", justifyContent: "flex-start", textAlign: "start", padding: "0px 10px" }}>

                    <Grid item sx={{ width: "18%", display: { md: "none", lg: 'block', sm: "none", xs: "none" } }}>
                        <Avatar>H</Avatar>
                    </Grid>

                    <Grid item sx={{ width: { md: "100%", lg: "79%", sm: "100%", xs: "100%" } }}>
                        <b>{prop.data.createdBy.fullname}</b>
                        <p><small>{prop.data.department}</small></p>
                    </Grid>

                </Grid>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{padding:"30px 10px",right:"20px"}}
                    MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                        {
                            (id===prop.data.createdBy._id)?<MenuItem onClick={handleEdit}>
                            Edit
                            </MenuItem>:<></>
                        }
                    

                        <MenuItem onClick={() => navigate(`/home/bookview`, { state: { book: prop.data } })}>
                            Preview
                        </MenuItem>

                        {
                            (id===prop.data.createdBy._id)?<MenuItem onClick={handleOpen2}>
                            Delete
                            </MenuItem>:<></>
                        }

                </Menu>


            <Modal
                open={edit}
                onClose={handleEditClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Resource
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
                            {/* <label>
                                Category
                            </label>
                            <select value={category} required onChange={(e) => setCategory(e.target.value)} >

                                <option value="books">Books</option>
                                <option value="handout">Paper</option>
                                <option value="journal">Journal</option>
                                <option value="thesis">Thesis</option>
                                <option value="pastquestions">Past Questions</option>

                            </select> */}

                            <br></br>
                            {/* <input onChange={(e) => saveFile(e)} className="form-control" type='file' /> */}


                            <br></br>
                            <Button variant='outlined' color="warning" onClick={(e) => EditResource(e)}>Edit Resource</Button>
                            <Button variant='outlined' color='error' onClick={handleEditClose}>Cancel</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>


            <Dialog onClose={() => setLoad(false)} open={loading}>
                <Box sx={{ padding: "20px" }}>
                    <CircularProgress />
                </Box>

            </Dialog>

            <Dialog onClose={() => setMss(false)} open={mss}>

                    <div style={{width:"100px",height:"100px", display:"inline-flex", justifyContent:"center", alignItems:"center", margin:"100px"}}>
                    <Lottie animationData={trash} />
                    </div>

                <Box sx={{ padding: "20px" }}>
                    {msg}
                </Box>

            </Dialog>

            <Dialog onClose={() => setError(false)} open={error}>

                    <div style={{width:"100px",height:"100px", display:"inline-flex", justifyContent:"center", alignItems:"center", margin:"100px"}}>
                    <Lottie animationData={popup} />
                    </div>

                <Box sx={{ padding: "20px" }}>
                    <p>Internal Server error, failed to update</p>
                </Box>

            </Dialog>



            </Card>


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
                                <Button variant='outlined' onClick={DeleteResource} color="error">Delete</Button>
                                <Button variant='outlined' color='primary' onClick={handleClose2}>Cancel</Button>
                            </div>

                        </form>
                    </Typography>
                </Box>
            </Modal>

        </Box>

    );


}