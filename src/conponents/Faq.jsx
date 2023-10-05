import Question from "./Question";
import { q1, q2 } from "../../QuestionContent";
const Faq = () => {
  return (
    <div className="bg-gradient-to-b-r py-24 text-white">
      <div className="lg:w-[70%] mx-5 lg:mx-auto">
        <h1 className="text-[30px] lg:text-[48px] font-[600] leading-[48px] text-[#dee3ea] pb-8">
          FAQs
          <hr className="border-4 mt-4 rounded-3xl w-[7rem] border-[#5942E9]" />
        </h1>
        <div className="flex lg:flex-row gap-8 flex-col justify-evenly text-[14px] lg:text-[16px] font-[500] leading-[24px] cursor-pointer">
        
          <Question question={q1.question} answer={q1.answer} />
          <Question question={q2.question} answer={q2.answer} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
