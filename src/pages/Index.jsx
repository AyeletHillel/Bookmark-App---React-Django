import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Create from "./Create";

const Index = () => {
    return (<div>
        <Navbar/>
        <Header/>
        <section class="bg-white sm:py-32">
        <div class="container mx-auto">
        <div class="flex flex-wrap"></div>
        <Create/>
        <Cards/>
        </div>    
        </section>
        
        </div>
    )
};

export default Index; 