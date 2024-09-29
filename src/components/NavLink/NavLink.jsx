const NavLink = (props) => {
    const { content } = props

    return (
        // nav link
        <a className="font-josefinSans font-bold text-[14px] text-black cursor-pointer hover:underline hover:underline-offset-8 md:text-white lg:text-[16px] xl:text-[18px]">
            {content}
        </a>
    )
}
export default NavLink