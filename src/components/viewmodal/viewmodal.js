import { El } from "../shared/el";
import { ViewDeadline } from "./deadline";
import { ViewDescription } from "./description";
import { ViewPriority } from "./priority";
import { ViewStatus } from "./status";

export const ViewModal = () => {
  return El({
    element: "div",
    className:
      "absolute inset-0 backdrop-blur-sm bg-slate-300 bg-opacity-30 flex items-center justify-center z-20 invisible",
    id: "view-box",
    dataset: {
      close: "close",
    },
    children: [
      El({
        element: "div",
        className:
          "flex flex-col md:w-6/12 w-8/12 lg:w-4/12 bg-white relative rounded-lg",
        children: [
          El({
            element: "h1",
            className: "text-xl text-purple-800 font-black p-3 text-center",
            id: "view-task-name",
            innerText: "Task Name",
          }),
          El({
            element: "div",
            className:
              "flex flex-col items-center gap-4 w-full p-4 border-t-2 border-purple-700",
            children: [
              //priority & status
              El({
                element: "div",
                className: "flex items-center w-full",
                children: [ViewPriority(), ViewStatus()],
              }),
              ViewDeadline(),
              ViewDescription(),
            ],
          }),
        ],
      }),
    ],
  });
};
