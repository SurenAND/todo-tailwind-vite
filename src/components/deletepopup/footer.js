import { El } from "../shared/el";

export const DeleteFooter = () => {
  return El({
    element: "div",
    className: "rounded-b-lg p-4 flex justify-evenly",
    children: [
      // cancel
      El({
        element: "button",
        className:
          "border-2 border-purple-600 rounded-md shadow-lg w-28 h-10 text-purple-600 bg-white font-bold text-sm mt-2 mr-8 hover:bg-purple-400 hover:scale-110 hover:text-white",
        id: "delete-content-cancel",
        innerText: "Cancel",
      }),
      // delete
      El({
        element: "button",
        className:
          "border-2 border-purple-600 rounded-md shadow-lg w-28 h-10 text-purple-600 bg-white font-bold text-sm mt-2 mr-8 hover:bg-purple-400 hover:scale-110 hover:text-white",
        id: "delete-content-delete",
        innerText: "Delete",
      }),
    ],
  });
};
