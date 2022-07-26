import { Box } from '@mui/material';
import {useNavigate } from 'react-router-dom';
import { AiOutlineAudio } from 'react-icons/ai'
import {useState} from 'react';
import {BsSearch,BsPen,BsEraser, BsCameraVideo, BsCameraVideoOff} from 'react-icons/bs';
import {MdOutlineClose} from 'react-icons/md';



export const WhiteBoardSidebar = ()=>{


    const navigate = useNavigate();

    const [video, setVideo] = useState("none");

    const style1 = {
        height: "90vh", backgroundColor: "white", borderRight: '1px solid #d1d1d1',
        transition: "0.5s ease-in-out", zIndex: "2", color: "grey"
    }

    const change = ()=>{

        if(video==="none")
        setVideo("unset")
        else
        setVideo("none");

    }

    const stylehover = {
        color:"black",
        "&:hover":{
            color: "orange"
        }
    }

    const user = window.localStorage.getItem("user_type");

    return(


        <Box sx={style1} className="side-navbar">

        <Box sx={{
            justifyContent: 'space-evenly', height: "100%", alignItems: "flex-start", fontSize: {
                lg: "32px"
                , md: "32px", sm: "25px", xs: "25px"

            },
            margin:"20px",
            borderRadius:"20px",
            border:"1px solid black"
        }}>

            <div className='side-navs'>

                <div style={stylehover}>
                    <BsSearch /> 
                </div>

                <div >
                    <BsPen /> 
                </div>

                <Box sx={{ display: { xs: "block", lg: "none", md: "none" } }}>
                    <BsEraser /> 
                    </Box>

                <div >
                    <AiOutlineAudio /> 
                </div>


                {(user !== "student") ? (
                    <Box onClick={()=>change()}>
                        {(video!=="none")?(<BsCameraVideo />):(<BsCameraVideoOff />)} 
                    </Box>) : (<></>)}

                <Box onClick={()=>navigate("/home")}>
                    <MdOutlineClose /> 
                </Box>

               





            </div>

        </Box>


        {(video==="unset")?(<Box sx={{width:"200px",height:"120px", background:"black", position:"fixed", bottom:"30px",right:"10vw", display:{video}}}>


         </Box>):<></>}


    </Box>


    );

}