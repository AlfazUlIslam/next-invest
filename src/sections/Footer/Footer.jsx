import { FooterTitle, FooterLink } from "../../components"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { caretRight, backToTop } from "../../assets"

const Footer = () => {
  return (
    // footer
    <footer className="bg-niGreyProgress">
      {/* container */}
      {/* flex-row gap-0 justify-between */}
      <div className="container px-6 py-[60px] flex flex-col gap-[40px] lg:flex-row lg:gap-0 lg:justify-between">
        {/* segment 1 */}
        <div>
          {/* title */}
          {/* text-start */}
          <h4 className="font-josefinSans font-bold text-[24px] text-niGreyPrimary text-center mb-[10px] sm:text-[34px] lg:text-start">
            NEXT INVEST
          </h4>
          {/* copyright text */}
          {/* text-start mb-[192px] */}
          <div className="font-josefinSans font-normal text-[14px] text-niGreyPrimary text-center mb-[40px] sm:text-[16px] lg:text-start lg:mb-[192px]">
            Copyright &copy; 2020. LogoIpsum. All rights reserved.
          </div>
          {/* form */}
          {/* text-start */}
          <form className="text-center space-y-[16px] lg:text-start">
            {/* label */}
            {/* text-[24px] */}
            <label 
              htmlFor="#newsletter-input"
              className="font-josefinSans font-normal text-[20px] text-niGreyPrimary sm:text-[24px]">
              Subscribe to our newsletter
            </label>
            {/* input & button */}
            {/* w-[370px] mx-0 */}
            <div className="w-[250px] flex mx-auto sm:w-[370px] lg:mx-0">
              {/* input */}
              <input 
                type="text"
                placeholder="Email address"
                className="border border-niGreySecondary pl-2 flex-1"
              />
              {/* button */}
              {/* w-[50px] h-[50px] rounded-r-[8px] */}
              <button className="w-[30px] h-[30px] rounded-r-[4px] bg-niPurple border border-niPurple sm:w-[50px] sm:h-[50px] sm:rounded-r-[8px]">
                <img className="w-[20px] h-[20px] mx-auto sm:w-auto sm:h-auto" src={caretRight} alt="Right Caret" />
              </button>
            </div>
          </form>
        </div>
        {/* segment 2 */}
        {/* gap-[150px] justify-start */}
        <div className="flex gap-[50px] justify-center lg:gap-[150px] lg:justify-start">
          {/* services */}
          <div className="flex flex-col gap-[8px] xl:gap-[16px]">
            <FooterTitle content="Services" />
            <FooterLink content="Email Marketing" />
            <FooterLink content="Campaigns" />
            <FooterLink content="Branding" />
            <FooterLink content="Offline" />
          </div>
          {/* about */}
          <div className="flex flex-col gap-[8px] xl:gap-[16px]">
            <FooterTitle content="About" />
            <FooterLink content="Our Story" />
            <FooterLink content="Benefits" />
            <FooterLink content="Team" />
            <FooterLink content="Careers" />
          </div>
        </div>
        {/* segment 3 */}
        {/* flex-col items-end */}
        <div className="flex flex-row-reverse justify-center items-center gap-[100px] lg:flex-col lg:gap-0 lg:justify-between lg:items-end">
          {/* back to top button */}
          <button>
            <img className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-auto lg:h-auto" src={backToTop} alt="Caret Up" />
          </button>
          {/* social icons */}
          {/* gap-[40px] */}
          <div className="flex gap-[10px] sm:gap-[20px] lg:gap-[40px]">
            <div className="sm:text-[20px]">
              <FaFacebookF />
            </div>
            <div className="sm:text-[20px]">
              <FaTwitter />
            </div>
            <div className="sm:text-[20px]">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer