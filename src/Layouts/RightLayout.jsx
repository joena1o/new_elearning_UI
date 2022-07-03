
import {Box} from '@mui/material';
import { ResourceRightCard } from '../Components/ResourceRightCard';

export const RightLayout = () => {

    return (


        <div class='right-layout' style={{height: "90vh", overflowY:"scroll"}}>

            

            <Box sx={{borderRight: '1px solid #d1d1d1', height:"90vh"}}>


        
                <div className='header'>

                    <b>Join Lectures</b>

                </div>


                <div>
                    <ResourceRightCard />
                    <ResourceRightCard />
                    <ResourceRightCard />
                    <ResourceRightCard />
                    <ResourceRightCard />
                    <ResourceRightCard />
                    <ResourceRightCard />
                    <ResourceRightCard />

                </div>

                

        

                
                

            </Box>



        </div>


    );

}