import { Directions } from "../../components/directions/directions";
import { Footer } from "../../components/footer/footer";


export function MainPage(){
    return(
        <div className="main">
            <Directions/>
            <Footer/>
        </div>
    )
}