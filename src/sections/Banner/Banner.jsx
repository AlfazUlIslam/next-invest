import { SectionButton } from "../../components"
import { bannerImage } from "../../assets"

const Banner = () => {
  return (
    // banner
    <section
      id="home"
      className="bg-center bg-cover bg-no-repeat"
      style={{backgroundImage: `url(${bannerImage})`}}
    >
      {/* container */}
      <div className="container px-6">
        {/* banner content */}
        <div className="flex flex-col gap-[10px] items-center pt-[120px] pb-[60px] md:pt-[160px] md:pb-[130px] md:items-start md:gap-[20px] xl:pt-[321px] xl:pb-[175px] gap-[40px]">
          {/* heading */}
          <h1 className="w-[280px] font-josefinSans font-bold text-[26px] text-white text-center sm:w-[400px] sm:text-[32px] md:w-[450px] md:text-[35px] md:text-start lg:w-[550px] lg:text-[45px] xl:w-[770px] xl:text-[60px]">
            Meaningful investments in
            Main Street businesses
          </h1>
          {/* description */}
          <p className="w-[220px] font-josefinSans font-normal text-[16px] text-white text-center sm:w-[320px] md:w-[350px] md:text-[18px] md:text-start lg:w-[400px] lg:text-[22px] xl:w-[470px] xl:text-[24px]">
            Browse vetted investment offerings in communities all over the US.
          </p>
          {/* button */}
          <div>
            <SectionButton content="GET STARTED" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner