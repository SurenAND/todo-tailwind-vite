import { El } from "../shared/el";
import { MenuAndTitle } from "./menuTitle";
import { Search } from "./search";

export const Navbar = () => {
  return El({
    element: "nav",
    className: "bg-purple-800 p-3 flex gap-2 justify-between items-center",
    children: [
      MenuAndTitle(),
      // search , filter & add
      El({
        element: "div",
        className: "flex gap-5 pr-3 sm:justify-center justify-between",
        children: [
          Search(),
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
          // add
          El({
            element: "button",
            id: "add",
            className: "cursor-pointer",
            children: [
              El({
                element: "img",
                src: "./src/assets/add.svg",
                alt: "add",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
