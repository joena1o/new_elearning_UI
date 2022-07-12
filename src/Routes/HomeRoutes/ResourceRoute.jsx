import { Button, Box, Modal, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { conn } from '../../util/conn';
import { ResourceLayout } from "../../Layouts/ResourceLayout";
import { MdFormatListBulleted } from 'react-icons/md';
import { TbUpload } from 'react-icons/tb';
import axios from "axios";
import {Departments} from '../../Components/Departments';



export const ResourceRoute = () => {

    const user = window.localStorage.getItem("user_type");


    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [school, setSchool] = useState("");
    const [descript, setDescript] = useState("");
    const [category, setCategory] = useState("");

    const [file, setFile] = useState();
    const [filename, setFilename] = useState("");

  


    const token = window.localStorage.getItem('token');


    const config = {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
    };



    const UploadResource_ = async (event) => {

        event.preventDefault();


            const formData = new FormData();
            formData.append("attach", file);
            formData.append("filename", filename);
            formData.append("title", title);
            formData.append("department", department);
            formData.append("school", school);
            formData.append("user", window.localStorage.getItem("reg"))
            formData.append("description", descript)
            formData.append("category", category);


        if (title.length === 0 && department.length === 0 && school.length === 0 && descript.length === 0 && category.length === 0) {

            alert("Empty Fields");
            return;

        }else {

            console.log(formData.getAll("category"));

            await axios.post(conn + '/api/resources',
                formData,
                config
            ).then((value) => {
                console.log(value.data);
            });

        }

    }


    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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

                Resources

                <div className='resource-route-icons'>
                    <span><MdFormatListBulleted /></span>
                    {(user!=="student")?(
                        <span onClick={() => handleOpen()}><TbUpload /></span>
                    ):(<></>)}
                    
                </div>

            </div>

            <Departments />



            <ResourceLayout  />







            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
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
                            <input value={department} required onChange={(e) => setDepartment(e.target.value)} className="form-control" type='text' placeholder="Department" />
                            <label>
                                School
                            </label>
                            <input value={school} required onChange={(e) => setSchool(e.target.value)} className="form-control" type='text' placeholder="School" />
                            <label>
                                Description
                            </label>
                            <input value={descript} required onChange={(e) => setDescript(e.target.value)} className="form-control" type='text' placeholder="Author" />
                            <label>
                                Category
                            </label>
                            <select  value={category} required onChange={(e) => setCategory(e.target.value)} >

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