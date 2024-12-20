import NavBar from "../../components/layout/navBar";

import RepositoriesSection from "../../components/layout/HomePage/repositoriesSection";
const HomePage = () =>{
    return(
        <main className=" flex flex-col w-full md:relative md:flex-row min-h-screen md:bg-[#FAFAFA]">
            <NavBar/>
            <RepositoriesSection/>
        </main>
    )
}

export default HomePage;