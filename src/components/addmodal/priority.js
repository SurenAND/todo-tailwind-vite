import { El } from "../shared/el";

export const Priority = () => {
  return El({
    element: "div",
    className: "flex flex-col w-full",
    children: [
      El({
        element: "h5",
        className: "mb-3",
        innerText: "Priority :",
      }),
      El({
        element: "div",
        className: "flex gap-4 w-full",
        children: [
          // Low
          El({
            element: "div",
            children: [
              El({
                element: "input",
                className: "peer hidden",
                id: "low-priority",
                name: "priority",
                value: "Low",
                type: "radio",
              }),
              El({
                element: "label",
                className:
                  "select-none cursor-pointer rounded-3xl border-2 border-gray-300 py-1 px-3 font-bold text-gray-300 peer-checked:bg-gray-300 peer-checked:text-gray-700 peer-checked:border-gray-300",
                restAttrs: {
                  for: "low-priority",
                },
                innerText: "Low",
              }),
            ],
          }),
          // Medium
          El({
            element: "div",
            children: [
              El({
                element: "input",
                className: "peer hidden",
                id: "medium-priority",
                name: "priority",
                value: "Medium",
                type: "radio",
              }),
              El({
                element: "label",
                className:
                  "select-none cursor-pointer rounded-3xl border-2 border-yellow-500 py-1 px-3 font-bold text-yellow-500 peer-checked:bg-yellow-500 peer-checked:text-gray-700 peer-checked:border-yellow-500",
                restAttrs: {
                  for: "medium-priority",
                },
                innerText: "Medium",
              }),
            ],
          }),
          // High
          El({
            element: "div",
            children: [
              El({
                element: "input",
                className: "peer hidden",
                id: "high-priority",
                name: "priority",
                value: "High",
                type: "radio",
              }),
              El({
                element: "label",
                className:
                  "select-none cursor-pointer rounded-3xl border-2 border-red-600 py-1 px-3 font-bold text-red-600 peer-checked:bg-red-600 peer-checked:text-gray-100 peer-checked:border-red-600",
                restAttrs: {
                  for: "high-priority",
                },
                innerText: "High",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
