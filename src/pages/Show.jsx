import Navbar from "../components/Navbar";
import { useLoaderData, Link, Form } from "react-router-dom"

// const item = {
//   title: 'Everyday Ruck Snack',
//   category: "Data Science",
//   subCategory: "Machine Learning",
//   description:
//     "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
//   img: 'https://images.rawpixel.com/image_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg'
// }

const Show = () => {

  const item = useLoaderData();

return (
<div>
<Navbar/>
<div className="bg-white text-gray-500">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            {/* <h2 id="features-heading" className="font-medium text-gray-500">
              category
            </h2> */}
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">{item.title}</p>
            <p className="mt-4 text-gray-500">
            {item.description}
            </p>
            <br/>
            <h1 className="text-base font-semibold leading-6 text-gray-900">Edit {item.title}</h1>
            <br/>
            <Form action={`/update/${item.id}`} method="post" className="space-y-8 divide-y divide-gray-200">

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Title
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  name="title"
                  type="text"
                  defaultValue={item.title}
                  className="block w-full p-3 max-w-lg rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Description
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <textarea
                  name="description"
                  type="text"
                  defaultValue={item.description}
                  className="block w-full p-3 max-w-lg rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Image
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  name="img"
                  type="text"
                  defaultValue={item.img}
                  className="block w-full p-3 max-w-lg rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <button
                  type="submit"
                  className=" max-w-2xl mb-6 font-medium uppercase leading-normal bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full"
                >
                 Save Changes
                </button>
      </Form>
<br/>
      <Form action={`/delete/${item.id}`} method="post">
                <button
                  type="submit"
                  className="inline-block rounded-full border-2 border-red px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-red transition duration-150 ease-in-out hover:border-red-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-red-600 focus:border-red-600 focus:text-red-600 focus:outline-none focus:ring-0 active:border-red-700 active:text-red-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                >
                  Delete Resource
                </button>
      </Form>
      
          </div>
        </div>
      </section>
    </div>
</div>
  )
}

export default Show;

