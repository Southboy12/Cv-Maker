import { useState } from "react"


export default function Format() {

   const [isVisible, setIsVisible] = useState(false)
   
       function handleFormatClick() {
           setIsVisible(!isVisible)
       }

    return (
        <div className="btn--container">
            <button className="option--button" onClick={handleFormatClick} >
                <h2>Formatting</h2>
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M7,10L12,15L17,10H7Z'%20/%3e%3c/svg%3e" alt="dropdown icon" />
            </button>
            <div className={`form--container ${isVisible ? "" : "hidden"}`}>
                <form>
                    <div className="my--input">
                        <label htmlFor="font">Font</label>
                        <select name="" id="font">
                            <option value="arial">Arial</option>
                            <option value="inter">Inter</option>
                            <option value="tahoma">Tahoma</option>
                            <option value="new_times_roman">New Times Roman</option>
                            <option value="verdana">Verdana</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}