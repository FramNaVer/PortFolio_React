import React, { useState } from 'react'
import './service.css'

const Services = () => {
    const [toggleState, setToggle] = useState(0);

    const toggleTab = (index) =>{
        setToggle(index)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">
                            Product <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={()=> toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__model active-model" : "services__model" }>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>
                            <h3 className="services__model-title">
                                Product Designer
                            </h3>
                            <p className="services__model-description">
                                Service with more than 3 year of expreience.
                            </p>
                            
                            <ul className="services__model-services grid">
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I develop the user interface.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Web Page Development.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I create ux element interactions.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I position your compay brand.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Design and mockups of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            UX/UI <br /> Designers
                        </h3>
                    </div>

                    <span className="services__button" onClick={()=> toggleTab(2)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__model active-model" : "services__model" }>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>
                            <h3 className="services__model-title">
                                UX/UI Designer
                            </h3>
                            <p className="services__model-description">
                                Service with more than 3 year of expreience UX/UI Designer.
                            </p>
                            
                            <ul className="services__model-services grid">
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I develop the user interface.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Web Page Development.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I create ux element interactions.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I position your compay brand.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Design and mockups of products for companies.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-desktop services__icon"></i>
                        <h3 className="services__title">
                            Visual <br/> Designers
                        </h3>
                    </div>

                    <span className="services__button" onClick={()=> toggleTab(3)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__model active-model" : "services__model" }>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>
                            <h3 className="services__model-title">
                                Visual Designers
                            </h3>
                            <p className="services__model-description">
                                Service with more than 3 year of expreience three.
                            </p>
                            
                            <ul className="services__model-services grid">
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I develop the user interface.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Web Page Development.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I create ux element interactions.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I position your compay brand.</p>
                                </li>

                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Design and mockups of products for companies.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services