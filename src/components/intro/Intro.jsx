import "./intro.css"
import Topbar from "../topbar/Topbar"

function Intro() {
  return (
    <div className="intro">
      <Topbar/>
      <div className="leftintro">
        <div className="imageContainer">
          <img src="assets/myImg1.png" alt="" />
        </div>      
      </div>
      <div className="rightintro">
        <div className="wrapperint">
          <h2>Hi There, I'm</h2>
          <h1>Aajit Singh</h1>
          <h3>Web Developer</h3>
        <div/>
      </div>
    </div>
    </div>
  )
}

export default Intro