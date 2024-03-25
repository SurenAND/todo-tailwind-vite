import { El } from "./shared/el";

export const Navbar = () => {
  return El({
    element: "nav",
    className: "bg-purple-800 p-3 flex gap-2 justify-between items-center",
    children: [
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
        ],
      }),
    ],
  });
};
