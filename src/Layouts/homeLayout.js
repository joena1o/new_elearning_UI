import Bar from "../Components/Bar";
import Filter from "../Components/Filter.js";
import CardLayout from "./CardLayout";

export default function HomeLayout(){

    return(

        <div className="home-layout">

            <Bar />
            <Filter />


            <CardLayout />

           

        </div>

    );

}