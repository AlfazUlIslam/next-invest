const FooterLink = (props) => {
    const { content } = props
        
    return (
        <a className="font-josefinSans font-normal text-[14px] text-niGreyPrimary text-center cursor-pointer hover:text-niPurple sm:text-[16px] lg:text-start">
            {content}
        </a>
    )
}
export default FooterLink