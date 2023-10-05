import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="bg-[#141414]">
      <div className="text-[#dee3ea] lg:w-[65%] lg:mx-auto py-20 mx-5">
        <div className="flex gap-10 flex-wrap justify-evenly items-start py-10 px-2">
          <div className="flex flex-col gap-3">
            <h1 className="text-[18px] font-[600] leading-[28px]">
              Organization
              <hr className="border-2 my-2 w-24 rounded-3xl border-[#5942E9]" />
            </h1>
            <p className="text-[16px] font-[500] leading-[24px]">About</p>
            <p className="text-[16px] font-[500] leading-[24px]">FAQ</p>
            <p className="text-[16px] font-[500] leading-[24px]">Newsletter</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[18px] font-[600] leading-[28px]">
              Community
              <hr className="border-2 my-2 w-24 rounded-3xl border-[#5942E9]" />
            </h1>
            <p className="text-[16px] font-[500] leading-[24px]">Blog</p>
            <p className="text-[16px] font-[500] leading-[24px]">Events</p>
            <p className="text-[16px] font-[500] leading-[24px]">Courses</p>
            <p className="text-[16px] font-[500] leading-[24px]">Webinars</p>
            <p className="text-[16px] font-[500] leading-[24px]">Roadmaps</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[18px] font-[600] leading-[28px]">
              Socials
              <hr className="border-2 my-2 w-16 rounded-3xl border-[#5942E9]" />
            </h1>
            <p className="text-[16px] font-[500] leading-[24px]">Instagram</p>
            <p className="text-[16px] font-[500] leading-[24px]">Linkdin</p>
            <p className="text-[16px] font-[500] leading-[24px]">Twitter</p>
            <p className="text-[16px] font-[500] leading-[24px]">Github</p>
            <p className="text-[16px] font-[500] leading-[24px]">Youtube</p>
          </div>
          <div className="flex flex-col flex-wrap gap-3">
            <h1 className="text-[18px] font-[600] leading-[28px]">
              Contact
              <hr className="border-2 my-2 w-16 rounded-3xl border-[#5942E9]" />
            </h1>
            <p className="text-[16px] font-[500] leading-[24px]">
              example@gmail.com
            </p>
            <p className="text-[16px] font-[500] leading-[24px]">Discord</p>
            <p className="text-[16px] font-[500] leading-[24px]">Telegram</p>
          </div>
        </div>
        <div className="">
          <hr className=" border-2" />
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <h1 className="text-[20px] font-[900] leading-[28px] py-3">
              CodeChem
            </h1>
            <div className="flex gap-3 py-3">
              <InstagramIcon />
              <LinkedInIcon />
              <EmailIcon />
              <GitHubIcon />
              <TwitterIcon />
            </div>
          </div>
          <hr className="border-2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
