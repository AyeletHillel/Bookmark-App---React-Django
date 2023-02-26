import {useLoaderData} from "react-router-dom"

const Cards = () => {
  const bookkmarks = useLoaderData()
    return bookkmarks.map(bookmark => (  
      <div className="grid-flow-col">
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src={bookmark.img}
            alt="image"
            class="w-full"
          />
          <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href={`/bookmarks/${bookmark.id}`}
                class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {bookmark.title}
              </a>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
            {bookmark.description}
            </p>
            <a href={`/bookmarks/${bookmark.id}`}
              class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition"
            >  
              View Details
            </a>
          </div>
        </div>
      </div>
      </div>
    ))
};

export default Cards; 