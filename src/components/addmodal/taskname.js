import { El } from "../../utils";

export const TaskName = () => {
  return El({
    element: "div",
    className: "w-full",
    children: [
      El({
        element: "h5",
        className: "mb-2",
        innerText: "Task Name :",
      }),
      El({
        element: "input",
        className:
          "w-full border border-1 border-gray-300 rounded-md px-1 py-1 outline-1 outline-purple-700",
        name: "task-name",
        type: "text",
      }),
    ],
  });
};
