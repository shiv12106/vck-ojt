import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import NotFoundPage from "./pages/NotFoundPage";
import '../src/App.css'
import { useState } from "react";
import Header from "./Components/Header/Header";
import DeveloperInfoPopup from "./Components/DeveloperInfo/DeveloperInfoPopup";

const App = () => {
  
const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return (
        <>
        <div>
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="SHIVRAJ KALANGE"
          studentPhotoUrl="/Images/shivraj.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>


          <Router>
            <div className="main-layout">
              <Header/>
            <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/Home" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/course" element={<CoursesPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/admission" element={<AdmissionPage/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
           <ChatbotComponent/>
           </div>
           </div>
          </Router>
        </>         
    );
}

export default App;
