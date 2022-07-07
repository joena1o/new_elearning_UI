import Lottie from "lottie-react";
import groovyWalkAnimation from "../Assets/65012-learning-concept.json";
import {Button} from '@mui/material';

export default function Hero() {

    return (

        <div className="hero">


            <div className="inner">

        
            <div className="hero-info">
                <h3 style={{fontWeight:"bold", marginBottom:'10px'}}>CONNECTED EDUCATION SPACE</h3><br></br>
                <div>MAU VIRTUAL LEARNING & E-RESOURCE, ALL YOUR E-LEARNING MATERIALS IN ONE PLACE</div>
                <br></br>
                <div>
                    <Button variant='outlined' color='warning'>Learn</Button>
                </div>
            </div>


            <div className="hero-icon">

                <div className="display">
             <Lottie animationData={groovyWalkAnimation} />
                </div>


            </div>


            </div>

            


        </div>

    );


}