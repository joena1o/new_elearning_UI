
import { Button, Box, Modal, Typography } from "@mui/material";
import {useState} from 'react';
import { PastQAapi } from "../../Apis/PastQA/PastQA";
import { HomeFeed } from "../../Layouts/HomeFeed";


export const PastQA = () => {


    const [title,setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [abstract, setAbstract] = useState("");
    const [department, setDepartment]= useState("");
    const [school, setSchool] = useState(""); 
    const [file, setFile] = useState();
    const [filename, setFilename] = useState("");


    const saveFile = (e)=>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }


  const Upload = ()=>{


    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", filename);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("abstract", abstract);
    formData.append("department", department);
    formData.append("school", school);


    PastQAapi(formData).then((value)=>{
        


    });


  }

    




    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };






    return (

        <div className="pastqa">

            <div className="Banner">

                Past Q/A

                <div>
                    <Button variant="outlined" color='warning' onClick={handleOpen} >Upload</Button>

                </div>

            </div>

            <HomeFeed />


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                       Past Question
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form>
                            <label>
                                Title
                            </label>
                            <input value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" type='text' placeholder="Title" />
                            <label>
                                    Author
                            </label>
                            <input value={author} onChange={(e)=>setAuthor(e.target.value)} className="form-control" type='text' placeholder="Author" />
                            <label>
                                Description
                            </label>
                            <input value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" type='text' placeholder="Description" />
                            <label>
                                Abstract
                            </label>
                            <input value={abstract} onChange={(e)=>setAbstract(e.target.value)} className="form-control" type='text' placeholder="Abstract" />
                            <label>
                               Department
                            </label>
                            <input value={department} onChange={(e)=>setDepartment(e.target.value)} className="form-control" type='text' placeholder="Department" />
                            <label>
                               School
                            </label>
                            <input value={school} onChange={(e)=>setSchool(e.target.value)} className="form-control" type='text' placeholder="School" />
                            <label>
                               Resource
                            </label>
                            <input type='file' onChange={saveFile} />
                            <br></br>
                            <br></br>
                            
                            <Button variant='outlined' onClick={Upload}>Upload Past Question</Button>
                            <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>

        </div>

    );


}