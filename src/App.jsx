import "./index.css";
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import Course from "./conponents/Course";
import ExplorCourses from "./conponents/ExplorCourses";
import About from "./conponents/About";
import Footer from "./conponents/Footer";
import Faq from "./conponents/Faq";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LandingPage />
    ),
  },
  {
    path: "courses",
    element: <ExplorCourses />,
  },
]);

function App() {
  return (
    <>
   
    <RouterProvider router={router} />
     
      
    </>
  );
}

export default App;
 function LandingPage(){
  return(
    <>
    <Navbar />
    <Home />
    <About />
    <Course />
    <Faq />
      <Footer />
    </>
  )
 }