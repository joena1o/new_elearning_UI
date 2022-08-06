import {FcNext, FcPrevious} from 'react-icons/fc';
import { Chip, Avatar } from "@mui/material";
import { dept } from '../Data/Departments';
import { GiBoltDrop } from 'react-icons/gi';
import { useEffect } from 'react';


export const Departments = () => {


    useEffect(()=>{

        // if(!dept.includes("All"))
        // dept.unshift("All");

    });

    const style = {
        padding:"0px 5x",
        margin: '0px 5px',
        backgroundColor: '#d1d1d1',
        fontWeight: "normal",
        fontSize: "15px",
        color:"black"
    }
    

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