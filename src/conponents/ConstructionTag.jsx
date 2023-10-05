const ConstructionTag = () => {
  return (
    <div className="sticky bottom-0 bg-[#dee3ea]">
      <div className="flex justify-center items-center  py-2 gap-5">
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 17 17"
            className="h3 ml-auto shrink-0 rounded-lg text-base-100 "
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g></g>
            <path d="M16.469 2.222h-1.927c-0.292 0-0.531 0.234-0.531 0.521v0.667l-10.995 4.030v-0.27c0-0.43-0.358-0.781-0.797-0.781h-1.422c-0.439 0-0.797 0.351-0.797 0.781v4.688c0 0.429 0.358 0.781 0.797 0.781h1.422c0.438 0 0.797-0.352 0.797-0.781v-0.331l1.034 0.189c-0.023 0.163-0.038 0.326-0.038 0.491 0 1.897 1.561 3.441 3.479 3.441 1.657 0 3.030-1.128 3.38-2.682l3.14 0.576v0.659c0 0.287 0.239 0.521 0.531 0.521h1.927c0.292 0 0.531-0.234 0.531-0.521v-11.458c0-0.287-0.239-0.521-0.531-0.521zM7.491 14.648c-1.367 0-2.479-1.095-2.479-2.441 0-0.104 0.027-0.205 0.040-0.308l4.84 0.888c-0.264 1.082-1.235 1.861-2.401 1.861zM16 13.722h-0.989v-1.013l-12.995-2.383v1.312h-1.016v-4.25h1.016v1.484l12.995-4.763v-0.887h0.989v10.5z"></path>
          </svg>
        </div>
        <div>
          <p className="text-[14px] font-[500] leading-[20px]">
            Under Construction
          </p>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="relative text-[#dee3ea] bg-[#5942E9] w-max items-center font-medium transition-all duration-75 focus-visible:before:absolute focus-visible:before:-top-1 focus-visible:before:-left-1 focus-visible:before:-right-1 focus-visible:before:-bottom-1 focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-primary disabled:cursor-not-allowed bg-primary text-content/90 ring-1 ring-primary-hover before:border-primary/30 hover:bg-primary-hover hover:text-content hover:ring-primary active:bg-primary disabled:bg-primary-disable disabled:hover:bg-primary-disable group flex flex-row gap-1 rounded-full p-1 px-3"
          >
            <span>Events</span>
            <svg
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative transition-transform duration-200 motion-reduce:-translate-x-1 group-hover:translate-x-0"
            >
              <path
                fill="currentColor"
                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
              ></path>
              <path
                stroke="currentColor"
                d="M1.75 8H11"
                className="origin-left opacity-0 transition-all duration-200 motion-reduce:-translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
              ></path>
            </svg>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConstructionTag;
