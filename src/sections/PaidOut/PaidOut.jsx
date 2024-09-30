import { paidOutImage, subtract, chart } from "../../assets"

const PaidOut = () => {
  return (
    // paid out
    <section
      className="bg-center bg-cover bg-no-repeat"
      style={{backgroundImage: `url(${paidOutImage})`}}
    >
      {/* container */}
      <div className="container px-6 py-[60px] flex flex-col gap-[40px] items-center lg:py-[160px] lg:flex-row lg:gap-0 lg:justify-between">
        {/* content */}
        <div>
          {/* image */}
          <div>
            <img className="w-[40px] mx-auto lg:w-auto lg:mx-0" src={subtract} alt="Flow Line" />
          </div>
          {/* heading */}
          <h1 className="w-[280px] font-josefinSans font-bold text-[26px] text-niGreyPrimary text-center mt-[40px] mb-[24px] sm:w-[400px] sm:text-[32px] md:w-[450px] md:text-[35px] lg:w-[570px] lg:text-[48px] lg:text-start">
            $7M+ paid out to investors
          </h1>
          {/* description */}
          <p className="w-[220px] font-josefinSans font-normal text-[16px] text-white text-center mx-auto sm:w-[320px] md:w-[350px] md:text-[18px] lg:w-[570px] lg:text-[24px] lg:text-start lg:mx-0">
            Next Invest has already paid out over $7M in cash returns to investors. Earn potential cash payments through unique revenue-share and debt financing investments.
          </p>
        </div>
        {/* chart image */}
        <div>
          <img className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-auto" src={chart} alt="Flow Chart" />
        </div>
      </div>
    </section>
  )
}
export default PaidOut