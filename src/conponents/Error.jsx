import { Link } from "react-router-dom"
const Error = () => {
    return (
      <div className="bg-[#141414]">
        <div className="py-20 flex flex-col justify-center items-center text-white text-center">
          <img src="../src/assets/error-vect.svg" className=" px-4" alt="" />
          <h1 className="text-[48px] font-[700] leading-[56px] py-12">
            Oops! Page not found.
          </h1>
          <div className="flex lg:flex-row flex-col gap-10">
            <Link to="/">
            <button className="aai-gradient-outline-btn">Back to Home</button>
           </Link>
        
          </div>
        </div>
      </div>
    );
  };
  
  export default Error;