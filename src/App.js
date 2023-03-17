
import Portfolio from "./components/portfolio/Portfolio"
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"

 function App (){

 return(
       <div>
       <BrowserRouter>
       <Routes>
       <Route path="/" index element={<Home/>}/>
         <Route path="/intro" element={<Intro/>}/>
         <Route path="/works" element={<Works/>}/>
         <Route path="/education" element={<Portfolio/>}/>
         <Route path="/contact" element={<Contact/>}/>
       </Routes>
       </BrowserRouter>
       </div>
   )
 }  

export default App