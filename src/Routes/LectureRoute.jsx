import { LectureLayout } from "../Layouts/LectureLayout";
import HomeNavbar from "../Components/HomeNavbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const LectureRoute = () => {


    const location = useLocation();

    // useEffect(()=>{

    //     console.log(location.state.data);

    // });




    return (


        <div className="lecture-route-main">

            <HomeNavbar />

            <LectureLayout data={location.state.data} token={location.state.token} uid={location.state.uid} />

        </div>


    );

}