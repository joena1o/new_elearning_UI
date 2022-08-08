import { Feed } from "../Components/Feed";
import { useNavigate } from "react-router";
import {BsQuestion} from 'react-icons/bs';
import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import {TimeLineComponent} from '../MuiComponents/TimeLine';
import axios from "axios";
import { conn } from "../util/conn";
import {useState} from 'react';
import {CircularProgress} from '@mui/material';
import { Loader } from "../Components/Loader";
import emptyjson from '../Assets/629-empty-box.json';
import Lottie from "lottie-react";
import { CourseGroupFeed } from "../Components/CourseGroupFeed";
// import { Button } from "react-bootstrap";


export const CourseFeed = (props)=>{



  const config = {
    headers: {
        'Content-type': 'application/json',
        // 'Authorization': 'Bearer ' + JSON.parse(token)
      }
  };


  useEffect(()=>{

    FetchFeed();

    
  });


  

  const [feeds, setFeeds] = useState([]);
  const [isloading, setStatus] = useState(true);


  const [empty, setEmpty] = useState(false);


  const retry = ()=>{

    setStatus(true);
    FetchFeed();

  }

  const FetchFeed = async ()=>{
    await axios.get(conn+"/api/v1/material/"+props.code).then((value)=>{
      
      if(value.data.length > 0){
        setFeeds(value.data.reverse());
        setStatus(false);  
        setEmpty(false);
      }else{
        setStatus(false);
      }

    }).catch((error)=>{
      setStatus(false);
      setEmpty(true);
    });
  }


    return(
        <div className="home-feed" style={{width:"100%", padding:"20px 0px"}}>
          {
            (isloading)?(
             <Loader />
            ):(
              (empty===false)?
              feeds.map((values, key)=>

                <span style={{display:"inline-flex", width:"100%", justifyContent:"center", padding:"10px"}}>
                <TimeLineComponent index={key} len={feeds.length} />       
                <CourseGroupFeed data={values} key={key} course={props.course}/>
                </span>

              ):<div style={{marginTop:"20vh"}}>
                <Lottie animationData={emptyjson} />
                <p>Unable to fetch resources</p>
                <p><Button variant="outlined" color="warning" onClick={retry}>Try Again</Button></p>
                </div>
            )
          }
        </div>
    );

}