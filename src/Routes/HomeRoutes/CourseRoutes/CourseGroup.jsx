import { Box } from "@mui/material";
import { CourseCardHeader } from "../../../Components/CourseCardHeader";
import {useLocation} from 'react-router-dom';
// import { HomeFeed } from "../../../Layouts/HomeFeed";
// import { CourseNav } from "./CourseNav/CourseNav";
import { CourseFeed } from "../../../Layouts/coursefeed";
import { LectureFeed } from "../../../Layouts/lecturefeed";
import { useState } from "react";

export const CourseGroup = ()=>{

    const location = useLocation();

    const [tab, setTab] = useState(1);

    const change = (index)=>{
        setTab(index);
    }

    return(


        <div style={{width:"100%"}}>

            <CourseCardHeader data={location.state.data} callback={change}  />

            {(tab==1)?<CourseFeed code={location.state.data.courseCode} course={true} />:<LectureFeed code={location.state.data.courseCode} />}

        </div>

    );

}