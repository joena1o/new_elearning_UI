import Hero from "../Components/Hero";
import LandingFooter from "../Components/Landing-footer";
import LNavbar from "../Components/LNavbar";


export default function LandingPage(){

    return (
      
        <div className="landing-page">


            <LNavbar />

            <Hero />

            <LandingFooter />

        </div>

    );

}