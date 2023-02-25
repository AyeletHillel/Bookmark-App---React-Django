import Navbar from "../components/Navbar";
import { Link, useLoaderData } from "react-router-dom"

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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="mt-4">
            <h1 className="m-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{item.title}</h1>
            <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Description
            </h2>
            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{item.description}</p>
            </div>
            <div className="mt-10">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Access Resource
                </button>
                <br/>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white hover:bg-indigo-700"
                >
                 Edit Resource
                </button>
                <br/>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Delete Resource
                </button>
              </div>
            </section>
            </div>
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
            <img src={item.img} alt={item.title} className="h-full w-full object-cover object-center" />
        </div>           
          </div>
      </div>
    </div>
    </div>
  )
}

export default Show;