import { SectionButton } from "../../components"
import { cuate } from "../../assets"

const Apply = () => {
  return (
    // apply
    <section>
      {/* container */}
      <div className="container px-6 py-[60px] flex flex-col gap-[40px] items-center lg:py-[180px] lg:flex-row lg:gap-0 lg:justify-between">
        {/* content */}
        <div>
          {/* heading */}
          <h2 className="w-[280px] font-josefinSans font-bold text-[26px] text-niGreyPrimary text-center sm:w-[400px] sm:text-[32px] md:w-[450px] md:text-[35px] lg:w-[570px] lg:text-[48px] lg:text-start">
            Looking to raise capital
            for your growing business?
          </h2>
          {/* description */}
          <p className="w-[220px] font-josefinSans font-normal text-[16px] text-niGreySecondary text-center mt-[16px] mb-[26px] mx-auto sm:w-[320px] md:w-[350px] md:text-[18px] lg:w-[570px] lg:text-[24px] lg:text-start lg:mx-0 lg:mt-[24px] lg:mb-[40px]">
            Whether expanding or opening a brand-new concept, we make it easy to raise money from thousands of local investors.
          </p>
          {/* button */}
          <div className="text-center lg:text-start">
            <SectionButton content="APPLY ONLINE" />
          </div>
        </div>
        {/* image */}
        <div>
          <img className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-auto" src={cuate} alt="Person Watering Plants" />
        </div>
      </div>
    </section>
  )
}
export default Apply