export default function LandingFooter(){


    const date = new Date();

    return (

        

        <div className="footer">

            <div className="footer-inner">

                 {date.getFullYear()}

            </div>

        </div>

    );

}