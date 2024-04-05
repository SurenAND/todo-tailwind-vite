import { El } from "../../utils";
import { openModal } from "../../utils";
import { MenuAndTitle } from "./menuTitle";
import { Search } from "./search";

export const Navbar = () => {
  function handleAdd() {
    const modalBox = document.getElementById("modal-box");
    openModal(modalBox);
  }

  function handleFilter() {
    const filterModal = document.getElementById("filter-modal");
    openModal(filterModal);
  }

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
            eventListener: [
              {
                event: "click",
                callback: handleFilter,
              },
            ],
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
            eventListener: [
              {
                event: "click",
                callback: handleAdd,
              },
            ],
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
