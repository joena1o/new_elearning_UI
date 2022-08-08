
import {Box} from '@mui/material';
import { ResourceRightCard } from '../Components/ResourceRightCard';
import { Feed } from '../Components/Feed';
import Lottie from 'lottie-react';
import { ResourceCard } from '../Components/ResourceCard';
import success from "../Assets/96295-success-popup.json";

export const ResourceRightLayout = () => {

    return (


        <div class='right-layout' style={{height: "90vh", overflowY:"scroll"}}>

            

            <Box sx={{borderRight: '1px solid #d1d1d1', height:"90vh"}}>


        
                <div className='header'>

                    <b>See related resources</b>
                    {/* <hr></hr> */}

                </div>


                <div>
                    
                    <ResourceCard />
                    <ResourceCard />

                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />
                    <ResourceCard />

                </div>

                

        

                
                

            </Box>



        </div>


    );

}