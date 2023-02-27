import {useLoaderData} from "react-router-dom"


const Cards = () => {

  const bookkmarks = useLoaderData()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Resources</h2>
        </div>
        <ul
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {bookkmarks.map((bookmark) => (
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

