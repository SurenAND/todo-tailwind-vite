import { El } from "../shared/el";

export const Table = () => {
  return El({
    element: "table",
    className: "w-full border-2 overflow-x-auto",
    children: [
      El({
        element: "thead",
        className: "font-medium",
        children: [
          El({
            element: "tr",
            children: [
              El({
                element: "td",
                className: "border-l-2 border-b-2 py-4 pl-6",
                innerText: "Task Name",
              }),
              El({
                element: "td",
                className: "text-center border-l-2 border-b-2",
                innerText: "Priority",
              }),
              El({
                element: "td",
                className: "text-center border-l-2 border-b-2",
                innerText: "Status",
              }),
              El({
                element: "td",
                className: "text-center border-l-2 border-b-2",
                innerText: "Deadline",
              }),
              El({
                element: "td",
                className: "text-center border-l-2 border-b-2",
                innerText: "Actions",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "tbody",
        id: "tbody",
      }),
    ],
  });
};
