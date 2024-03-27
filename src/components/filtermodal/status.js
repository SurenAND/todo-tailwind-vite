import { El } from "../shared/el";

export const FilterStatus = () => {
  return El({
    element: "div",
    className: "flex flex-col  items-center",
    children: [
      El({
        element: "h5",
        className: "my-10",
        innerText: "::: Status :::",
      }),
      El({
        element: "div",
        className: "flex gap-4",
        children: [
          // todo
          El({
            element: "div",
            children: [
              El({
                element: "input",
                className: "peer hidden",
                id: "f-todo-status",
                name: "status",
                value: "Todo",
                type: "radio",
              }),
              El({
                element: "label",
                className:
                  "select-none cursor-pointer rounded-3xl border-2 border-red-600 py-1 px-3 font-bold text-red-600 peer-checked:bg-red-600 peer-checked:text-gray-100 peer-checked:border-red-600",
                restAttrs: {
                  for: "f-todo-status",
                },
                innerText: "Todo",
              }),
            ],
          }),
          // Doing
          El({
            element: "div",
            children: [
              El({
                element: "input",
                className: "peer hidden",
                id: "f-doing-status",
                name: "status",
                value: "Doing",
                type: "radio",
              }),
              El({
                element: "label",
                className:
                  "select-none cursor-pointer rounded-3xl border-2 border-yellow-500 py-1 px-3 font-bold text-yellow-500 peer-checked:bg-yellow-500 peer-checked:text-gray-700 peer-checked:border-yellow-500",
                restAttrs: {
                  for: "f-doing-status",
                },
                innerText: "Doing",
              }),
            ],
          }),
          // Done
          El({
            element: "div",
            children: [
              El({
                element: "input",
                className: "peer hidden",
                id: "f-done-status",
                name: "status",
                value: "Done",
                type: "radio",
              }),
              El({
                element: "label",
                className:
                  "select-none cursor-pointer rounded-3xl border-2 border-green-800 py-1 px-3 font-bold text-green-800 peer-checked:bg-green-800 peer-checked:text-gray-100 peer-checked:border-green-800",
                restAttrs: {
                  for: "f-done-status",
                },
                innerText: "Done",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
