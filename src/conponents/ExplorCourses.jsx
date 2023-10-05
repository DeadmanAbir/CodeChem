import CourseCard from "./CourseCard";
import { DSA , DSA2} from "../../CourseContent";
const ExplorCourses = () => {
  return (
    <div  className="bg-[#141414] py-32 text-[#dee3ea]">
      <div className="lg:px-20 px-5">
        <div>
          <h1 className="text-[30px] lg:text-[48px] font-[600] leading-[48px] text-[#dee3ea] py-8">
            Courses
            <hr className="border-4 mt-4 rounded-3xl w-[7rem] lg:w-[10rem] border-[#5942E9]" />
          </h1>
        </div>
        <div className="flex gap-5 flex-wrap items-center lg:ml-20 mt-11">
          <CourseCard name={DSA.name} bio={DSA.bio} link={DSA.link} picName={DSA.picName} />
          <CourseCard name={DSA2.name} bio={DSA2.bio} link={DSA2.link} picName={DSA2.picName}/>
        </div>
      </div>
    </div>
  );
};

export default ExplorCourses;
