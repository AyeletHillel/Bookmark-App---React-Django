
const Header = () => {
    return(
<section class="bg-white dark:bg-gray-200">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray-900">Resources for People who Love Learning</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-900">Free Data Sciene and Software Engineering resources to help you advance your skillset</p>
            <button class="bg-[#db2777] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
Add New Resource
</button>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img class="max-w-full h-auto rounded-full" src="https://www.oohology.com/uploads/blog/image/full_2x_OOH_WomenWhoCode2.jpg" alt="mockup"/>
        </div>                
    </div>
</section>

    )
}

export default Header; 