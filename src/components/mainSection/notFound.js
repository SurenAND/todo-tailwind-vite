import { El } from "../shared/el";

export const NotFound = () => {
  return El({
    element: "div",
    id: "notFound",
    className: "flex flex-col items-center gap-10 hidden",
    children: [
      El({
        element: "img",
        className: "w-1/2",
        src: "./src/assets/404.svg",
      }),
      El({
        element: "p",
        className: "text-sm md:text-3xl text-purple-800 font-bold p-2 mb-4",
        innerText: "The stuff you were looking for doesn't exist",
      }),
    ],
  });
};
