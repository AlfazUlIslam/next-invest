const NavLink = (props) => {
    const { href, content } = props

    return (
        // nav link
        <a 
            href={`#${href}`}
            className="font-josefinSans font-bold text-[14px] text-black cursor-pointer hover:underline hover:underline-offset-8 md:text-white lg:text-[16px] xl:text-[18px]"
        >
            {content}
        </a>
    )
}
export default NavLink