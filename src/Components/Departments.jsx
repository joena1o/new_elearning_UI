import {FcNext, FcPrevious} from 'react-icons/fc';
import { Chip, Avatar } from "@mui/material";
import { margin } from '@mui/system';

export const Departments = () => {

    const style = {
        padding:"0px 5x",
        margin: '0px 5px',
        // backgroundColor:"antiquewhite",
        backgroundColor: '#FCE266',

        color:"black"
    }


    const dept = [
        "AGR", "CVE", "EEE", "CTE", "LTS", "IMT", "MGT","CSC","BCH", "BTH","CHE","BCT","AGR", "CVE", "EEE", "CTE", "LTS", "IMT", "MGT","CSC","BCH", "BTH","CHE","BCT"
    ]
    

    const prev = ()=>{
        const dept = document.querySelector(".department-inner");
        dept.style.transition = "0.1s ease-in-out";
        dept.scrollLeft -= 300; 
    }
    const next = ()=>{
        const dept = document.querySelector(".department-inner");
        dept.style.transition = "0.1s ease-in-out";
        dept.scrollLeft += 300; 
    }



    return (

        <div className='department'>


                  <Avatar onClick={prev} variant='outlined' sx={{backgroundColor:"white", zIndex:"1"}} ><FcPrevious/></Avatar>

      

        <div className="department-inner">
            {
                dept.map((val)=> 
                    <Chip style={style}  label={val.toString()} />
                )
            }
            

        </div>


        <Avatar color="warning"   onClick={next}  sx={{backgroundColor:"white"}}><FcNext sx={{color:"orange"}} /></Avatar>

        </div>

    );

}