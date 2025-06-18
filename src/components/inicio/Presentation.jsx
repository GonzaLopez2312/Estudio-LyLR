import "./Presentation.css";
import ciudadImg from "/src/assets/images/descarga.jpg";



function Presentation() {
    return (
        <div className="inicio">
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
            <div className="services-container">
                <div className="services-title">
                    <h4>Asesoramiento Legal y Contable</h4>
                    <h2>Estudio Conformado por Profesionales de Abogacía y Contabilidad especialistas en los siguientes servicios</h2>
                </div>
                <div className="services-provided">
                    <div className="service1">
                        <h4>Asesoramiento Impositivo</h4>
                        <img className="service1-img" src="src\assets\images\inicio\service1.png" />
                        <p>Te ayudamos a cumplir con sus obligaciones fiscales de manera eficiente y conforme a la ley</p>
                    </div>
                    <div className="service2">
                        <h4>Derecho Laboral</h4>
                        <img className="service1-img" src="src\assets\images\inicio\service2.png" />
                        <p>Te asesoramos en necesidades contratos de trabajo, condiciones de trabajo, salario, jornada laboral, vacaciones y terminación de la relación laboral</p>
                    </div>
                    <div className="service3">
                        <h4>Concursos y Quiebras</h4>
                        <img className="service1-img" src="src\assets\images\inicio\service3.png" />
                        <p>Especialistas en buscar un acuerdo entre el deudor y sus acreedores para reestructurar las deudas y evitar la quiebra</p>
                    </div>
                </div>
            </div>
            <div className="contactenos-container">
                <div className="titulo-contactenos">
                    <h1 className="contactenos-title">Contáctenos</h1>
                </div>
                <div className="cuerpo-contactenos">
                    <div className="formulario">
                        <form className="form-contactenos">
                            <label for="nombre-apellido">Nombre y Apellido</label><br></br>
                            <input type="text" id="nombre-apellido" /><br></br>
                            <label for="email">Email</label><br></br>
                            <input type="email" id="email" /><br></br>
                            <label for="telefono">Número de Teléfono</label><br></br>
                            <input type="tel" id="telefono" /><br></br>
                            <label for="motivo-consulta">Motivo de su Consulta</label><br></br>
                            <textarea id="motivo-consulta" rows="5"/><br></br>
                            <button className="button-form">ENVIAR</button>
                        </form>
                    </div>
                    <div className="info-contacto">
                        <div className="medios-contacto">
                            <h4>Medios de Contacto</h4>
                            <div className="contacto-telefono">
                                <img className="telefono-icon" src="/src/assets/images/call.png" />
                                <h3>+2614252221</h3>
                            </div>
                            <div className="contacto-email">
                                <div className="email-1">
                                    <img className="email-icon" src="src\assets\images\inicio\email-icon.png" />
                                    <h4>MARCELO LOPEZ: marcelolopez@gmail.com</h4>
                                </div>
                                <div className="email-2">
                                    <img className="email-icon" src="src\assets\images\inicio\email-icon.png" />
                                    <h4>JUAN LOPEZ ROMERA: juanlopez@gmail.com</h4>
                                </div>
                                <div className="email-3">
                                    <img className="email-icon" src="src\assets\images\inicio\email-icon.png" />
                                    <h4>MARCELO LOPEZ ROMERA: marcelolopezromera@gmail.com</h4>
                                </div>
                            </div> 
                            <div className="address">
                                <img className="address-icon" src="src\assets\images\inicio\address-icon.png" />
                                <h4>Avenida España 123, Mendoza, Mendoza, Argentina</h4>
                            </div>                           
                        </div>
                        <div className="location">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.089203748968!2d-68.84584137900603!3d-32.895809692232035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091106860473%3A0x3536d453ff550600!2sEstudio%20Jur%C3%ADdico%20Contable%20Lopez%20y%20L%C3%B3pez%20Romera!5e0!3m2!1ses-419!2sar!4v1750288071700!5m2!1ses-419!2sar" 
                            allowfullscreen
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Presentation;