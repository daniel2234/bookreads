import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.value)
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="pt-2 mt-4">
      <div>
        <h3 className="text-base ml-2 font-semibold leading-6 text-gray-900">
          Add a Book
        </h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="block ml-2 text-sm font-medium leading-6 text-gray-900">
            Title
          </label>
          <input
            className="block w-80 ml-2 mr-2 mt-2 my-2 rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={title}
            onChange={handleChange}
          />
          <button className="rounded-md bg-indigo-600 ml-2 mt-2 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookCreate;
