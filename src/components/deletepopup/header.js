import { El } from "../shared/el";

export const DeleteHeader = () => {
  return El({
    element: "div",
    className:
      "flex justify-center rounded-t-lg p-4 bg-purple-600 text-gray-300",
    children: [
      El({
        element: "p",
        className: "font-semibold text-2xl",
        innerText: "Deleting...",
      }),
    ],
  });
};
