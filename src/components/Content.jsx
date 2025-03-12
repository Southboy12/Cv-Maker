export default function Content({ resumeRef, resumeInfo }) {

    const content = document.querySelector("#main--content")

    if (resumeInfo.fontFamily === "tahoma") {
        content.style.fontFamily = "var(--resume-font-3)"
    }
    else if (resumeInfo.fontFamily === "verdana") {
        content.style.fontFamily = "var(--resume-font-5)"
    }
    else if (resumeInfo.fontFamily === "inter") {
        content.style.fontFamily = "var(--resume-font-2)"
    }
    else if (resumeInfo.fontFamily === "new_times_roman") {
        content.style.fontFamily = "var(--resume-font-4)"
    }
    // else if (resumeInfo.fontFamily === "arial") {
    //     content.style.fontFamily = "var(--resume-font-1)"
    // }

    function formatDate(dateString) {
        if (!dateString) return ""; // Handle empty value
        const [year, month] = dateString.split("-"); // Extract year and month
        const date = new Date(year, month - 1); // Month is zero-based in JS
        return date.toLocaleString("en-US", { month: "long", year: "numeric" });
    }
    
   

    return (
        <main ref={resumeRef} id="main--content" className="main--content">
            <section className="header--info">
                <h1>{resumeInfo.fullname}</h1>
                <p>{resumeInfo.phone} | {resumeInfo.email}</p>
                <p>{resumeInfo.address}</p>
            </section>

            <section className="education--info">
                <h2>Education</h2>
                <div>
                    <p><b>{resumeInfo.degree}</b>, {resumeInfo.school}</p>
                    <p><i>{formatDate(resumeInfo.date)}</i></p>
                </div>
            </section>

            <section className="experience--info">
                <h2>Experience</h2>
                <div>
                    <p><b>{resumeInfo.position}</b>, {resumeInfo.company}</p>
                    <p><i>{formatDate(resumeInfo.startDate)} - {formatDate(resumeInfo.endDate)}</i></p>
                    <ul>
                        <li>{resumeInfo.firstBullet}</li>
                        <li>{resumeInfo.secondBullet}</li>
                        <li>{resumeInfo.thirdBullet}</li>
                        <li>{resumeInfo.fourthBullet}</li>
                    </ul>
                </div>
                <div>
                    <p><b>Sales Representative</b>, Petsmart</p>
                    <p><i>April 1972 - October 2016</i></p>
                    <ul>
                        <li>Developed and maintained a loyal, repeat customer base through word-of-mouth marketing and referrals.</li>
                        <li>Managed sourcing, pricing, and delivery logistics to ensure customer satisfaction and maximize profits.</li>
                        <li>Operated within a highly competitive, fast-moving marketplace while maintaining discretion and professionalism</li>
                        <li>Negotiated complex transactions and resolved disputes effectively to maintain strong business relationships.</li>
                        <li>Adapted quickly to shifting regulations and market trends to sustain consistent revenue growth.</li>
                    </ul>
                </div>
                
            </section>
        </main>
    )
}