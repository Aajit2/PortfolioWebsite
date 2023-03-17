import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Topbar from "./components/topbar/Topbar"
import "./home.css"
const Home = () => {
  return (
     
     <div className="home">
     <Topbar/>
      <div className="sections">
        <Intro/>
        <Works/>
        <Portfolio/>
        <Contact/>
      </div>
     </div>
  )
}

export default Home
