import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";
import HomePage1 from "./pages/HomePage1/HomePage1";
import { CategoryProvider } from "./components/CategoryContext/CategoryContext";

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
    <>
      <BrowserRouter>
      <CategoryProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          {/* <Route path="/HomePage2" element={<HomePage2 />} />
          <Route path="/About" element={<About />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Error" element={<Error />} /> */}
        </Routes>
        </CategoryProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
