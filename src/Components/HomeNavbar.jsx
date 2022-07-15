import { AppBar, Box, Toolbar, IconButton, Badge, Grid, Avatar, Divider } from "@mui/material";
import { SearchBar } from "../MuiComponents/searchbar";
import { FaRegUserCircle } from 'react-icons/fa'
import { RiNotification3Line } from 'react-icons/ri';
import { BiCloudUpload } from 'react-icons/bi';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from "react-router";

export default function HomeNavbar() {


    const navigate = useNavigate();


    const logout  = ()=>{

        window.localStorage.setItem("token", "");
        navigate("/login");

    }

    const style = {
        color: "#FCE266",
        justifyContent: "space-evenly",
        letterSpacing:"2px",
        padding: '10px',
        alignItems: 'center'
    }

    const appBar = {
        backgroundColor: '#CE7248',
        //backgroundColor:"white",
        boxShadow: 'none',
        justifyContent: 'space-evenly',
        height: "10vh",
        borderBottom: "1px solid #d1d1d1"
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <Box sx={{ flewGrow: 1 }} >

            <AppBar position="sticky" sx={appBar}>

                <Toolbar sx={style}>

                    <b>MAUCES</b>



                    <SearchBar />






                    <Box sx={{ display: "flex" }}>


                        <Box sx={{ display: { xs: 'block', sm: "none", md: 'none', lg: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"

                                aria-haspopup="true"

                                color="inherit"
                            >
                                <BsSearch />
                            </IconButton>
                        </Box>



                        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"

                                aria-haspopup="true"
                                onClick={handleClick}

                                color="inherit"
                            >
                                <FaRegUserCircle />
                            </IconButton>
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
                                <Grid container sx={{width:"100%", boxShadow:"none",flexGrow:"1",width:"100%", padding:"20px 0px"}} spacing={7} p={1}>

                                    <Grid item lg={2}>

                                        <Avatar>H</Avatar>

                                    </Grid>

                                    {/* <Grid item lg={1} sx={{width:"100%"}}>

                                    </Grid> */}

                                    <Grid item lg={8} p={2}>

                                        <p><b>{window.localStorage.getItem("fullname")}</b></p>
                                        <p><b>{window.localStorage.getItem("reg")}</b></p>
                                        <small>{window.localStorage.getItem("dept")}</small><br></br>
                                        <p><small>{window.localStorage.getItem("user_type").toUpperCase()}</small></p>
                                       


                                    </Grid>

                                </Grid>
                            </MenuItem>
                            <MenuItem sx={{width:"100%"}} onClick={handleClose}><Button sx={{width:"100%"}} onClick={()=>navigate("profile")} variant="outlined" color="warning">Profile</Button></MenuItem>
                            <Divider />

                            <MenuItem onClick={handleClose} p={5}>
                            <b>Account</b>
                            </MenuItem>

                            <MenuItem onClick={handleClose} p={5}>
                            <small></small>Manage
                            </MenuItem>

                            <MenuItem onClick={()=>logout()} p={5}>
                                 Logout
                            </MenuItem>
                        </Menu>

                        {/* <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"

                                aria-haspopup="true"

                                color="inherit"
                            >
                                <BiCloudUpload />
                            </IconButton>
                        </Box> */}


                        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                
                                aria-haspopup="true"

                                color="inherit"
                            >

                                <Badge badgeContent={4} color="error">
                                    <RiNotification3Line
                                    />
                                </Badge>

                            </IconButton>
                        </Box>


                    </Box>







                </Toolbar>

            </AppBar>

        </Box>

    );

}