import { useState } from "react"


export default function Education() {

     const [isVisible, setIsVisible] = useState(false)
    
        function handleEducationClick() {
            setIsVisible(!isVisible)
        }

    return (
        <div className="btn--container">
            <button className="option--button" onClick={handleEducationClick} >
                <h2>Education</h2>
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M7,10L12,15L17,10H7Z'%20/%3e%3c/svg%3e" alt="dropdown icon" />
            </button>
            <div className={`form--container ${isVisible ? "" : "hidden"}`}>
                <form>
                    <div className="my--input">
                        <label htmlFor="school">School</label>
                        <input type="text" id="school" />
                    </div>
                    
                    <div className="my--input">
                        <label htmlFor="degree">Degree</label>
                        <input type="text" id="degree" />
                    </div>
                    
                    <div className="my--input">
                        <label htmlFor="phoneNumber">Date</label>
                        <input type="date" id="date" />
                    </div>

                </form>
            </div>
        </div>
    )
}