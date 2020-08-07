import React, { Component } from "react";
import Massage from './Massage';
import Neurology from './Neurology';
import Rheumatology from './Rheumatology';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            neurologyVsbl: false,
            massageVsbl: false,
            rheumatologyVsbl: false,
            neuroTriangleVsblt: false,
            massTriangleVsblt: false,
            rheumTriangleVsblt: false,
        };
    }

    handleClickNeurology = () =>
        this.setState({
            neurologyVsbl: true,
            massageVsbl: false,
            rheumatologyVsbl: false,
            neuroTriangleVsblt: true,
            massTriangleVsblt: false,
            rheumTriangleVsblt: false,
        });

    handleClickMassage = () => 
        this.setState({
            neurologyVsbl: false,
            massageVsbl: true,
            rheumatologyVsbl: false,
            neuroTriangleVsblt: false,
            massTriangleVsblt: true,
            rheumTriangleVsblt: false,
        });

    handleClickRheumatology = () => 
        this.setState({
            neurologyVsbl: false,
            massageVsbl: false,
            rheumatologyVsbl: true,
            neuroTriangleVsblt: false,
            massTriangleVsblt: false,
            rheumTriangleVsblt: true,
        });

    render () {
        const { neuroTriangleVsblt, 
                massTriangleVsblt, 
                rheumTriangleVsblt
              } = this.state;

        const neuroStyle = neuroTriangleVsblt ?  
            { visibility: "visible" } : 
            { visibility: "hidden" };
        const massageStyle = massTriangleVsblt ?  
            { visibility: "visible" } : 
            { visibility: "hidden" };
        const reuhmStyle = rheumTriangleVsblt ?  
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
                        onClick={() => this.handleClickNeurology()}
                    >
                        <figure className="figure">
                            <img src="src/img/neurology-icon.png" alt="neurology-icon"/>
                            <figcaption>Неврологія</figcaption>
                        </figure>
                        <div className="triangle"
                            style={neuroStyle}
                        >
                        </div>
                    </button>
                    <button className="about-btn about__massage"
                        onClick={() => this.handleClickMassage()}
                    >
                        <figure className="figure">
                            <img src="src/img/massage-icon.png" alt="massage-icon"/>
                            <figcaption>Масаж</figcaption>
                        </figure>
                        <div className="triangle"
                            style={massageStyle}
                        >
                        </div>
                    </button>
                    <button className="about-btn about__rheumatology"
                        onClick={() => this.handleClickRheumatology()}
                    >
                        <figure className="figure">
                            <img src="src/img/rheumatology-icon.png" alt="rheumatology-icon"/>
                            <figcaption>Рематологія</figcaption>
                        </figure>
                        <div className="triangle"
                            style={reuhmStyle}
                        >
                        </div>
                    </button>
                </div>

                <Neurology visibility={this.state.neurologyVsbl}/>
                <Massage visibility={this.state.massageVsbl}/>
                <Rheumatology visibility={this.state.rheumatologyVsbl}/>
            </div>
        );
    }
};

export default About;