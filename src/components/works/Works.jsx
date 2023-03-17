import './works.css';
import { Link } from 'react-router-dom';
import { useState } from "react"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
const workData=[
  {"id" : "1",
   "title" : "E-Commerce Website",
   "desc": "I have created this Website with the help of react-js and styled-components. And I have used material-ui icons for better look and react-router-dom for routing. To visit the website click on the image ",
   "image": "assets/ecom.png",
   "url":"https://aajit1.netlify.app/"
  },

  { "id" : "2",
  "title" : "IMDb - Clone",
  "desc": "I have created this website with the help of react-js, and css. And I have also used  react-responsive carosel, material-ui icons,  and react-loading skelton to improve user experience.To visit the website click on the attached image.",
  "image": "assets/imdb.png",
  "url":"https://aajit.netlify.app/"
},

  { "id" : "3",
   "title" : "Final Year Project",
   "desc": " I created hydraulic ram pump during my college, it pumps water from low altitude to high altitude without consuming any fuel or energy. It is also known as hydram. To know more about hydram click on image.",
   "image": "assets/ram.png",
   "url": "https://renewable-world.org/our-approach-to-renewable-energy/technologies/hydraulic-ram-pumps-hydram/"
  },
 
  { "id" : "4",
  "title" : "Internship",
  "desc": " I worked in byju's as a sales trainee for 45 days. During this period I worked more than 12 hours a day in the office. Completion certificate is shown in the image.",
  "image": "assets/byjus.png",
  "url":"https://www.instahyre.com/job-153429-applicant-training-program-at-byjus-ambala-delhi-rohtak/"
  },
 
  { "id" : "5",
    "title" : "Portfolio Website",
    "desc": " I have created this website with the help of react-js and css. And I have used material-ui icons for better look and react-router-dom for routing.",
    "image": "assets/port.png",
    "url":"/"
  }
 ]

function Works() {
  const[index, setindex] = useState(0);
  const ClickHandler = (direction) => {
      if(direction==="left"){
          setindex(index >0 ? index-1 : 4 )
      } else{
          setindex(index <4 ? index+1 : 0)
      }
      
  }


  return (
    
    <div className='works'>
      <div className="wrapperW" >
        <div className='textW' > work & projects</div>
        <Link className='toHome' to="/">
            Home
        </Link>
        <div direction="left" className='leftArrow' onClick={()=>ClickHandler("left")}>
          <ArrowLeftOutlined/>
        </div>
        <div direction="right" className='rightArrow' onClick={()=>ClickHandler("right")}>
          <ArrowRightOutlined/>
        </div>
                  

        <div className='slider' style={{ transition: '1.5s ease', transform: `translateX(${index * -100}vw`}} >
        { workData.map(work=>(
          <div className="slide">
            <div className='item' key={work.id}>
              <div className='left_works'>
                <h1>{work.title}</h1>
                <h3>{work.desc}</h3>
              </div>
              <div className='right_works'>
                <a href={work.url} target="main"><img src={work.image} alt="" /></a>
              </div>
            </div>
            
            </div>
             ) )}
          </div>
           
        </div>
     
    </div>
  
  )
}
export default Works;