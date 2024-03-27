import { El } from "../shared/el";

export const FilterPriority = () => {
  return El({
    element: "div",
    className: "flex flex-col items-center",
    children: [
      El({
        element: "h5",
        className: "my-10",
        innerText: "::: Priority :::",
      }),
      El({
        element: "div",
        className: "flex gap-4",
        children: [
          // Low
          El({
            element: "div",
            children: [
              El({
                element: "input",
                className: "peer hidden",
                id: "f-low-priority",
                name: "priority",
                value: "Low",
                type: "radio",
              }),
              El({
                element: "label",
                className:
                  "select-none cursor-pointer rounded-3xl border-2 border-gray-300 py-1 px-3 font-bold text-gray-300 peer-checked:bg-gray-300 peer-checked:text-gray-700 peer-checked:border-gray-300",
                restAttrs: {
                  for: "f-low-priority",
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
                id: "f-medium-priority",
                name: "priority",
                value: "Medium",
                type: "radio",
              }),
              El({
                element: "label",
                className:
                  "select-none cursor-pointer rounded-3xl border-2 border-yellow-500 py-1 px-3 font-bold text-yellow-500 peer-checked:bg-yellow-500 peer-checked:text-gray-700 peer-checked:border-yellow-500",
                restAttrs: {
                  for: "f-medium-priority",
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
                id: "f-high-priority",
                name: "priority",
                value: "High",
                type: "radio",
              }),
              El({
                element: "label",
                className:
                  "select-none cursor-pointer rounded-3xl border-2 border-red-600 py-1 px-3 font-bold text-red-600 peer-checked:bg-red-600 peer-checked:text-gray-100 peer-checked:border-red-600",
                restAttrs: {
                  for: "f-high-priority",
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
