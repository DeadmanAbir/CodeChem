import CourseCard from "./CourseCard";
import { DSA, DSA2, JAVASCRIPT, FRONTEND } from "../../CourseContent";
// import Navbar from "./Navbar";
import dsaJava from "../assets/dsa java.jpg";
import dsa2 from "../assets/dsa c++.png";
import Javascript from "../assets/Javascript.jpg";
import Frontend from "../assets/Frontend.jpg";
import Frontend2 from "../assets/Frontend2.jpg";
const ExplorCourses = () => {
  return (
    <div className="bg-[#141414] text-[#dee3ea]">
      <div className="lg:px-20 px-5 py-22 lg:w-[75%] mx-auto">
        <div>
          <h1 className="text-[30px] lg:text-[48px] font-[600] leading-[48px] text-[#dee3ea] py-8">
            Courses
            <hr className="border-4 mt-4 rounded-3xl w-[7rem] lg:w-[10rem] border-[#5942E9]" />
          </h1>
        </div>
        <div className="flex lg:gap-20 lg:flex-row flex-col flex-wrap w-[100%]">
          <CourseCard
            name={DSA.name}
            bio={DSA.bio}
            link={DSA.link}
            picName={dsaJava}
          />
          <CourseCard
            name={DSA2.name}
            bio={DSA2.bio}
            link={DSA2.link}
            picName={dsa2}
          />
          <CourseCard
            name={JAVASCRIPT.name}
            bio={JAVASCRIPT.bio}
            link={JAVASCRIPT.link}
            picName={Javascript}
          />
          <CourseCard
            name={FRONTEND.name}
            bio={FRONTEND.bio}
            link={FRONTEND.link}
            picName={Frontend2}
          />
        </div>
      </div>
    </div>
  );
};

export default ExplorCourses;
