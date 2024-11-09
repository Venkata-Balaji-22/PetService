import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Petdetails from "./Petdetails";
import AdoptionForm from "./AdoptionForm";
import ServiceGallery from "./ServiceGallery";
import ServiceBookingForm from "./ServiceBookingForm";
import GroomingGallery from "./GroomingGallery";
import GroomingBookingForm from "./GroomingBookingForm.";
import PetProductGallary from "./PetProductGallary";
import PetProductForm from "./PetProductForm";
import Archievements from "./Archievements";
import FeedbackForm from "./FeedbackForm";
import Login from "./Login";
import Signup from "./Signup";

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<><Login/></>}></Route>
          <Route path="/home" element={<><Navbar/><Archievements/><Home/></>}></Route>
          <Route path="/pets" element={<><Navbar/><Petdetails/></>}></Route>
          <Route path="/services" element={<><Navbar/><ServiceGallery/></>}></Route>
          <Route path="/form" element={<><Navbar/><AdoptionForm/></>}></Route>
          <Route path="/serviceform" element={<><Navbar/><ServiceBookingForm/></>}></Route>
          <Route path="/grooming" element={<><Navbar/><GroomingGallery/></>}></Route>
          <Route path="/groomingBookingForm" element={<><Navbar/><GroomingBookingForm/></>}></Route>
          <Route path="/Products" element={<><Navbar/><PetProductGallary/></>}></Route>
          <Route path="/ProductForm" element={<><Navbar/><PetProductForm/></>}></Route>
          <Route path="/feedback" element={<><Navbar/><FeedbackForm/></>}></Route>
          
          <Route path="/Signup" element={<><Signup/></>}></Route>
          
        
          
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;