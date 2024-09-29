const SectionButton = (props) => {
    const { content } = props

    return (
        <button className="bg-niPurple px-[30px] py-[16px] font-josefinSans font-bold text-[12px] text-white transition-all duration-1000 hover:bg-niPink hover:text-niPurple active:scale-90 lg:text-[14px] xl:px-[80px] xl:py-[22px] xl:text-[16px]">
            {content}
        </button>
  )
}
export default SectionButton