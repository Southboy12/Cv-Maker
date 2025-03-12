export default function Experience({ handleChange, resumeInfo, isVisible, onToggle}) {

    // const [isVisible, setIsVisible] = useState(false)
    
    //     function handleExperienceClick() {
    //         setIsVisible(!isVisible)
    //     }

    return (
        <div className="btn--container">
            <button className="option--button" onClick={onToggle}>
                <h2>Experience</h2>
                <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M7,10L12,15L17,10H7Z'%20/%3e%3c/svg%3e" alt="dropdown icon" />
            </button>
            <div className={`form--container ${isVisible ? "" : "hidden"}`}>
                <form>
                    <div className="my--input">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="company" value={resumeInfo.company} onChange={handleChange} />
                    </div>
                    
                    <div className="my--input">
                        <label htmlFor="position">Position</label>
                        <input type="text" id="position" name="position" value={resumeInfo.position} onChange={handleChange} />
                    </div>
                    
                    <div className="my--input">
                        <label htmlFor="start_date">Start Date</label>
                        <input type="month" id="start_date" name="startDate" value={resumeInfo.startDate} onChange={handleChange} />
                    </div>

                    <div className="my--input">
                        <label htmlFor="end_date">End Date</label>
                        <input type="month" id="end_date" name="endDate" value={resumeInfo.endDate} onChange={handleChange} />
                    </div>

                    <h2><b>Responsibilities</b></h2>
                    <div className="bullet--container">
                        <div className="bullet--text">
                            <button className="bullet--btn">-</button>
                            <input type="text" name="firstBullet" value={resumeInfo.firstBullet} onChange={handleChange} />
                        </div>
                        <div className="bullet--text">
                            <button className="bullet--btn">-</button>
                            <input type="text" name="secondBullet" value={resumeInfo.secondBullet} onChange={handleChange} />
                        </div>
                        <div className="bullet--text">
                            <button className="bullet--btn">-</button>
                            <input type="text" name="thirdBullet" value={resumeInfo.thirdBullet} onChange={handleChange} />
                        </div>
                        <div className="bullet--text">
                            <button className="bullet--btn">-</button>
                            <input type="text" name="fourthBullet" value={resumeInfo.fourthBullet} onChange={handleChange} />
                        </div>
                        <button className="add--bullet-btn">+</button>
                    </div>
                </form>
            </div>
        </div>
    )
}