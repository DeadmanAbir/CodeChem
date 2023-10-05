import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Question = ({question, answer}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div className="border border-gray-100 rounded-lg bg-[#111827]">
        <div
          className="flex justify-between lg:gap-32 py-4 px-4"
          onClick={toggleVisibility}
        >
          <h1 className="">{question}</h1>
          {isVisible ? <RemoveIcon /> : <AddIcon />}
        </div>
        <div
          className={`${
            isVisible ? "visible" : "hidden"
          } px-4 py-4 border border-t-gray-100`}
        >
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
