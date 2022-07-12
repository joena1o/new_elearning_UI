import { Card, Grid, Box, Modal, Typography, Button } from '@mui/material';
import { CgOptions } from 'react-icons/cg';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { useNavigate, useLocation } from 'react-router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const CourseCardHeader = (props) => {

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

    const location = useLocation();

    return (

        <div class="course-card">

            <Card variant="outlined">

                <Grid container sx={{ width: "100%", flexGrow: "1", padding: "60px 30px", alignItems: "center" }}>


                    <Grid item lg={10} md={10} sm={9} xs={9} sx={{ display: "inline-flex", flexDirection: "column", textAlign: "start" }} >

                        <p><b>{props.data.courseCode}</b></p>
                        <p style={{ fontStyle: "italic" }}>Course Title: {props.data.courseTitle}</p>
                        <p style={{ fontStyle: "italic" }}>Department: {props.data.department}</p>
                        <p style={{ fontStyle: "italic" }}>Time Created: {props.data.createdAt}</p>
                        <p style={{ fontStyle: "italic" }}>Class Type: {props.data.classtype}</p>

                        <Box>
                            <p style={{ color: "grey", textTransform: "uppercase", marginTop: "10px" }}><b>Number Of Students: 0</b></p>
                        </Box>

                    </Grid>



                    <Grid item lg={2} md={2} sm={3} xs={9} sx={{ alignItems: "center", fontSize: "24px" }}>

                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleClick}>

                            <CgOptions />

                        </IconButton>

                    </Grid>


                </Grid>

            </Card>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{ padding: "30px 10px" }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {

                    (user === "student") ? (
                        <>
                            <MenuItem >
                                Leave Class
                            </MenuItem>

                            
                        </>
                    ):(

                        <>
                            <MenuItem >
                                Edit
                            </MenuItem>

                            <MenuItem >
                                Delete
                            </MenuItem>
                        </>

                    )

                }



            </Menu>


        </div>

    );

}