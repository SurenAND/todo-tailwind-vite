import { El } from "../shared/el";
import { FilterDeadline } from "./deadline";
import { FilterPriority } from "./priority";
import { FilterStatus } from "./status";

export const FilterModal = () => {
  return El({
    element: "div",
    className:
      "invisible absolute w-full h-full items-center justify-center z-[1000] inset-0 backdrop-blur-sm bg-slate-300 bg-opacity-30",
    id: "filter-modal",
    dataset: {
      close: "close",
    },
    children: [
      El({
        element: "div",
        className:
          "flex gap-20 flex-col items-center justify-center absolute right-0 h-full md:w-4/12 lg:w-3/12 w-6/12 sm:w-5/12 bg-white px-4",
        children: [
          El({
            element: "div",
            className: "flex justify-between",
            children: [
              El({
                element: "span",
                className:
                  "text-3xl text-purple-800 font-black uppercase p-3 text-center",
                innerText: "Filters",
              }),
            ],
          }),
          El({
            element: "div",
            className: "w-full flex flex-col gap-20",
            children: [FilterPriority(), FilterStatus(), FilterDeadline()],
          }),
        ],
      }),
    ],
  });
};
