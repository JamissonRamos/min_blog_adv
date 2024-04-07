    // import React from "react";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    //CSS
import styles from './CarroselResponsive.module.css'

    function CustomArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: 'var(--amarelo-800)', borderRadius: 100, textAlign:'center'}}
                onClick={onClick}
            />
        );
    }

    function CarroselResponsive() {
    var settings = {
        className: "center",
        centerPadding: "600px",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />,
        
        
        responsive: [
        {
            breakpoint: 1024,
            settings: 
            {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        ]
    };
        return (
            <div className="slider-container" >  
            <Slider {...settings}>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item, i) => (

                            <div key={i} className={styles.card} >
                                <h1> {item} </h1>
                                <h3>nome</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maiores officia dolorem molestias eveniet vero quam explicabo asperiores, repellat libero harum fugit non pariatur tempore assumenda nemo ex, enim laborum esse. Saepe atque, rem provident excepturi aliquam corporis maxime quod eaque quidem voluptatem voluptas vero iste sit nemo eligendi similique.</p>

                            </div>
                    
                    ))
                }
            </Slider>
            </div>
        );
    }

    export default CarroselResponsive;
