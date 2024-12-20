import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    {/* group1 */}
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                PHP
                            </h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    
                       {/* group2 */}
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                Node JS
                            </h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                       {/* group3 */}
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                Python
                            </h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                </div>

                <div className="skills__group">
                    {/* group1 */}
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                MySQL
                            </h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    
                       {/* group2 */}
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                express JS
                            </h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                       {/* group3 */}
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">
                                MongoDB
                            </h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Backend