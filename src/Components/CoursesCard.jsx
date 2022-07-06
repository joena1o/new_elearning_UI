import { Card, Grid, Box } from '@mui/material';
import { CgOptions } from 'react-icons/cg';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const CourseCard = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (

        <Card variant='outlined' p={10}>

            <Grid container sx={{ width: "100%", flexGrow: "1", padding: "20px", alignItems: "center" }}>


                <Grid item lg={10} md={10} sm={9} xs={9} sx={{ display: "inline-flex", flexDirection: "column", textAlign: "start" }}>

                    <p>EEE202</p>
                    <p>Course Title:</p>
                    <p>Department:</p>
                    <p>Time Created:</p>
                    <p>Class Type: Public</p>

                    <Box>
                        <p style={{color:"grey",textTransform:"uppercase",marginTop:"10px"}}><b>Number Of Students: 0</b></p>
                    </Box>

                </Grid>

                <Grid item lg={2} md={2} sm={3} xs={9} sx={{ alignItems: "center", fontSize: "24px" }}>

                    <IconButton
                        size="large"
                        aria-label="show more"

                        aria-haspopup="true"
                        // onMouseEnter={handleClick}
                        // onMouseLeave={handleClose}
                        onClick={handleClick}

                       
                    >
                        
                        <CgOptions />

                    </IconButton>

                   

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

                <MenuItem onClick={handleClose}>
                    Edit
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    Delete
                </MenuItem>

            </Menu>

        </Card>

    )
}