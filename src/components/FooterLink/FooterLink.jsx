const FooterLink = (props) => {
    const { content } = props
        
    return (
        // footer link
        // text-[16px] text-start
        <a className="font-josefinSans font-normal text-[14px] text-niGreyPrimary text-center cursor-pointer hover:text-niPurple sm:text-[16px] lg:text-start">
            {content}
        </a>
    )
}
export default FooterLink