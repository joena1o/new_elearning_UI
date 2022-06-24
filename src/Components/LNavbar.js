
import {Link} from 'react-router-dom';

export default function LNavbar() {

    return (
        <div className="lnavbar">

            <div className="inner">

                <div className="brand">
                    MAU EDU
                </div>

                <div className="navs">
                    <Link to='/login'><button>Login</button></Link>
                    <button>Sign Up</button>
                </div>


            </div>



        </div>
    )

}