import { El } from "./shared/el";

export const Navbar = () => {
  return El({
    element: "nav",
    className: "bg-purple-800 p-3 flex gap-2 justify-between items-center",
    children: [
      // menu and title
      El({
        element: "div",
        className: "ml-3 text-center flex justify-center gap-2",
        children: [
          El({
            element: "button",
            className: "cursor-pointer",
            children: [
              El({
                element: "img",
                className: "w-7",
                src: "./src/assets/burger-menu.svg",
                alt: "burger-menu",
              }),
            ],
          }),
          El({
            element: "p",
            className: "text-white text-lg",
            children: ["My To-Do Tasks"],
          }),
        ],
      }),
      // search , filter & add
      El({
        element: "div",
        className: "flex gap-5 pr-3 sm:justify-center justify-between",
        children: [
          // search
          El({
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
                  "focus:outline-none focus:ring-0 border-none text-white rounded bg-transparent placeholder:text-gray-400 text-sm",
                type: "text",
                id: "search-input",
                placeholder: "Search",
              }),
            ],
          }),
          // filter
          El({
            element: "button",
            id: "filter",
            className: "cursor-pointer",
            children: [
              El({
                element: "img",
                src: "./src/assets/filter.svg",
                alt: "filter",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
