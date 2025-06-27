import { FaHistory } from "react-icons/fa";

export default function Home(){
    return (
        <div className="Home">
            <div className="outer-container">
            <div className="container">
                <img src="../public/passport.jpg" alt=""  className="passport"/>
                <div className="box"><p style={{fontSize:'2rem'}}>Hi👋, I am Abrar<br/> IT UNDERGRADUATE</p></div>

            </div>
            
            </div>
            <div className="history">
                <h3 className="history-title">HISTORY <FaHistory /></h3>

            </div>
        </div>
    )
}