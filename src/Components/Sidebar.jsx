import { Box } from '@mui/material';
import { RiHomeLine } from 'react-icons/ri';
import { GiBookshelf, GiArchiveResearch } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SiGoogleclassroom } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

import {SiPytest} from 'react-icons/si';

import { GiClassicalKnowledge } from 'react-icons/gi';
export const SideBar = () => {


    const user = window.localStorage.getItem("user_type");


    const style1 = {
        height: "90vh", backgroundColor: "white", borderRight: '1px solid #d1d1d1',
        transition: "0.5s ease-in-out", zIndex: "2", color: "grey"
    }



    function Pop() {

        const sideNavbar = document.querySelector(".side-navbar");
        const sidenav = document.querySelector(".side-navs");
        const label = document.querySelectorAll(".side-navs div span");

        sidenav.style.alignItems = 'flex-start';


        sideNavbar.style.position = 'fixed';
        sideNavbar.style.zIndex = '2';
        sideNavbar.style.padding = '0px 70px';

        label.forEach((lab) => {

            lab.style.display = 'block';

        });

    }

    function Close() {

        const sideNavbar = document.querySelector(".side-navbar");
        const sidenav = document.querySelector(".side-navs");
        const label = document.querySelectorAll(".side-navs div span");

        sideNavbar.style.position = 'relative';
        sidenav.style.alignItems = 'center';
        sideNavbar.style.padding = '0px';



        label.forEach((lab) => {

            lab.style.display = 'none';

        });

    }


    const navigate = useNavigate();

    const [index, setIndex] = useState(0);

    const navChange = (rout,ind)=>{

            navigate(rout)

            setIndex(ind);



    }



    return (

        <Box sx={style1} className="side-navbar" onMouseEnter={() => Pop()} onMouseLeave={Close} >


            <Box sx={{
                justifyContent: 'space-evenly', height: "100%", alignItems: "flex-start", fontSize: {
                    lg: "32px"
                    , md: "32px", sm: "25px", xs: "25px"
                }
            }}>

                <div className='side-navs'>

                    <div style={(index===0)?{color:"#CE7248"}:{color:"black"}} onClick={() => navChange("/home", 0)}>
                        <RiHomeLine /> <span>Home</span>
                    </div>

                    <div style={(index===1)?{color:"#CE7248"}:{color:"black"}} onClick={() => navChange("resource", 1)}>
                        <GiBookshelf /> <span>Resources</span>
                    </div>

                    <Box style={(index===2)?{color:"#CE7248"}:{color:"black"}} sx={{ display: { xs: "block", lg: "none", md: "none" } }} onClick={() => navChange("course", 2)}>
                        <GiClassicalKnowledge /> <span>Courses</span>
                    </Box>

                    <div style={(index===3)?{color:"#CE7248"}:{color:"black"}} onClick={() => navChange("lecture", 3)}>
                        <SiGoogleclassroom /> <span>Lecture</span>
                    </div>


                    {(user !== "student") ? (
                        <Box style={(index===4)?{color:"#CE7248"}:{color:"black"}} onClick={() => navChange("/whiteboard", 4)}>
                            <AiOutlineFundProjectionScreen /> <span>White Board</span>
                        </Box>) : (<></>)}

                    <Box style={(index===5)?{color:"#CE7248"}:{color:"black"}} onClick={() => (user!=="student")?navChange("quiz", 5):navChange("/assessment", 5)}>
                        <SiPytest /> <span>Assessment</span>
                    </Box>

                    <Box style={(index===6)?{color:"#CE7248"}:{color:"black"}} onClick={() => navChange("quiz", 6)}>
                        <GiArchiveResearch /> <span>Research</span>
                    </Box>





                </div>

            </Box>


        </Box>

    );

}