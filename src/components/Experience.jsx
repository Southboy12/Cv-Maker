import { useState } from "react"



export default function Experience() {

    const [isVisible, setIsVisible] = useState(false)
    
        function handleExperienceClick() {
            setIsVisible(!isVisible)
        }

    return (
        <div className="btn--container">
            <button className="option--button" onClick={handleExperienceClick}>
                <h2>Experience</h2>
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M7,10L12,15L17,10H7Z'%20/%3e%3c/svg%3e" alt="dropdown icon" />
            </button>
            <div className={`form--container ${isVisible ? "" : "hidden"}`}>
                <form>
                    <div className="my--input">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" />
                    </div>
                    
                    <div className="my--input">
                        <label htmlFor="position">Email</label>
                        <input type="text" id="position" />
                    </div>
                    
                    <div className="my--input">
                        <label htmlFor="start_date">Start Date</label>
                        <input type="date" id="start_date" />
                    </div>

                    <div className="my--input">
                        <label htmlFor="end_date">End Date</label>
                        <input type="date" id="end_date" />
                    </div>

                    <h2><b>Responsibilities</b>Responsibilities</h2>
                    <div className="bullet--container">
                        <div className="bullet--text">
                            <button className="bullet--btn">-</button>
                            <input type="text" />
                        </div>
                        <div className="bullet--text">
                            <button className="bullet--btn">-</button>
                            <input type="text" />
                        </div>
                        <div className="bullet--text">
                            <button className="bullet--btn">-</button>
                            <input type="text" />
                        </div>
                        <div className="bullet--text">
                            <button className="bullet-btn">-</button>
                            <input type="text" />
                        </div>
                        <button>+</button>
                    </div>
                </form>
            </div>
        </div>
    )
}