
const Header = () => {
    return(
<section class="bg-white dark:bg-gray-200">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-gray-900">Easily Find Great Resources for Learning Data Science and Software Engineering</h1>
            <p class="max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-900">Data PM is a community of knowledge sharing. <br/> 
            Our website offers a curated list of helpful tutorials, articles, and more to help you on your educational journey. <br/> 
            We’re also always open to suggestions and contributions from the community — if you’ve come across a great resource that you believe should be shared, simply click the "Add Resource" button and fill out the form. </p>
            <button class="max-w-2xl mb-6  bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full">
Add Resource
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