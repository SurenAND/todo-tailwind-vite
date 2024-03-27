import { El } from "../shared/el";

export const FilterDeadline = () => {
  return El({
    element: "div",
    className: "flex flex-col items-center",
    children: [
      El({
        element: "h5",
        className: "my-10",
        innerText: "::: Deadline :::",
      }),
      El({
        element: "input",
        className:
          "text-center border border-1 border-gray-300 rounded-md px-1 py-1 outline-1 outline-purple-700 w-[307px]",
        restAttrs: {
          name: "deadline",
          type: "text",
          placeholder: "YYYY/MM/DD",
        },
        dataset: {
          jdp: "",
        },
      }),
    ],
  });
};
