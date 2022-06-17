import LecturerCard from "./LecturerCard";



export default function Notice(){

    return(

        <div className="notice">

            <div className="notice-header">

         <div>Get to know your lecturers</div>  
        

            </div>


            {/* <hr></hr> */}


            <div className="notice-body">

                <LecturerCard />
                <LecturerCard />
                <LecturerCard />
                <LecturerCard />

            </div>

        



        </div>

    );

}