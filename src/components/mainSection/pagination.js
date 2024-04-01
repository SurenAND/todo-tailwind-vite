import { El } from "../shared/el";

export const Pagination = () => {
  return El({
    element: "div",
    className: "w-full flex justify-end p-3 select-none",
    id: "paginate",
    children: [
      El({
        element: "div",
        className: "flex gap-12 items-center justify-center",
        children: [
          // tasks per page
          El({
            element: "div",
            className: "flex gap-3 items-center justify-center",
            children: [
              El({
                element: "span",
                innerText: "Tasks per page:",
              }),
              El({
                element: "div",
                className: "min-w-4 relative",
                id: "dropdown",
                children: [
                  El({
                    element: "div",
                    className:
                      "w-16 p-2 font-bold text-sm flex justify-around cursor-pointer",
                    id: "select",
                    children: [
                      El({
                        element: "span",
                        id: "selected",
                        innerText: "5",
                      }),
                      El({
                        element: "img",
                        className: "w-3",
                        id: "chevron-down",
                        src: "./src/assets/chevron-d.svg",
                        alt: "chevron-down",
                      }),
                    ],
                  }),
                  El({
                    element: "ul",
                    className:
                      "py-1 px-2 border border-solid border-purple-800 shadow-[0_0.5rem_1rem_border-purple-800] rounded-lg absolute top-10 w-24 z-10 hidden",
                    id: "menu",
                    children: [
                      El({
                        element: "li",
                        className:
                          "font-bold text-sm py-1 px-2 my-1 rounded-lg text-center cursor-pointer hover:bg-purple-400 hover:text-white",
                        innerText: "5",
                      }),
                      El({
                        element: "li",
                        className:
                          "font-bold text-sm py-1 px-2 my-1 rounded-lg text-center cursor-pointer hover:bg-purple-400 hover:text-white",
                        innerText: "10",
                      }),
                      El({
                        element: "li",
                        className:
                          "font-bold text-sm py-1 px-2 my-1 rounded-lg text-center cursor-pointer hover:bg-purple-400 hover:text-white",
                        innerText: "15",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          // from - to of total
          El({
            element: "div",
            className: "text-sm",
            children: [
              El({
                element: "span",
                className: "font-medium mx-1",
                id: "start-item",
              }),
              "-",
              El({
                element: "span",
                className: "font-medium mx-1",
                id: "end-item",
              }),
              "of",
              El({
                element: "span",
                className: "font-medium mx-1",
                id: "total-items",
              }),
            ],
          }),
          // prev and next
          El({
            element: "div",
            className: "flex justify-center gap-5",
            children: [
              El({
                element: "img",
                className: "cursor-pointer",
                id: "prev",
                src: "./src/assets/chevron-l.svg",
                alt: "chevron-l",
              }),
              El({
                element: "img",
                className: "cursor-pointer",
                id: "next",
                src: "./src/assets/chevron-r.svg",
                alt: "chevron-r",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
