import { El } from "../shared/el";

export const Search = () => {
  return El({
    element: "div",
    className:
      "flex items-center bg-purple-600 p-2 px-5 gap-1 rounded-md w-full",
    children: [
      El({
        element: "img",
        className:
          "cursor-pointer text-center items-center justify-center mr-2",
        id: "search",
        src: "./src/assets/search.svg",
        alt: "search",
      }),
      El({
        element: "input",
        className:
          "focus:outline-none focus:ring-0 border-none text-white rounded bg-transparent placeholder:text-gray-400",
        type: "text",
        id: "search-input",
        placeholder: "Search",
      }),
    ],
  });
};
