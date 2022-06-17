import {FiCloud} from 'react-icons/fi';
import {MdCloudUpload} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';



export default function Navbar(){

    return (


        <div className="navbar">

                <div className="navbar-brand" style={{fontSize:"29px"}}>
                    MAU
                </div>

                <div className="navbar-search">

                    <input type='text' placeholder="Search Here" />

                </div>

                <div className="navbar-navs">

                    <div><CgProfile /></div>
                    <div><MdCloudUpload /></div>

                </div>

        </div>

    );
}