
import { Button, Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { conn } from '../../util/conn';
import { HomeFeed } from "../../Layouts/HomeFeed";
import { ResourceLayout } from "../../Layouts/ResourceLayout";
import {MdFormatListBulleted} from 'react-icons/md';
import {TbUpload} from 'react-icons/tb';




export const ResourceRoute = () => {


    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [school, setSchool] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");

    const [file, setFile] = useState();
    const [filename, setFilename] = useState("");


    const saveFile = (e)=>{
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
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (

        <div className="resource-route">


            <div className="Banner">

                Resources

                <div style={{fontSize:"30px"}}>
                    <MdFormatListBulleted />
                    <TbUpload />
                </div>

            </div>



           <ResourceLayout />







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
                            <input value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" type='text' placeholder="Title" />
                            <label>
                                Department
                            </label>
                            <input value={department} onChange={(e)=>setDepartment(e.target.value)} className="form-control" type='text' placeholder="Department" />
                            <label>
                                School
                            </label>
                            <input value={school} onChange={(e)=>setSchool(e.target.value)} className="form-control" type='text' placeholder="School" />
                            <label>
                                Author
                            </label>
                            <input value={author} onChange={(e)=>setAuthor(e.target.value)} className="form-control" type='text' placeholder="Author" />
                            <label>
                                Category
                            </label>
                            <select value={category} onChange={(e)=>setCategory(e.target.value)} className="form-control">

                                <option value="books">Books</option>
                                <option value="handout">Handout</option>
                                <option value="lecturenote">Lecture Notes</option>
                            
                            </select>

                            {/* <label>
                                Author
                            </label> */}

                            <br></br>
                            <input  onChange={(e)=>saveFile(e)} className="form-control" type='file' />
                           
                            
                            <br></br>
                            <Button variant='outlined'>Upload Resource</Button>
                            <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>

        </div>

    );

}