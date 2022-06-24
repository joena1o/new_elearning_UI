import {Box} from '@mui/material';
import { Departments } from '../Components/Departments';
import { HomeFeed } from './HomeFeed';
import { Route, Routes} from 'react-router-dom';
import {LectureRoute} from '../Routes/HomeRoutes/LectureRoute';
import { ResourceRoute } from '../Routes/HomeRoutes/ResourceRoute';
import { PastQA } from '../Routes/HomeRoutes/PastQA';
import { BookView } from '../Routes/HomeRoutes/bookView';

export const MainLayout = ()=>{

    return(

        <div className="main-layout" style={{height: "90vh", overflowY:"scroll"}}>


            <Box  sx={{height: "90vh", borderRight:'1px solid #d1d1d1' }}>



            <Routes>

            <Route exact path='/' element={<>

                <Departments />
                <HomeFeed />


            </>}>
            
            </Route>

            <Route path='lecture'  element={<LectureRoute />} />
 

            <Route path='resource' element={<ResourceRoute />} />

            <Route path='past' element={<PastQA />} />

            <Route path='bookview' element={<BookView />} />



          

            </Routes>




               
                    

            </Box>

            

        </div>

    );

}