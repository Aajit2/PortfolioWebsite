import Topbar from "../topbar/Topbar"
import "./portfolio.css"

function Portfolio() {
  return (
    <div className='portfolio'>
      <Topbar/>
      <div className="textP">Qualifications
      </div>
      <div className="textE">
        <span className="dob">Dob- 20/08/1998</span>
        <span className="plc">Place: Kanpur</span>
      </div>
      <div className='left_port'>
        <div className="skills">
        <h2> <u>IT Skills...</u></h2>
        <ul>
          <li>React Js</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Html</li>
          <li>Python</li>
          <li>java(Basic)</li>
        </ul>
        </div>
        <div className="degree">
        <h1>B.Tech</h1>Mechanical Engineering(2021)
        <h4>HBTU Kanpur</h4>
        </div>
        
      </div>
      <div className='right_port'>
      <img src="assets/img6.jpg" alt="" />
      </div>
    </div>
  )
}

export default Portfolio