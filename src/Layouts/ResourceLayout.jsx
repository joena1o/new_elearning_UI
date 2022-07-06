import {Grid,Box, CircularProgress} from '@mui/material';
import { Feed } from '../Components/Feed';
import { ResourceFeed } from '../Components/ResourceFeed';
import {useState, useEffec} from 'react';
import axios from 'axios';
import { conn } from '../util/conn';
import { useEffect } from 'react';

export const ResourceLayout = (props)=>{


    useEffect(()=>{
        // console.log(token);
        getResource();

        // console.log(resource[0]['title']);
    });


    const [resource, setResource] = useState([]);

    const [isloading, setStatus] = useState(true);


    const token = window.localStorage.getItem('token');


    const config = {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
    };


    const getResource = async (event) =>{

        await axios.get(conn+"/api/resources", config).then((value)=>{

            setResource((value.data));

            //if(value.statusText==="ok"){
                setStatus(false);
           // }

            // console.log(value.data);

        })

    }

    return(

        <div className="resource-layout" style={{padding:"20px", width:"100%"}}>


                <Grid container direction='row' sx={{flexGrow:"1", width:"100%"}}>




                    {
                        (isloading)?(
                            <Box sx={{width:"100%", height:"59vh", display:"inline-flex", alignItems:"center", justifyContent:"center"}}>
                    <CircularProgress color="warning" />
                    </Box>
                        ):(

                        
                                resource.map((value)=>(
        
                                    <Grid item lg={4} md={6} sm={6} xs={12} sx={{width:"90%", marginBottom:"10px"}}>
        
                                    <ResourceFeed data={value} />
             
                                 </Grid>
             
        
                                ))
                            

                        )


                    }


                
                    
                
                   


                   


                </Grid>


        </div>

    );

}