import { useState } from "react"


export default function Contact() {
    
    const [isVisible, setIsVisible] = useState(false)

    function handleContactClick() {
        setIsVisible(!isVisible)
    }

    return (
        <div className="btn--container">
            <button className="option--button" onClick={handleContactClick}>
                <h2>Contact</h2>
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M7,10L12,15L17,10H7Z'%20/%3e%3c/svg%3e" alt="dropdown icon" />
            </button>
            <div className={`form--container ${isVisible ? "" : "hidden"}`} >
                <form>
                    <div className="my--input">
                        <label htmlFor="fullName">Name</label>
                        <input type="text" id="fullName" name="fullName" />
                    </div>
                    
                    <div className="my--input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    
                    <div className="my--input">
                        <label htmlFor="phoneNumber">Phone</label>
                        <input type="number" id="phoneNumber" name="phone_number" />
                    </div>

                    <div className="my--input">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" />
                    </div>

                </form>
            </div>
        </div>
    )
}