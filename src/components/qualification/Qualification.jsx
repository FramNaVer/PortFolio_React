
import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">
                Qualification
            </h2>
            <span className="section__subtitle">
                My personal Journey
            </span>

            <div className="qualification__container container">
                <div className="home__scrolls">
                    <a href="#qualification" className="home__scroll-button">
                        <svg
                            width="32px"
                            height="32px"
                            class="home__scroll-mouse"
                            viewBox="0 0 247 390"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            style={{
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}
                        >
                            <path
                                class="wheel"
                                d="M123.359,79.775l0,72.843"
                                style={{
                                    fill: "none",
                                    stroke: "var(--title-color)",
                                    strokeWidth: "20px",
                                }}
                            ></path>
                            <path
                                id="mouse"
                                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                                style={{
                                    fill: "none",
                                    stroke: "var(--title-color)",
                                    strokeWidth: "20px",
                                }}
                            ></path>
                        </svg>
                        <span className="home__scroll-name">Click here</span>
                        <i class="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qulification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qulification__icon"></i>
                        Training
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={
                        toggleState === 1 ? "qualification__content qualification__content-active" :
                            "qualification__content"
                    } >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Sriboonruang school
                                </h3>
                                <span className="qualification__subtitle">
                                    Ordinary GPA: 3.98
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2010 - 2015
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Suntisuk Pitayakom School</h3>
                                <span className="qualification__subtitle">
                                    Science GPA: 3.83
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2015 - 2021
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    MeaJo University
                                </h3>
                                <span className="qualification__subtitle">
                                    Computer Sci GPA: 3.77
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>

                    <div className={
                        toggleState === 2 ? "qualification__content qualification__content-active" :
                            "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Web Designer
                                </h3>
                                <span className="qualification__subtitle">
                                    Figma & Photoshop
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Databases</h3>
                                <span className="qualification__subtitle">
                                    MySQL Workbench CE & MongoDB Compass
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    AI & ML
                                </h3>
                                <span className="qualification__subtitle">
                                    Colab
                                </span>
                                <div className="qualification__calender">
                                    <i class="uil uil-calendar-alt"></i> 2022- Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification