import { El } from "../shared/el";
import { Deadline } from "./deadline";
import { Description } from "./description";
import { Priority } from "./priority";
import { Status } from "./status";
import { TaskName } from "./taskname";

export const Form = () => {
  return El({
    element: "form",
    className: "flex flex-col gap-4 w-full p-4 border-t-2 border-purple-700",
    id: "form",
    children: [
      TaskName(),
      // priority & status
      El({
        element: "div",
        className: "flex justify-between",
        children: [Priority(), Status()],
      }),
      Deadline(),
      Description(),
      // cancel & save
      El({
        element: "div",
        className: "flex justify-between mt-3",
        children: [
          // cancel
          El({
            element: "button",
            className:
              "text-purple-500 border border-purple-500 rounded-lg w-32 h-10",
            id: "cancel",
            type: "button",
            innerText: "CANCEL",
          }),
          // Save
          El({
            element: "button",
            className: "bg-purple-500 text-white rounded-lg w-32 h-10",
            type: "submit",
            innerText: "SAVE",
          }),
        ],
      }),
    ],
  });
};
