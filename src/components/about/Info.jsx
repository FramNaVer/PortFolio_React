import React from 'react'

export const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon'></i> 
                <h3 className="about__title">Apprentice</h3>
                <span className="about__subtitle">3 Year Studying</span>
            </div>

            <div className="about__box ">
                <i class='bx bx-briefcase about__icon' ></i>
                <h3 className="about__title">Complete</h3>
                <span className="about__subtitle">40+ Repositories</span>
            </div>

            <div className="about__box">
                <i class='bx bx-male about__icon'></i>
                <h3 className="about__title">Age</h3>
                <span className="about__subtitle">20 Year</span>
            </div>
        </div>
    )
}

export default Info