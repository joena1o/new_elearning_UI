import { Feed } from "../Components/Feed";
import {Button } from "@mui/material";
import { useEffect } from "react";
import {TimeLineComponent} from '../MuiComponents/TimeLine';
import axios from "axios";
import { conn } from "../util/conn";
import { Departments } from '../Components/Departments';
import {useState} from 'react';
import { Loader } from "../Components/Loader";
import emptyjson from '../Assets/629-empty-box.json';
import Lottie from "lottie-react";


export const HomeFeed = (props)=>{


  const [filter, setFilter] = useState();

  useEffect(()=>{

    FetchFeed();

    
  }, [filter]);


  const [feeds, setFeeds] = useState([]);
  const [isloading, setStatus] = useState(true);

  const [rou, setRou] = useState("/api/v1/public");
  
  const [empty, setEmpty] = useState(false);


  const filterSearch = (value)=>{
      setFilter(value);
  }


  const retry = ()=>{

    setStatus(true);
    FetchFeed();

  }

  const FetchFeed = async ()=>{
    (filter===null)?setRou("/api/v1/public"):setRou("/api/v1/public/"+filter);
    await axios.get(conn+rou).then((value)=>{
      if(value.data.length > 0){
        setFeeds(value.data.reverse());
        setStatus(false);  
        setEmpty(false);
      }
    }).catch((error)=>{
      setStatus(false);
      setEmpty(true);
    });
  }


    return(
      <>
      <Departments filter={filterSearch} />
        
        <div className="home-cont">
          <div className="home-feed" style={{width:"100%", padding:"20px 0px"}}>
          
          {
            (isloading)?(
             <Loader />
            ):(
              (empty===false)?
              feeds.map((values, key)=>

                <span style={{display:"inline-flex", width:"100%", justifyContent:"center", padding:"10px"}}>
                <TimeLineComponent index={key} len={feeds.length} />       
        
                <Feed data={values} key={key} course={props.course}/>
        
                </span>
              ):<div style={{marginTop:"20vh"}}>
                <Lottie animationData={emptyjson} />
                <p>Unable to fetch resources</p>
                <p><Button variant="outlined" color="warning" onClick={retry}>Try Again</Button></p>
                </div>
            )
          }
        </div></div>
        </>
    );

}