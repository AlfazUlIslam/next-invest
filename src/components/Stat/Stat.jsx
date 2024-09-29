const Stat = (props) => {
    const { category, value } = props
        
    return (
        // stat
        <div className="flex justify-between">
            {/* category */}
            <span className="font-josefinSans font-normal text-[12px] text-niGreyPrimary lg:text-[16px]">
                {category}
            </span>
            {/* value */}
            <span className="font-josefinSans font-bold text-[12px] text-niGreyPrimary lg:text-[16px]">
                {value}
            </span>
        </div>
    )
}
export default Stat