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



function App() {

  const [activeIndex, setActiveIndex] = useState(null)
  const [contactInfo, setContactInfo] = useState({
    fullname: "Solomon Chikwendu",
    email: "menkachi85@gmail.com",
    phone: +2348066264685,
    address: "4 Freedon Street Olodi Apapa Lagos" 
  })

  function handleToggle(index) {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }))
  }

  return (
    <div>
      <Header />
      <div className="main">
        <div className="app--buttons">
          <Contact contactInfo={contactInfo} handleChange={handleChange} isVisible={activeIndex === 0} onToggle={() => handleToggle(0)} />
          <Education isVisible={activeIndex === 1} onToggle={() => handleToggle(1)} />
          <Experience isVisible={activeIndex === 2} onToggle={() => handleToggle(2)} />
          <Format isVisible={activeIndex === 3} onToggle={() => handleToggle(3)} />
          <div className="reset--container">
            <Reset />
            <Download />
          </div>
        </div>
        <div className="app--content">
          <Content contactInfo={contactInfo} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App