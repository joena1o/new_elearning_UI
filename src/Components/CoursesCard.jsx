import { Card, Grid, Box, Modal, Typography, Button, Tooltip} from '@mui/material';
import { IoMdOptions } from 'react-icons/io';
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



    const callbacks =(id)=>{

         props.callbackB(true);
         props.callbackC(id);

    }


    const navigate = useNavigate();


    return (

        <Card variant="outlined" p={18} sx={{marginBottom:"30px", borderLeft:"10px solid #CE7248", cursor:"pointer"}} >

            <Grid container sx={{ width: "100%", flexGrow: "1", padding: "40px", alignItems: "center" }}>


                <Grid item lg={10} md={10} sm={9} xs={9} sx={{ display: "inline-flex", flexDirection: "column", textAlign: "start" }} onClick={()=>navigate("/home/courseview", { state: { data: props.data } })} >

                    <p><b>{props.data.courseCode}</b></p>
                    <p style={{fontStyle:"italic"}}>Course Title: {props.data.courseTitle}</p>
                    <p style={{fontStyle:"italic"}}>Department: {props.data.department}</p>
                    <p style={{fontStyle:"italic"}}>Course Content: {props.data.courseContent}</p>
                    <p style={{fontStyle:"italic"}}>Class Type: {props.data.classType}</p>

                    {/* <Box> */}
                        <span style={{padding:"10px", textTransform:"uppercase",marginTop:"10px"}}><b>Number Of Students: {props.data.joined.length}</b></span>
                    {/* </Box> */}

                </Grid>

                <Grid item lg={2} md={2} sm={3} xs={9} sx={{ alignItems: "center", fontSize: "24px" }}>

                   { (user!=="student")?(<IconButton
                        size="large"
                        aria-label="show more"
                        aria-haspopup="true"
                        onClick={handleClick}>
                            
                        <Tooltip title="Options" placement="top-start">
                            <IoMdOptions />
                        </Tooltip>
                        
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

                <MenuItem onClick={()=>callbacks(props.data._id)}>
                    Delete
                </MenuItem>

            </Menu>

        </Card>

    )
}