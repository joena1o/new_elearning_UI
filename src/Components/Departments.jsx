import {FcNext, FcPrevious} from 'react-icons/fc';
import { Chip, Avatar } from "@mui/material";
import { dept } from '../Data/Departments';
import { useEffect, useState } from 'react';
import { CgOptions } from 'react-icons/cg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export const Departments = (props) => {


    useEffect(()=>{

        // if(!dept.includes("All"))
        // dept.unshift("All");

    });

    

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const style = {
        padding:"0px 5x",
        margin: '0px 5px',
        backgroundColor: '#d1d1d1',
        fontWeight: "normal",
        fontSize: "15px",
        color:"black"
    }

    const style2 = {
        padding:"0px 5x",
        margin: '0px 5px',
        backgroundColor: 'yellow',
        fontWeight: "normal",
        fontSize: "16px",
        fontWeight: "bold",
        color:"black"
    }

    const [selected, setSelected] = useState("");
    

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


    const Tap = (val)=>{
        const dept_list = document.querySelector(".department-inner");
        setSelected(val);
        dept_list.scrollLeft = 0;
       
        dept.slice(dept.indexOf(val), dept.indexOf(val)+1);
        dept.unshift(val);
    }

    return (

        <div className='department'>


                  <Avatar onClick={prev} variant='outlined' sx={{backgroundColor:"white", zIndex:"1"}} ><FcPrevious/></Avatar>

      

        <div className="department-inner">
            {
                dept.map((val)=> 
                    <Chip style={(selected===val)?style2:style}  label={val.toString()} onClick={()=>Tap(val.toString())} />
                )
            }
        </div>


        <Avatar color="warning"   onClick={next}  sx={{backgroundColor:"white"}}><FcNext sx={{color:"orange"}} /></Avatar>

        <Avatar color="warning" onClick={handleClick}   sx={{backgroundColor:"white", color:"black"}}><CgOptions sx={{color:"black"}} /></Avatar>



            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{padding:"30px 10px"}}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {
                    dept.map((val)=>
                        <MenuItem onClick={()=>Tap(val.toString())}>
                            {val}
                        </MenuItem>
                    )
                }
                    

    

            </Menu>

        </div>

    );

}