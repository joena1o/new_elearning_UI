import {RiHome5Line} from 'react-icons/ri';
import {TbBooks} from 'react-icons/tb';
import {BsQuestionSquare} from 'react-icons/bs';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {SiGoogleclassroom} from 'react-icons/si';
import { useNavigate, Link } from 'react-router-dom';
import {BsJournalBookmark} from 'react-icons/bs';

export default function SideBar(){



    

    const pop = ()=>{

       var sidebar = document.querySelector(".side-bar");

       sidebar.style.width = "19vw";
    
       var sidenavs = document.querySelectorAll(".side-bar-inner .nav");

        sidenavs.forEach((sidenav)=>{
            sidenav.style.justifyContent = 'unset';
        });

        var label = document.querySelectorAll('.side-bar-inner .nav .label');

        label.forEach((lab)=>{

            lab.style.display = 'unset';

        });

    }

    const close = ()=>{

        var sidebar = document.querySelector(".side-bar");
 
        sidebar.style.width = "7vw";


        var sidenavs = document.querySelectorAll(".side-bar-inner .nav");

        sidenavs.forEach((sidenav)=>{
            sidenav.style.justifyContent = 'center';
        });

        var label = document.querySelectorAll('.side-bar-inner .nav .label');

        label.forEach((lab)=>{

            lab.style.display = 'none';

        });

        
 
     }


    const spanstyle = {
        fontSize:"18px",
        paddingLeft:"12px",
        display: 'none',
        color: 'black',
        textTransform: 'uppercase',
        
    }

    const spanstyle2 = {

        width:"7vw",
        backgroundColor:"red",

    }

    const navigate = useNavigate();

    return(

        

        <div className="side-bar" onMouseEnter={()=>pop()} onMouseLeave={()=>close()}>

            <div className="side-bar-inner">

               <div className='nav' onClick={()=>navigate('/')}><span><RiHome5Line /></span> <span className='label' style={spanstyle}>Home</span></div>

                <div className='nav' onClick={()=>navigate('/resource')}><span><TbBooks /></span> <span className='label' style={spanstyle}>Resources</span></div>

                <div className='nav'><span><BsJournalBookmark /></span> <span className='label' style={spanstyle}>Journals</span></div>


                <div className='nav' onClick={()=>navigate('./lecture')}><span><BsQuestionSquare /></span> <span className='label' style={spanstyle}>Past Q/A</span></div>

                <div className='nav'><span><AiOutlineFundProjectionScreen /></span> <span className='label' style={spanstyle}>Projects</span></div>

                <div className='nav' onClick={()=>navigate('/lecture')}><span><SiGoogleclassroom /></span> <span className='label' style={spanstyle}>Lecture</span></div>

            </div>

        </div>

    );


}