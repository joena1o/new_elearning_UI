import { Card, Grid, Box, Modal, Typography, Button } from '@mui/material';
import { CgOptions } from 'react-icons/cg';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const CourseCardHeader = () => {

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

        <div class="course-card">

            <Card variant="outlined">

                <Grid container sx={{ width: "100%", flexGrow: "1", padding: "60px 30px", alignItems: "center" }}>


                    <Grid item lg={10} md={10} sm={9} xs={9} sx={{ display: "inline-flex", flexDirection: "column", textAlign: "start" }} onClick={() => navigate("/home/courseview")} >

                            <p>EEE202</p>
                            <p>Course Title:</p>
                            <p>Department:</p>
                            <p>Time Created:</p>
                            <p>Class Type: Public</p>

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


        </div>

    );

}