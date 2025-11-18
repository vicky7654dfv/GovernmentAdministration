import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";
import HomePage1 from "./pages/HomePage1/HomePage1";
import { CategoryProvider } from "./components/CategoryContext/CategoryContext";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import FAQ from "./pages/FAQ/FAQ";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <CategoryProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/DashBoard" element={<Dashboard />} />
          <Route path="/Error" element={<Error />} />
        </Routes>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
