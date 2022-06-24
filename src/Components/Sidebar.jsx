import { Box } from '@mui/material';
import { RiHomeLine } from 'react-icons/ri';
import { GiBookshelf } from 'react-icons/gi';
import { BsJournalArrowDown } from 'react-icons/bs';
import { GoQuestion } from 'react-icons/go';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SiGoogleclassroom } from 'react-icons/si';
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineUsergroupAdd} from 'react-icons/ai'

export const SideBar = () => {


    const style1 = {
        height: "90vh", backgroundColor: "white", borderRight: '1px solid #d1d1d1',
        transition: "0.5s ease-in-out", zIndex:"2"
    }


    const sideNavbar = document.querySelector(".side-navbar");
    const sidenav = document.querySelector(".side-navs");
    const label = document.querySelectorAll(".side-navs div span");


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


            <Box sx={{ justifyContent: 'space-evenly', height: "100%" }}>

                <div className='side-navs'>

                    <div onClick={()=>navigate("/home")}>
                        <RiHomeLine /> <span>Home</span>
                    </div>

                    <div onClick={()=>navigate("resource")}>
                        <GiBookshelf /> <span>Resources</span>
                    </div>

                    <div>
                        <BsJournalArrowDown /> <span>Journal</span>
                    </div>


                    <div onClick={()=>navigate("past")}>
                        <GoQuestion /> <span>Past Q/A</span>
                    </div>

                    <Box sx={{display:{xs:"block",lg:"none",md:"none"}}}>
                        <AiOutlineUsergroupAdd /> <span>Lecturers</span>
                    </Box>

                    <Box>
                        <AiOutlineFundProjectionScreen /> <span>Projects</span>
                    </Box>

                    <div onClick={()=>navigate("lecture")}>
                        <SiGoogleclassroom /> <span>Lecture</span>
                    </div>

                    

                </div>

            </Box>


        </Box>

    );

}