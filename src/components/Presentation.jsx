import "./Presentation.css";
import ciudadImg from "/src/assets/images/city.png";


function Presentation(){
    return(
        <div 
            className="presentation-container"
            style={{ backgroundImage: `url(${ciudadImg})` }}
        >   
        <div className="polygon-background">
            <div className="title-slogan">
                <h1>Lopez y Lopez Romera</h1>
                <h2>ESTUDIO JURÍDICO CONTABLE</h2>
                <p><em>Soluciones legales y contables con mirada integral</em></p>
            </div>
        </div>
            
        </div>
    );
}

export default Presentation;