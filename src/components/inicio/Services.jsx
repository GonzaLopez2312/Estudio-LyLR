import { useState, useRef, useEffect } from "react";
import "./Presentation.css";
import Slider from "react-slick";
import './Services.css'

const services = [
    {
        title: "Asesoramiento Impositivo",
        img: "src/assets/images/inicio/service1.png",
        description: "Te ayudamos a cumplir con sus obligaciones fiscales de manera eficiente y conforme a la ley",
    },
    {
        title: "Derecho Laboral",
        img: "src/assets/images/inicio/service2.png",
        description: "Te asesoramos en necesidades contratos de trabajo, condiciones de trabajo, salario, jornada laboral, vacaciones y terminación de la relación laboral",
    },
    {
        title: "Concursos y Quiebras",
        img: "src/assets/images/inicio/service3.png",
        description: "Especialistas en buscar un acuerdo entre el deudor y sus acreedores para reestructurar las deudas y evitar la quiebra",
    }
];

function CarouselServices() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef(null);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1000);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    initialSlide: 1,
    centerMode: true, 
    centerPadding: '0px',
    arrows: true,
    prevArrow: <button type="button" className="slick-prev">Previous</button>,
    nextArrow: <button type="button" className="slick-next">Next</button>,
    beforeChange: (current, next) => {
        setCurrentSlide(next);
    },
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: '0px',
                arrows: true,
                infinite: true,
                prevArrow: <button type="button" className="slick-prev">Previous</button>,
                nextArrow: <button type="button" className="slick-next">Next</button>,
            }
        }
    ]
};

    useEffect(() => {
        setCurrentSlide(1); 
    }, []);

    const getSlideClass = (index) => {
        if (isMobile) {
            return 'visual-center';
        }
        
        const centerIndex = 1;
        const normalizedIndex = (index - currentSlide + 3) % 3;

        if (normalizedIndex === centerIndex) {
            return 'visual-center';
        } else if (normalizedIndex === 0) {
            return 'visual-left';
        } else {
            return 'visual-right';
        }
    };

    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                {services.map((service, index) => (
                    <div key={index} className="slide-wrapper">
                        <div className={`services ${getSlideClass(index)}`}>
                            <h4>{service.title}</h4>
                            <img src={service.img} alt={service.title} />
                            <p>{service.description}</p>
                            <button className="services-button">Saber Más</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselServices;