import Navbar from "../Components/navbar";
import Notice from "../Components/Notice";
import SideBar from "../Components/sidebar";
import UploadLayout from "../Layouts/UploadLayout";

export default function ResourceRoute(){

    return(

        <div className="resource_route">

            <Navbar />
            <SideBar />
            <Notice />
            <UploadLayout />

        </div>

    );


}