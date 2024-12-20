
import Refresh from '../../../assets/refresh.svg'
import Plus from '../../../assets/plus.svg'
import SearchBar from "../../ui/searchBar";
import { RepositoriesData } from "../../../constants/RepositoriesData";
import RepositoryCard from "../../ui/repositoryCard";
import Button from '../../ui/button';
const RepositoriesSection = () =>{
    return(<div className="md:flex-1 border-[#E9EAEB] border md:m-5 md:rounded-xl md:bg-white md:p-4">
                <div className="flex p-4 flex-col md:flex-row gap-4 justify-between"> 
                    <div className="flex flex-col font-[Inter] text-[#181D27] gap-3">
                        <h2 className="flex flex-col text-[1.5rem] leading-6 font-semibold ">
                        Repositories
                        </h2>
                        <span className="text-[0.875rem] leading-[1.25rem] font-normal ">33 total repositories</span>
                    </div>
                    <div className="flex font-[Inter] font-normal w-3/4 md:w-fit text-[#181D27] gap-3 md:items-center">
                        <Button className=" h-fit text-[#414651] border-2 border-[#D5D7DA]">
                            <img src={Refresh}/>
                            Refresh All
                        </Button>
                        <Button className="h-fit bg-[#1570EF] border-2 border-[#1570EF] text-white">
                            <img src={Plus}/>
                            Add Repository
                        </Button>
                    </div>
                    
                </div>
                <div className="flex p-4 md:w-1/3">
                    <SearchBar/>
                </div>
                <div className="flex flex-col">
                        {
                            RepositoriesData.map((repo)=>{
                                return (
                                    <RepositoryCard title={repo.title} lang={repo.language} size={repo.size} type={repo.type} updatedAt={repo.updatedAt} key={repo.title}></RepositoryCard>
                                )
                            })
                        }
                </div>
    </div>);
}

export default RepositoriesSection