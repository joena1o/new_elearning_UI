import {AiOutlineEye} from 'react-icons/ai';

export default function Card(){

    return(

        <div className="card">

            <div className="card-inner">
                
                <div className="card-header">

                    <div className="card-hd1">

                    <div className="card-dp">


                    </div>

                    <div className="card-title">

                        <span>Name goes here</span>
                        <span>dept</span>
                        <span>12/2/22</span>


                    </div>

                    </div>


                    <div className="card-hd2">

                       

                    </div>

                </div>


                <div className="card-body">


           <p>Book Title</p> 
           <p>This is a new resource uploaded</p>

            {/* <hr style={{marginTop:"30px",backgroundColor:"#d1d1d1d1"}}></hr> */}


                </div>

        

                <div className="card-footer">

                    Reviews  <span><AiOutlineEye /></span>

                </div>


            </div>

        </div>

    );

}