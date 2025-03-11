import Header from "./components/Header"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Content from "./components/Content"
import Format from "./components/Format"
import Reset from "./components/Reset"
import Download from "./components/Download"
import Footer from "./components/Footer"




function App() {

  return (
    <div>
      <Header />
      <div className="main">
        <div className="app--buttons">
          <Contact />
          <Education />
          <Experience />
          <Format />
          <div className="reset--container">
            <Reset />
            <Download />
          </div>
        </div>
        <div className="app--content">
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App