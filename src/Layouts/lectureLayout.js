import LectureHaeder from "../Components/LectureHeader";
import Navbar from "../Components/navbar";
import SideBar from "../Components/sidebar";
import ChatLayout from "../Layouts/ChatLayout";
import Attendance from "./attendanceLayout";
import VideoCallArae from "./VideoCallLayout";
export default function LectureLayout() {

    return (



        <div className="lecture-layout">

            <LectureHaeder />

            <Navbar />
            <SideBar />
            <VideoCallArae/>
            <ChatLayout />
            <Attendance />



        </div>

    );


}