const CardButton = (props) => {
    const { content } = props
        
    return (
        // card button
        <button className="bg-glass px-[8px] py-[4px] font-josefinSans font-bold text-[8px] text-niGreyPrimary transition-all duration-1000 hover:bg-white active:scale-90 lg:px-[12px] lg:py-[8px] lg:text-[10px]">
            {content}
        </button>
    )
}
export default CardButton