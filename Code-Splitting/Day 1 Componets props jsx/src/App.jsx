import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {

  return (
    <>
    <Navbar/>
    <div className="main-b">
      <Card name="Vishal Tyagi" job="Software Enigneer"/>
      <Card name="Raghav" job="Electrical Enigneer"/>
    </div>
    <Footer />
    </>
  )
}

export default App
