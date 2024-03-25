import { El } from "./shared/el";

export const deletePopup = () => {
  return El({
    element: "section",
    className:
      "invisible flex justify-center items-center fixed z-30 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-80",
    id: "delete-section",
    children: [
      El({
        element: "div",
        className: "bg-gray-300 p-0 border-2 border-gray-500 rounded-lg w-1/3",
        children: [
          // pop up header
          El({
            element: "div",
            className:
              "flex justify-center rounded-t-lg p-4 bg-purple-600 text-gray-300",
            children: [
              El({
                element: "p",
                className: "font-semibold text-2xl",
                children: ["Deleting..."],
              }),
            ],
          }),
          // pop up body
          El({
            element: "div",
            className: "h-[11vh] p-4 overflow-auto",
            children: [
              El({
                element: "p",
                className: "text-3xl text-center font-medium",
                children: ["Are you sure you want to delete this section?"],
              }),
            ],
          }),
          // pop up footer
          El({
            element: "div",
            className: "rounded-b-lg p-4 flex justify-evenly",
            children: [
              // cancel
              El({
                element: "button",
                className:
                  "border-2 border-purple-600 rounded-md shadow-lg w-28 h-10 text-purple-600 bg-white font-bold text-sm mt-2 mr-8 hover:bg-purple-400 hover:scale-110 hover:text-white",
                id: "delete-content-cancel",
                children: ["Cancel"],
              }),
              // delete
              El({
                element: "button",
                className:
                  "border-2 border-purple-600 rounded-md shadow-lg w-28 h-10 text-purple-600 bg-white font-bold text-sm mt-2 mr-8 hover:bg-purple-400 hover:scale-110 hover:text-white",
                id: "delete-content-delete",
                children: ["Delete"],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
