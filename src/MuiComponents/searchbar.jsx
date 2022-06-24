import { Box } from "@mui/material";

export const SearchBar = ()=>{

    return(

        <div style={{padding:"10px 0px", width:'40%'}}>

            <Box sx={{ width:'100%',display: {xs:'none',sm:'flex'}}}>

                <input  type='text' placeholder="Search Here" style={{padding:"10px", width:"100%", borderRadius:"5px",outlineWidth:"1px",border:"1px solid #d1d1d1",
            outlineColor:"grey"
            }} />

            </Box>

        </div>

    );

}