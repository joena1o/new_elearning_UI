import { Card, Grid, Box, Modal, Typography, Button} from '@mui/material';
import { CgOptions } from 'react-icons/cg';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const CoursesCard = (props) => {

    const user = window.localStorage.getItem("user_type");

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    const navigate = useNavigate();


    return (

        <Card variant='outlined' p={18} sx={{marginBottom:"30px"}} >

            <Grid container sx={{ width: "100%", flexGrow: "1", padding: "40px", alignItems: "center" }}>


                <Grid item lg={10} md={10} sm={9} xs={9} sx={{ display: "inline-flex", flexDirection: "column", textAlign: "start" }} onClick={()=>navigate("/home/courseview", { state: { data: props.data } })} >

                    <p><b>{props.data.courseCode}</b></p>
                    <p style={{fontStyle:"italic"}}>Course Title: {props.data.courseTitle}</p>
                    <p style={{fontStyle:"italic"}}>Department: {props.data.department}</p>
                    <p style={{fontStyle:"italic"}}>Course Content: {props.data.courseContent}</p>
                    <p style={{fontStyle:"italic"}}>Class Type: {props.data.classType}</p>

                    <Box>
                        <p style={{color:"grey",textTransform:"uppercase",marginTop:"10px"}}><b>Number Of Students: 0</b></p>
                    </Box>

                </Grid>

                <Grid item lg={2} md={2} sm={3} xs={9} sx={{ alignItems: "center", fontSize: "24px" }}>

                   { (user!=="student")?(<IconButton
                        size="large"
                        aria-label="show more"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <CgOptions />
                    </IconButton>):(<></>)

                   }

                   

                </Grid>


            </Grid>


            <Box>

            </Box>


            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{padding:"30px 10px"}}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                <MenuItem onClick={() => props.callback(true)}>
                    Edit
                </MenuItem>

                <MenuItem onClick={()=> props.callbackB(true)}>
                    Delete
                </MenuItem>

            </Menu>


            {/* <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title2"
                aria-describedby="modal-modal-description2"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title2" variant="h6" component="h2">
                        Create Course
                    </Typography>
                    <br></br>
                    <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                        <form>
                        

                            <p>Are You Sure you want to delete this item?</p>



                            <br></br>
                            <Button variant='outlined'>Create</Button>
                            <Button variant='outlined' color='error' onClick={handleClose2}>Cancel</Button>
                        </form>
                    </Typography>
                </Box>
            </Modal> */}

        </Card>

    )
}