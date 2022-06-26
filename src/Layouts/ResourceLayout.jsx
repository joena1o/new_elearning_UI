import {Grid,Box} from '@mui/material';
import { Feed } from '../Components/Feed';
import { ResourceFeed } from '../Components/ResourceFeed';

export const ResourceLayout = ()=>{

    return(

        <div className="resource-layout" style={{padding:"20px", width:"100%"}}>


                <Grid container direction='row' spacing={2} sx={{flexGrew:"1", width:"100%"}}>


                    <Grid item lg={4} md={6} sm={6} xs={12} sx={{width:"100%"}}>

                       <ResourceFeed />

                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xs={12}>

                    <ResourceFeed />

                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xs={12}>

                    <ResourceFeed />

                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xs={12} sx={{width:"100%"}}>

                       <ResourceFeed />

                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xs={12}>

                    <ResourceFeed />

                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xs={12}>

                    <ResourceFeed />

                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xs={12} sx={{width:"100%"}}>

                       <ResourceFeed />

                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xs={12}>

                    <ResourceFeed />

                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xs={12}>

                    <ResourceFeed />

                    </Grid>


                </Grid>


        </div>

    );

}