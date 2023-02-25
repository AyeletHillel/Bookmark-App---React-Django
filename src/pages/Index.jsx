import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Create from "./Create";

const Index = () => {
    return (<div>
        <Navbar/>
        <Header/>
        <section class="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap"></div>
        <Create/>
        <Cards/>
        </div>
        </section>
        </div>
    )
};

export default Index; 