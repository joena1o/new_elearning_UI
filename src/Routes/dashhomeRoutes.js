import Navbar from '../Components/navbar'
import SideBar from '../Components/sidebar'
import HomeLayout from "../Layouts/homeLayout";
import Notice from "../Components/Notice";

export default function DashHomeRoute() {


    return (

        <div>

            <Navbar />
            <SideBar />
            <HomeLayout />
            <Notice style={{borderRight:"1px solid #fff"}} />

        </div>

    );

}