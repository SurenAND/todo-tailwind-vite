import { El } from "../shared/el";

export const FilterClear = () => {
  return El({
    element: "div",
    className: "flex justify-center items-center",
    children: [
      El({
        element: "button",
        id: "filter-clear",
        className:
          "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-semibold text-lg rounded-lg px-5 py-3 text-center flex justify-center items-center gap-2",
        children: [
          El({
            element: "img",
            src: "./src/assets/delete.svg",
          }),
          El({
            element: "span",
            innerText: "Clear Filters",
          }),
        ],
      }),
    ],
  });
};
