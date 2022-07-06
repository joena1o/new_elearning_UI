import {Button,  Box, Modal, Typography } from '@mui/material';
import { useState } from "react";
import { AssessmentHeader } from '../../Components/AssessmentHeader';
import { CreateQuizRoute } from './AssessmentRoutes/CreateQuizRoute';


export const AssessmentRoute = () => {

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



    const [title, setTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [school, setSchool] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");


    return (

        <div className="assessment-route" style={{width:"100%"}}>


            <CreateQuizRoute />

            {/* <AssessmentHeader />

            <div className='inner_'>

            No Previous Assessments

            <div>
                <Button variant="outlined" onClick={()=>setOpen(true)}>Create New Assessment</Button>
            </div>




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

                       
                            
                            <br></br>
                            <Button variant='outlined'>Create</Button>
                            <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>

            </div> */}


        </div>




    );


}