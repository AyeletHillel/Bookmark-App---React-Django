import {useLoaderData} from "react-router-dom"
import {useState, useRef} from "react"
import useSearch from "../useSearch";


const Cards = () => {

  const bookkmarks = useLoaderData()

  const [displayedBookmarks, filterBookmarks, resetBookmarks] = useSearch(bookkmarks, (term) => {
    return bookkmarks.filter((bookmark) => {
      return bookmark.title.toLowerCase().includes(term.toLowerCase())
    })
  })

  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    const search = inputRef.current.value
    if (search == "") {
      resetBookmarks()
      return 1
    }
    filterBookmarks(search)
  }


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Resources</h2>
          <br/>
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" ref={inputRef} id="default-search" class="block w-full max-w-30 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Resources..." required/>
        <button onClick={handleSubmit} type="submit" class=" uppercase text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
        </div>
        <ul
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {displayedBookmarks.map((bookmark) => (
            <li key={bookmark.title}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={bookmark.img} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{bookmark.title}</h3>
              <p className="text-base leading-7 text-gray-600">{bookmark.description}</p>
              <a href={`/bookmarks/${bookmark.id}`}
              class="mt-5 text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition"
            >  
              View Details
            </a>
              <ul role="list" className="mt-6 flex gap-x-6">
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Cards; 

