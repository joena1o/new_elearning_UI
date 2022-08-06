import { Box } from "@mui/material";
import { CourseCardHeader } from "../../../Components/CourseCardHeader";
import {useLocation} from 'react-router-dom';
import { HomeFeed } from "../../../Layouts/HomeFeed";
import { CourseNav } from "./CourseNav/CourseNav";

export const CourseGroup = ()=>{

    const location = useLocation();

    return(


        <div style={{width:"100%"}}>

            <CourseCardHeader data={location.state.data} />

            <HomeFeed course={true} />

        </div>

    );

}