import {Avatar} from "@mui/material";

export const CoverPhoto = ()=>{

    return(


        <div className="course-cover">

        <div className="cover_photo" />


        <div>
        <Avatar sx={{margin:"-50px 0px 0px 20px", width: { xl: 100, lg: 100, md:80, sm: 90, xs: 100 }, height: { xl: 100, lg: 100, md:80, sm: 90, xs: 100 }, backgroundColor: "antiquewhite", color: "black", fontWeight: "bold" }}>H</Avatar>
        </div>

        </div>


    );

}