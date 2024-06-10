import Bonus from "../../components/bonus/bonus";
import { Directions } from "../../components/directions/directions";
import { Footer } from "../../components/footer/footer";
import Village from "../../components/village/village";


export function MainPage(){
    return(
        <div className="main">
            <Village/>
            <Directions/>
            <Bonus/>
            <Footer/>
        </div>
    )
}