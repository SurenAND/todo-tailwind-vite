import { El } from "../shared/el";

export const MenuAndTitle = () => {
  return El({
    element: "div",
    className: "ml-3 text-center flex justify-center gap-2",
    children: [
      // menu
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
      // title
      El({
        element: "p",
        className: "text-white text-lg",
        innerText: "My To-Do Tasks",
      }),
    ],
  });
};
