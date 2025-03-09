import { Card } from "../../components"
import { skyscraper, highway, buildingWithTrees, laptop, office, paddy } from "../../assets"

const Offerings = () => {
  return (
    // offerings
    <section id="offerings">
      {/* container */}
      <div className="container px-6 py-[60px] lg:py-[160px]">
        {/* content */}
        <div>
          {/* heading */}
          <h2 className="font-josefinSans font-bold text-[26px] text-niGreyPrimary text-center sm:text-[32px] md:text-[35px] lg:text-[45px] xl:text-[48px]">
            Offerings open for investment
          </h2>
          {/* description */}
          <p className="w-[280px] font-josefinSans font-normal text-[16px] text-niGreySecondary text-center mx-auto mt-[24px] mb-[60px] md:w-[350px] md:text-[18px] lg:w-[550px] lg:text-[22px] xl:w-[770px] xl:text-[24px]">
            Explore pre-vetted investment opportunities available in a growing number of industry categories.
          </p>
        </div>
        {/* cards */}
        <div className="flex flex-wrap gap-[20px] justify-center">
          <Card image={skyscraper} />
          <Card image={highway} />
          <Card image={buildingWithTrees} />
          <Card image={laptop} />
          <Card image={office} />
          <Card image={paddy} />
        </div>
      </div>
    </section>
  )
}
export default Offerings