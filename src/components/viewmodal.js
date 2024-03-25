import { El } from "./shared/el";

export const viewModal = () => {
  return El({
    element: "div",
    className:
      "absolute inset-0 backdrop-blur-sm bg-slate-300 bg-opacity-30 flex items-center justify-center z-20 invisible",
    id: "view-box",
    dataset: {
      close: "close",
    },
    children: [
      El({
        element: "div",
        className:
          "flex flex-col md:w-6/12 w-8/12 lg:w-4/12 bg-white relative rounded-lg",
        children: [
          El({
            element: "h1",
            className: "text-xl text-purple-800 font-black p-3 text-center",
            id: "view-task-name",
            children: ["Task Name"],
          }),
          El({
            element: "div",
            className:
              "flex flex-col items-center gap-4 w-full p-4 border-t-2 border-purple-700",
            children: [
              //priority & status
              El({
                element: "div",
                className: "flex items-center w-full",
                children: [
                  // priority
                  El({
                    element: "div",
                    className: "flex flex-col items-center w-full",
                    children: [
                      El({
                        element: "h5",
                        className: "mb-3",
                        children: ["::: Priority :::"],
                      }),
                      El({
                        element: "span",
                        className:
                          "select-none rounded-3xl border-2 border-purple-500 text-purple-500 py-1 px-3 font-bold",
                        id: "view-priority",
                        children: ["Low"],
                      }),
                    ],
                  }),
                  // status
                  El({
                    element: "div",
                    className: "flex flex-col items-center w-full",
                    children: [
                      El({
                        element: "h5",
                        className: "mb-3",
                        children: ["::: Status :::"],
                      }),
                      El({
                        element: "span",
                        className:
                          "select-none rounded-3xl border-2 border-purple-500 text-purple-500 py-1 px-3 font-bold",
                        id: "view-status",
                        children: ["Todo"],
                      }),
                    ],
                  }),
                ],
              }),
              // deadline
              El({
                element: "div",
                className: "flex flex-col items-center",
                children: [
                  El({
                    element: "h5",
                    className: "mb-3",
                    children: ["::: Deadline :::"],
                  }),
                  El({
                    element: "span",
                    className:
                      "select-none rounded-3xl border-2 border-purple-500 py-1 px-3",
                    id: "view-deadline",
                    children: ["1402/12/05"],
                  }),
                ],
              }),
              // description
              El({
                element: "div",
                className:
                  "w-full border-2 border-purple-500 rounded-md mt-5 px-1 py-1 text-center",
                id: "view-description",
                children: [
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
