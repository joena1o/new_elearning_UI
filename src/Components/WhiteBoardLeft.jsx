import { Box } from '@mui/material';
import { RiHomeLine } from 'react-icons/ri';
import { GiBookshelf, GiArchiveResearch } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SiGoogleclassroom } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { GrTest } from 'react-icons/gr';

import { GiClassicalKnowledge } from 'react-icons/gi';
export const WhiteLeft = () => {


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



    return (

        <Box sx={style1} className="side-navbar" onMouseEnter={() => Pop()} onMouseLeave={Close} >


            <Box sx={{
                justifyContent: 'space-evenly', height: "100%", alignItems: "flex-start", fontSize: {
                    lg: "32px"
                    , md: "32px", sm: "25px", xs: "25px"
                }
            }}>

                <div className='side-navs'>

                    <div onClick={() => navigate("/home")}>
                        <RiHomeLine /> <span>Home</span>
                    </div>

                    <div onClick={() => navigate("/home/resource")}>
                        <GiBookshelf /> <span>Resources</span>
                    </div>

                    <Box sx={{ display: { xs: "block", lg: "none", md: "none" } }} onClick={() => navigate("course")}>
                        <GiClassicalKnowledge /> <span>Courses</span>
                    </Box>

                    <div onClick={() => navigate("/home/lecture")}>
                        <SiGoogleclassroom /> <span>Lecture</span>
                    </div>


                    {(user !== "student") ? (
                        <Box>
                            <AiOutlineFundProjectionScreen /> <span>White Board</span>
                        </Box>) : (<></>)}

                    <Box onClick={() => navigate("/home/quiz")}>
                        <GrTest /> <span>Assessment</span>
                    </Box>

                    <Box onClick={() => navigate("/home/quiz")}>
                        <GiArchiveResearch /> <span>Research</span>
                    </Box>





                </div>

            </Box>


        </Box>

    );

}