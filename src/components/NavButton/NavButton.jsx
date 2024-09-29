const NavButton = (props) => {
    const { content } = props
        
    return (
        // nav button
        <button className="bg-niPurple px-[16px] py-[4px] font-josefinSans font-bold text-[12px] text-white transition-all duration-1000 hover:bg-niPink hover:text-niPurple active:scale-90 lg:px-[22px] lg:py-[10px] lg:text-[14px] xl:px-[28px] xl:py-[14px] xl:text-[14px]">
            {content}
        </button>
    )
}
export default NavButton