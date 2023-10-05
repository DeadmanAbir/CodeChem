import CourseCard from "./CourseCard";
import { DSA, DSA2, JAVASCRIPT } from "../../CourseContent";
// import Navbar from "./Navbar";
import dsaJava from "../assets/dsa java.jpg"
import dsa2 from "../assets/dsa c++.png";
import Javascript from "../assets/Javascript.jpg"
const ExplorCourses = () => {
  return (
    <div className="bg-[#141414] text-[#dee3ea]">
      
      <div className="lg:px-20 px-5 py-22">
        <div>
          <h1 className="text-[30px] lg:text-[48px] font-[600] leading-[48px] text-[#dee3ea] py-8">
            Courses
            <hr className="border-4 mt-4 rounded-3xl w-[7rem] lg:w-[10rem] border-[#5942E9]" />
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col lg:ml-20">
          <div>
            <CourseCard
              name={DSA.name}
              bio={DSA.bio}
              link={DSA.link}
              picName={dsaJava}
            />
          </div>
          <div>
            <CourseCard
              name={DSA2.name}
              bio={DSA2.bio}
              link={DSA2.link}
              picName={dsa2}
            />
          </div>
          <div>
            <CourseCard
              name={JAVASCRIPT.name}
              bio={JAVASCRIPT.bio}
              link={JAVASCRIPT.link}
              picName={Javascript}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorCourses;
