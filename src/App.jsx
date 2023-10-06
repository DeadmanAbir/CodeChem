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

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/courses",
    element: <ExplorCourses />,
  },
  {
    path: "*",
    element: <Error />
  }
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
      <ConstructionTag />
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

