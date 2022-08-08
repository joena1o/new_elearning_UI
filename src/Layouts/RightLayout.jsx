
import {Box} from '@mui/material';
import { ResourceRightCard } from '../Components/ResourceRightCard';
import axios from 'axios';
import { conn } from '../util/conn';
import { useEffect, useState } from 'react';
import { Loader } from '../Components/Loader';

export const RightLayout = () => {



const reg = window.localStorage.getItem("reg");

  const [courses, setCourses] = useState([]);  
    

  const config = {
    headers: {
        'Content-type': 'application/json',
        // 'Authorization': 'Bearer ' + JSON.parse(token)
      }
  };


  const fetchCourses = async()=>{

    await axios.get(conn + "/api/v1/courses", config).then((value) => {

        if (value.status == "200" || value.status == 200) {
            setCourses(value.data);
            // setStatus(false);
            // setWait(false);
        }else{
            // setWait(false);
        }
    })

  }


    useEffect(()=>{

     fetchCourses();

    });


    return (


        <div class='right-layout' style={{height: "90vh", overflowY:"scroll"}}>

            

            <Box sx={{borderRight: '1px solid #d1d1d1', height:"90vh"}}>


        
                <div className='header'>

                    <b>Join Courses</b>

                </div>
               {
               (courses!==[])?(<div>
               
                    {
                        (courses).map((value)=>
                            
                        (value.reg !== reg)?<ResourceRightCard data={value} />:<></>
                        
                       )
                    }
                </div>):(<Loader /> )
                }

                

        

                
                

            </Box>



        </div>


    );

}