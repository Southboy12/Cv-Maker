import Header from "./components/Header"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Content from "./components/Content"
import Format from "./components/Format"
import Reset from "./components/Reset"
import Download from "./components/Download"
import Footer from "./components/Footer"
import { useState } from "react"
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";



function App() {

  const [activeIndex, setActiveIndex] = useState(null)
  const [resumeInfo, setResumeInfo] = useState({
    fullname: "Solomon Chikwendu",
    email: "menkachi85@gmail.com",
    phone: "+2348066264685",
    address: "4 Freedom Street Olodi Apapa Lagos",
    school: "Federal University of Technology Owerri",
    degree: "Bachelors of Science",
    date: "2013-05",
    company: "Crown Interactive Limited",
    position: "Product Manager",
    startDate: "2017-05",
    endDate: "2020-12",
    firstBullet: "Developed and maintained a loyal, repeat customer base through word-of-mouth marketing and referrals.",
    secondBullet: "Managed sourcing, pricing, and delivery logistics to ensure customer satisfaction and maximize profits.",
    thirdBullet: "Operated within a highly competitive, fast-moving marketplace while maintaining discretion and professionalism",
    fourthBullet: "Adapted quickly to shifting regulations and market trends to sustain consistent revenue growth.",
    fontFamily: "arial"
  })

  function handleToggle(index) {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setResumeInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }))
  }
  
  // Function to reset all fields
  function handleReset() {
    setResumeInfo({
      fullname: "",
      email: "",
      phone: "",
      address: "",
      school: "",
      degree: "",
      date: "",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      firstBullet: "",
      secondBullet: "",
      thirdBullet: "",
      fourthBullet: "",
      fontFamily: "arial"
    });
  }

  const resumeRef = useRef(); // Reference to resume container

  function handleDownload() {
      const resumeElement = resumeRef.current; // Get the resume container

      html2canvas(resumeElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf"); // Download the file
      });
  }


  return (
    <div>
      <Header />
      <div className="main">
        <div className="app--buttons">
          <Contact resumeInfo={resumeInfo} handleChange={handleChange} isVisible={activeIndex === 0} onToggle={() => handleToggle(0)} />
          <Education resumeInfo={resumeInfo} handleChange={handleChange} isVisible={activeIndex === 1} onToggle={() => handleToggle(1)} />
          <Experience resumeInfo={resumeInfo} handleChange={handleChange} isVisible={activeIndex === 2} onToggle={() => handleToggle(2)} />
          <Format resumeInfo={resumeInfo} handleChange={handleChange} isVisible={activeIndex === 3} onToggle={() => handleToggle(3)} />
          <div className="reset--container">
            <div>
              <Reset resumeInfo={resumeInfo} handleReset={handleReset} />
            </div>
            <div>
              <Download handleDownload={handleDownload} />
            </div>
          </div>
        </div>
        <div className="app--content">
          <Content resumeRef={resumeRef} resumeInfo={resumeInfo} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App