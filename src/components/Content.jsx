export default function Content({ contactInfo }) {
    return (
        <main className="main--content">
            <section className="header--info">
                <h1>{contactInfo.fullname}</h1>
                <p>{contactInfo.phone} | {contactInfo.email}</p>
                <p>{contactInfo.address}</p>
            </section>

            <section className="education--info">
                <h2>Education</h2>
                <div>
                    <p><b>High School Diploma</b>, St. John's High School</p>
                    <p><i>June 1970</i></p>
                </div>
            </section>

            <section className="experience--info">
                <h2>Experience</h2>
                <div>
                    <p><b>Independent Sales Specialist</b>, Self-Employed</p>
                    <p><i>October 2016 - January 2025</i></p>
                    <ul>
                        <li>Developed and maintained a loyal, repeat customer base through word-of-mouth marketing and referrals.</li>
                        <li>Managed sourcing, pricing, and delivery logistics to ensure customer satisfaction and maximize profits.</li>
                        <li>Operated within a highly competitive, fast-moving marketplace while maintaining discretion and professionalism</li>
                        <li>Negotiated complex transactions and resolved disputes effectively to maintain strong business relationships.</li>
                        <li>Adapted quickly to shifting regulations and market trends to sustain consistent revenue growth.</li>
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