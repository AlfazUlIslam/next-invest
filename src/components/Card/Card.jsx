import CardButton from "../CardButton/CardButton"
import Stat from "../Stat/Stat"

const Card = (props) => {
    const { image } = props
  return (
    // card
    <div className="w-[250px] h-[360px] shadow-xl overflow-hidden lg:w-[370px] lg:h-[480px]">
        {/* card image & buttons */}
        <div className="w-[250px] h-[170px] relative lg:w-[370px] lg:h-[240px]">
            {/* image */}
            <img className="w-[100%] h-[100%]" src={image} alt="Skyscraper" />
            {/* buttons */}
            <div className="absolute top-[12px] left-[12px] space-x-[8px] lg:top-[24px] lg:left-[24px]">
                <CardButton content="HOME" />
                <CardButton content="FAMILY BUSINESS" />
            </div>
        </div>
        {/* card content */}
        <div className="relative z-10 w-[250px] h-[360px] bg-white transition-all duration-1000 hover:translate-y-[-171px] lg:w-[370px] lg:h-[480px] lg:hover:translate-y-[-240px]">
            {/* card content text */}
            <div className="p-[12px] flex flex-col gap-[14px] lg:p-[24px] lg:gap-[24px]">
            {/* title & address */}
            <div>
                {/* title */}
                <h3 className="font-josefinSans font-bold text-[20px] text-niGreyPrimary lg:text-[24px]">Oxalis</h3>
                {/* address */}
                <div className="font-josefinSans font-normal text-[12px] text-niGreySecondary lg:text-[16px]">Brooklyn, NY</div>
            </div>
            {/* description */}
            <p className="font-josefinSans font-normal text-[12px] text-niGreyPrimary lg:text-[16px]">
                A recognized leader in language immersion & early education, opening second school.
            </p>
            {/* progress bar & donation */}
            <div className="flex flex-col gap-[8px]">
                {/* progress bar */}
                <div className="w-[100%] h-[4px] bg-niGreyProgress lg:w-[322px] lg:h-[8px]">
                    {/* progress */}
                    <div className="w-[70px] h-[4px] bg-niPurple lg:w-[182px] lg:h-[8px]"></div>
                </div>
                {/* donation */}
                <div className="space-x-1">
                    {/* raised */}
                    <span className="font-bold text-[10px] text-niPurple lg:text-[16px]">$574,920</span>
                    {/* target */}
                    <span className="font-bold text-[10px] text-niGreyPrimary lg:text-[16px]">raised of $1,000,000</span>
                </div>
            </div>
            {/* horizontal line */}
            <hr className="text-niGreyProgress" />
                {/* stats */}
                <div>
                    {/* stat 1 */}
                    <Stat
                        category="Security Type"
                        value="Revenue Sharing Note"
                    />
                    {/* stat 2 */}
                    <Stat
                        category="Investment Multiple"
                        value="1.4x"
                    />
                    {/* stat 3 */}
                    <Stat
                        category="Maturity"
                        value="48 Months"
                    />
                    {/* stat 4 */}
                    <Stat
                        category="Min. Investment"
                        value="$100"
                    />
                </div>
            </div>
            {/* card content button */}
            <div className="mt-[17px]">
                <button className="w-[100%] bg-niPink font-josefinSans font-bold text-[12px] text-niPurple py-[21px] lg:text-[16px] lg:py-[25px]">VIEW</button>
            </div>
        </div>
    </div>
  )
}
export default Card