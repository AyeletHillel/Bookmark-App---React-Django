const Navbar = () => {
    return (
    <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                <a href="" class="flex items-center">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DATA PM</span>
                </a>
                <div class="flex items-center">
                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline mr-6">Signup</a>
                <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline mr-6">Login</a>
                </div>
            </div>
        </nav>
        <nav class="bg-gray-50 dark:bg-gray-400">
            <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                <div class="flex items-center">
                    <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                        <li>
                            <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-900 dark:text-white hover:underline">About</a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-900 dark:text-white hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>)
}; 

export default Navbar; 