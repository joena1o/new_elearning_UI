
import {Box} from '@mui/material';
import { LecturerCard } from '../Components/LecturerCard';

export const RightLayout = () => {

    return (


        <div class='right-layout' style={{height: "90vh", overflowY:"scroll"}}>

            

            <Box sx={{borderRight: '1px solid #d1d1d1', height:"90vh"}}>


        
                <div className='header'>

                    <b>Get to know your lecturers</b>

                </div>


                <div>
                    <LecturerCard />
                    <LecturerCard />
                    <LecturerCard />
                </div>

                <div>
                    <LecturerCard />
                    <LecturerCard />
                    <LecturerCard />
                </div>

                

        

                
                

            </Box>



        </div>


    );

}