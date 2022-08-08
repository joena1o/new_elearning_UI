
import {Link} from 'react-router-dom';

export default function LNavbar() {


    const auth = window.localStorage.getItem("token");

    return (
        <div className="lnavbar">




            <div className="inner">

                <div className="brand">
                    MAU EDU
                </div>

                <div className="navs">

                    {

                        (auth === "" || auth === null)?(
                            <>
                                    <Link to='/login'><button>Login</button></Link>
                                    <Link to='/login'><button>Sign Up</button></Link>
                            </>):(
                                    <Link to='/home'><button><b>Go to Home</b></button></Link>
                            )
                        


                    }

                    
                    
                   

                    
                </div>


            </div>



        </div>
    )

}