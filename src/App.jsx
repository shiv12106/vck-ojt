import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import './App.css'

const  App = () => {
    return(
        <div>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
              </Routes>
            </Router>
        </div>
    )
}

export default App;