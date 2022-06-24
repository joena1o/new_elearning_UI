import LoginCard from "../Components/LoginCard";
import LoginNav from "../Components/LoginNav";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginRoute(){

    return(

        <div className="login-route">

            <LoginNav />

            <LoginCard />

            

        </div>

    );

}