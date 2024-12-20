import Search from "../../assets/search.svg"

const SearchBar = ({className})=>{
    return(
        <div className={`border border-[#D5D7DA] w-full flex  rounded-lg gap-2 items-center font-normal ${className}`}>
            <img className="px-2" src={Search}/>
            <input className="h-full p-3 w-full rounded-lg" placeholder="Search Repositories" type="text">
            </input>
        </div>
    )
}


export default SearchBar    