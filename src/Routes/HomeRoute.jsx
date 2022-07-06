import { useEffect } from "react";
import HomeNavbar from "../Components/HomeNavbar";
import { HomeLayout } from "../Layouts/HomeLayout";
import { useNavigate } from "react-router";

export default function HomeRoute(){


    const navigate = useNavigate();

    useEffect(()=>{

        if(window.localStorage.getItem("token") === "" || window.localStorage.getItem("token") == null ){

                navigate("/login");

        }

    });


    return(

        <div className="Home-route">


            <HomeNavbar />

            <HomeLayout />

            
        </div>

    );

}