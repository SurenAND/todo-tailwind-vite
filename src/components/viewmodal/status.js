import { El } from "../../utils";

export const ViewStatus = () => {
  return El({
    element: "div",
    className: "flex flex-col items-center w-full",
    children: [
      El({
        element: "h5",
        className: "mb-3",
        innerText: "::: Status :::",
      }),
      El({
        element: "span",
        className:
          "select-none rounded-3xl border-2 border-purple-500 text-purple-500 py-1 px-3 font-bold",
        id: "view-status",
        innerText: "Todo",
      }),
    ],
  });
};
