const FooterTitle = (props) => {
    const { content } = props
        
    return (
        // footer title
        <h5 className="font-josefinSans font-bold text-[16px] text-niGreyPrimary text-center sm:text-[18px] lg:text-start">
            {content}
        </h5>
    )
}
export default FooterTitle