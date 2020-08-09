import React, { useState } from "react";
import Massage from './Massage';
import Neurology from './Neurology';
import Rheumatology from './Rheumatology';

const About = () => {
    const [neurologyVsbl, handleClickNeurology] = useState(false);
    const [massageVsbl, handleClickMassage] = useState(false);
    const [rheumatologyVsbl, handleClickRheumatology] = useState(false);

    const neuroStyle = neurologyVsbl ?  
        { visibility: "visible" } : 
        { visibility: "hidden" };
    const massageStyle = massageVsbl ?  
        { visibility: "visible" } : 
        { visibility: "hidden" };
    const reuhmStyle = rheumatologyVsbl ?  
        { visibility: "visible" } : 
        { visibility: "hidden" };    
          
    return (
        <div className="about">
            <h3 className="about__title">Комплексний підхід до Вашого здоров'я</h3>
            <h1 className="about__addtitle">Ключові напрямки</h1>
            <div className="decoration">
                <div className="decoration__line"></div>
                <div className="decoration__star"></div>
                <div className="decoration__line"></div>
            </div>
            <div className="about__btns">
                <button className="about-btn about__neurology"
                    onClick={() => handleClickNeurology(!neurologyVsbl)}
                >
                    <figure className="figure">
                        <img src="https://raw.githubusercontent.com/DiOlllIV/laconic-design_test/master/src/img/neurology-icon.png" alt="neurology-icon"/>
                        <figcaption>Неврологія</figcaption>
                    </figure>
                    <div className="triangle"
                        style={neuroStyle}
                    >
                    </div>
                </button>
                <Neurology visibility={neurologyVsbl}/>
                <button className="about-btn about__massage"
                    onClick={() => handleClickMassage(!massageVsbl)}
                >
                    <figure className="figure">
                        <img src="https://raw.githubusercontent.com/DiOlllIV/laconic-design_test/master/src/img/massage-icon.png" alt="massage-icon"/>
                        <figcaption>Масаж</figcaption>
                    </figure>
                    <div className="triangle"
                        style={massageStyle}
                    >
                    </div>
                </button>
                <Massage visibility={massageVsbl}/>
                <button className="about-btn about__rheumatology"
                    onClick={() => handleClickRheumatology(!rheumatologyVsbl)}
                >
                    <figure className="figure">
                        <img src="https://raw.githubusercontent.com/DiOlllIV/laconic-design_test/master/src/img/rheumatology-icon.png" alt="rheumatology-icon"/>
                        <figcaption>Рематологія</figcaption>
                    </figure>
                    <div className="triangle"
                        style={reuhmStyle}
                    >
                    </div>
                </button>
                <Rheumatology visibility={rheumatologyVsbl}/>
            </div>
        </div>
    );
};

export default About;