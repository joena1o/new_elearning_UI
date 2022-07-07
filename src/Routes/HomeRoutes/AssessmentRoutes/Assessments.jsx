import { useState } from "react";
import { AssessmentHeader } from '../../../Components/AssessmentHeader';
import { Button, Box, Modal, Typography } from '@mui/material';
import { useNavigate } from "react-router";

export const Assessment = () => {

    const navigate = useNavigate();

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
    const [code, setCode] = useState("");
    const [type, setType] = useState("assignment");
    const [marks, setMarks] = useState("10");


    const [data, setData] = useState([]);


    return (

        <div className="assessment">


            <AssessmentHeader />

            <div className='inner_'>

                {
                (data.length==0)?(<>

                    No Previous Assessments

                    <div>
                        <Button variant="outlined" onClick={() => setOpen(true)}>Create New Assessment</Button>
                    </div>

                </>):(<></>)
                }




            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Assessment
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form>
                            <label>
                                Title
                            </label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" type='text' placeholder="Title" />
                            <label>
                                Department
                            </label>
                            <input value={department} onChange={(e) => setDepartment(e.target.value)} className="form-control" type='text' placeholder="Department" />
                            <label>
                                Course Code
                            </label>
                            <input value={code} onChange={(e) => setCode(e.target.value)} className="form-control" type='text' placeholder="School" />
                            <label>
                                Assessment Type
                            </label>
                            <select onChange={(e) => setType(e.target.value)}>
                                <option value="assignment">Assignment</option>
                                <option value='test'>Test</option>
                                <option value='quiz'>Quiz</option>
                            </select>
                            <label>
                                Allocated Marks
                            </label>
                            <select value={marks} onChange={(e) => setMarks(e.target.value)} className="form-control">

                                <option value="10">10 Marks</option>
                                <option value="20">20 Marks</option>
                                <option value="30">30 Marks</option>
                                <option value="45">45 Marks</option>
                                <option value="60">60 Marks</option>

                            </select>



                            <br></br>
                            <Button variant='outlined' onClick={()=>navigate('setquiz')} >Create</Button>
                            <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>


        </div>

    );

}