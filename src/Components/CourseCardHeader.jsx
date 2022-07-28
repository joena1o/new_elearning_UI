import { Card, Grid, Box, Modal, Typography, Button, Avatar } from '@mui/material';
import { CgOptions } from 'react-icons/cg';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { useNavigate, useLocation } from 'react-router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CoverPhoto } from './CourseCoverPhoto';

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

            <CoverPhoto />

            {/* <Card variant="outlined"> */}

            <Grid container sx={{ width: "100%", flexGrow: "1", padding: "60px 30px", alignItems: "center" }}>



                <Grid item lg={2} md={2} sm={3} xs={9} sx={{ alignItems: "center", fontSize: "24px" }}>



                    {/* <Avatar sx={{ width: { xl: 100, lg: 90, md:70, sm: 90, xs: 100 }, height: { xl: 100, lg: 90, md:70, sm: 90, xs: 100 }, backgroundColor: "antiquewhite", color: "black", fontWeight: "bold" }}>H</Avatar> */}

                    {/* <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleClick}>

                            <CgOptions />

                        </IconButton> */}

                </Grid>


                {/* <Grid item md={1}>

                    </Grid> */}




                <Grid  container lg={10} md={9} sm={9} xs={9} sx={{ display: "inline-flex", marginTop: { lg: "-65px", md: "-50px", sm: "-75px" }, flexDirection: "column", textAlign: "start" }} >

                    <Grid item lg={10}>

                        <p><b>{props.data.courseCode}</b></p>
                        <p style={{ fontStyle: "italic" }}>Course Title: {props.data.courseTitle}</p>
                        <p style={{ fontStyle: "italic" }}>Department: {props.data.department}</p>
                        <p style={{ fontStyle: "italic" }}>Time Created: {props.data.createdAt}</p>
                        <p style={{ fontStyle: "italic" }}>Class Type: {props.data.classtype}</p>

                        <Box>
                            <p style={{ color: "grey", textTransform: "uppercase", marginTop: "10px" }}><b>Number Of Students: 0</b></p>
                        </Box>


                        <div className='filter' style={{ marginTop: "20px" }}>

                            <Button variant="outlined" color="warning" sx={{ marginRight: "5px" }}>Resources</Button>
                            <Button variant="outlined" color="warning" sx={{ marginRight: "5px" }}>Lecture</Button>
                            <Button variant="outlined" color="warning" sx={{ marginRight: "5px" }}>Announcement</Button>

                        </div>

                    </Grid>


                    {/* <Grid item lg={1}>


                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleClick}>

                            <CgOptions />

                        </IconButton>



                    </Grid> */}

                </Grid>


            </Grid>

            {/* </Card> */}

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
                    ) : (

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





            <hr></hr>


        </div>

    );

}