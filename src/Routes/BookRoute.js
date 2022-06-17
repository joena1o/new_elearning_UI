import Navbar from '../Components/navbar';
import SideBar from '../Components/sidebar';
import BookLayout from '../Layouts/BookLayout';

export default function BookRoute() {

    return (

        <div className="book-route">

            <Navbar />
            <SideBar />
            <BookLayout />

        </div>

    );

}
