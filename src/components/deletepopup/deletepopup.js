import { El } from "../shared/el";
import { DeleteBody } from "./body";
import { DeleteFooter } from "./footer";
import { DeleteHeader } from "./header";

export const DeletePopup = () => {
  return El({
    element: "section",
    className:
      "invisible flex justify-center items-center fixed z-30 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-80",
    id: "delete-section",
    children: [
      El({
        element: "div",
        className: "bg-gray-300 p-0 border-2 border-gray-500 rounded-lg w-1/3",
        children: [DeleteHeader(), DeleteBody(), DeleteFooter()],
      }),
    ],
  });
};
