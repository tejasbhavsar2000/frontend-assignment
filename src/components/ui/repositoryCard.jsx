import Database from "../../assets/database.svg"
const RepositoryCard = ({title, type, lang, size, updatedAt}) =>{
    return(
        <div className="border-y p-4 font-[Inter] border-y-[#D5D7DA] w-full flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[1.125rem] leading-6 font-medium">
                {title}
                <span className="border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3] rounded-full text-[0.875rem] leading-5 px-2">
                    {type}
                </span>
            </div>
            <div className="flex items-center gap-6 text-[0.875rem] leading-5 text-nowrap">
                <div className="flex items-center gap-2">
                    {lang} <div className="w-2 h-2 bg-[#1570EF] rounded-full"/>
                </div>
                <div className="flex items-center gap-2">
                     <img src={Database} className=""/> {size}
                </div>
                <div className="flex items-center gap-2">
                    {updatedAt}
                </div>
            </div>
        </div>
    )
}

export default RepositoryCard;