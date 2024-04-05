import { El } from "../../utils";

export const DeleteBody = () => {
  return El({
    element: "div",
    className: "h-[11vh] p-4 overflow-auto",
    children: [
      El({
        element: "p",
        className: "text-3xl text-center font-medium",
        innerText: "Are you sure you want to delete this section?",
      }),
    ],
  });
};
