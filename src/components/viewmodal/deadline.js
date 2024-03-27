import { El } from "../shared/el";

export const ViewDeadline = () => {
  return El({
    element: "div",
    className: "flex flex-col items-center",
    children: [
      El({
        element: "h5",
        className: "mb-3",
        innerText: "::: Deadline :::",
      }),
      El({
        element: "span",
        className:
          "select-none rounded-3xl border-2 border-purple-500 py-1 px-3",
        id: "view-deadline",
        innerText: "1402/12/05",
      }),
    ],
  });
};
