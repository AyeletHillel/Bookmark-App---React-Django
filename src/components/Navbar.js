import { Link } from "react-router-dom";


const Navbar = () => {
    return (
    <div>
        <nav class="bg-white border-gray-200 bg-[#F3F4F6]">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                <a href="" class="flex items-center">
                    <h1 class="self-center text-2xl font-bold whitespace-nowrap dark:text-gray-900 font-display">DATA PM</h1>
                </a>
                <div class="flex items-center">
                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline mr-6">Signup</a>
                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline mr-6">Login</a>
                </div>
            </div>
        </nav>
        <nav class="bg-gray-50 bg-[#F3F4F6]">
            <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                <div class="flex items-center">
                    <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                        <Link to={"/"}>
                        <li>
                            <a href="#" class="text-gray-900 dark:gray-900 hover:underline" aria-current="page">Home</a>
                        </li>
                        </Link>
                        <li>
                            <a href="#" class="text-gray-900 dark:gray-900 hover:underline">About</a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-900 dark:gray-900 hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>)
}; 

export default Navbar; 