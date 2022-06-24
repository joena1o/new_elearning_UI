
import { Button, Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import {conn} from '../../util/conn';



export const LectureRoute = () => {


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
        boxShadow: 24,
        p: 4,
      };


    return (

        <div className="lecture-route">



            No Pending Lecture

            <div>
                <Button variant="outlined" onClick={handleOpen} >Create Lecture</Button>
                <Button variant="outlined">Join Lecture</Button>
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                       Create New Lecture
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form>
                            <label>
                                Lecture
                            </label>
                            <input className="form-control" type='text' placeholder="Lecture Title" />
                            <label>
                                Course Code
                            </label>
                            <input className="form-control" type='text' placeholder="Course Code" />
                            <label>
                                Department
                            </label>
                            <input className="form-control" type='text' placeholder="Department" />
                            <label>
                                Lecture Date
                            </label>
                            <input className="form-control" type='date' placeholder="Department" />
                            <label>
                                Lecture Time
                            </label>
                            <input className="form-control" type='time' placeholder="Department" /><br></br>
                            <Button variant='outlined'>Create Lecture</Button>
                            <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>

        </div>

    );

}