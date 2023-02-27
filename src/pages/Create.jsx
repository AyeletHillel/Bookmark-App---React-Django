import { Form } from "react-router-dom";
import Navbar from "../components/Navbar";


const Create = () => {
    return (<div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
        <h1 class="max-w-2xl mb-4 text-1xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-gray-900">Add New Resource</h1>
        <Form action="/create" method="post">
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-4">
              <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Title
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  name="title"
                  type="text"
                  placeholder="write resource title here"
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
                  placeholder="write resource description here"
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
                  placeholder="add image URL here"
                  className="block w-full p-3 max-w-lg rounded-md border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <br/>
            <button
                  type="submit"
                  className="max-w-2xl mb-6 font-medium uppercase leading-normal bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full"
                >
                 Add Resource
                </button>
                </Form>
                <br/>
        </div>
    )
}

export default Create;