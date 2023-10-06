import "./index.css";
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import Course from "./conponents/Course";
import ExplorCourses from "./conponents/ExplorCourses";
import About from "./conponents/About";
import Footer from "./conponents/Footer";
import Error from "./conponents/Error";
import Faq from "./conponents/Faq";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ConstructionTag from "./conponents/ConstructionTag";
import { LabelRounded } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path : '/',
        element : <LandingPage />
      },
      {
        path: "/courses",
        element: <ExplorCourses />,
      },
      {
        path: "*",
        element: <Error />
      }
    ]
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
function LandingPage() {
  return (
    <>
      <Home />
      <About />
      <Course />
      <Faq />
    </>
  );
}
function Layout(){
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer />
      <ConstructionTag />
    </>
  )
}

