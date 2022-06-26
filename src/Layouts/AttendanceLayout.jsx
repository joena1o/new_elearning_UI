import { AttendanceCard } from "../Components/AttendanceCard";

export const AttendanceLayout = ()=>{

    return(

        <div className='attendance-layout' style={{borderRight:"1px solid #d1d1d1"}}>

            <div className="attendance-layout-header" style={{padding:"20px 5px 0 5px"}}>

                Attendance<hr/>

            </div>

            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />
            <AttendanceCard />

        </div>

    );

}