import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import { SearchBar } from "../MuiComponents/searchbar";
import { FaRegUserCircle } from 'react-icons/fa'
import {RiNotification2Line} from 'react-icons/ri';
import { BiCloudUpload } from 'react-icons/bi';
import {BsSearch} from 'react-icons/bs';

export default function HomeNavbar() {

    const style = {
        color: "black",
        justifyContent: "space-evenly",
        padding: '10px',
       
        alignItems: 'center'
    }

    const appBar = {
        backgroundColor:'white',
        boxShadow: 'none',
        justifyContent: 'space-evenly',
        height: "10vh",
        borderBottom:"1px solid #d1d1d1"
    }

    return (

        <Box sx={{ flewGrow: 1 }} >

            <AppBar position="sticky" sx={appBar}>

                <Toolbar sx={style}>

                    Navbar


                   
                    <SearchBar />
                       

                   



                    <Box sx={{ display: "flex" }}>


                    <Box sx={{ display: { xs: 'block', sm:"none", md: 'none', lg:"none" } }}>
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

                                color="inherit"
                            >
                                <FaRegUserCircle />
                            </IconButton>
                        </Box>

                        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"

                                aria-haspopup="true"

                                color="inherit"
                            >
                                <BiCloudUpload />
                            </IconButton>
                        </Box>


                        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"

                                aria-haspopup="true"

                                color="inherit"
                            >
                                <RiNotification2Line
                                 />
                            </IconButton>
                        </Box>


                    </Box>







                </Toolbar>

            </AppBar>

        </Box>

    );

}