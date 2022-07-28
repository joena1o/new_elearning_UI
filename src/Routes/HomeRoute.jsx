import { useEffect } from "react";
import HomeNavbar from "../Components/HomeNavbar";
import { HomeLayout } from "../Layouts/HomeLayout";
import { useNavigate } from "react-router";
import {BsArrowUpSquare} from "react-icons/bs";

export default function HomeRoute(){


    const navigate = useNavigate();

    useEffect(()=>{
        if(window.localStorage.getItem("token") === "" || window.localStorage.getItem("token") == null ){
                navigate("/login");}
    });


    return(

        <div className="Home-route">
            
            <HomeNavbar />

            <HomeLayout />

            <div className="fab" style={{position:"fixed", background:"white", boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", fontSize:"40px", color:"#CE7248", zIndex:"3", bottom:"20px", borderRadius:"100px", right:"28vw", width:"70px", height:"70px"}}>

                <BsArrowUpSquare />

            </div>

            
        </div>

    );

}