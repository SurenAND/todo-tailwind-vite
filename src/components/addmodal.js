import { El } from "./shared/el";

export const AddModal = () => {
  return El({
    element: "div",
    className:
      "absolute inset-0 backdrop-blur-sm bg-slate-300 bg-opacity-30 flex items-center justify-center z-20 invisible",
    id: "modal-box",
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
            className:
              "text-lg text-purple-800 font-black uppercase p-3 text-center",
            children: ["Add New Task"],
          }),
          El({
            element: "form",
            className:
              "flex flex-col gap-4 w-full p-4 border-t-2 border-purple-700",
            id: "form",
            children: [
              // task name
              El({
                element: "div",
                className: "w-full",
                children: [
                  El({
                    element: "h5",
                    className: "mb-2",
                    children: ["Task Name :"],
                  }),
                  El({
                    element: "input",
                    className:
                      "w-full border border-1 border-gray-300 rounded-md px-1 py-1 outline-1 outline-purple-700",
                    name: "task-name",
                    type: "text",
                  }),
                ],
              }),
              // priority & status
              El({
                element: "div",
                className: "flex justify-between",
                children: [
                  // priority
                  El({
                    element: "div",
                    className: "flex flex-col w-full",
                    children: [
                      El({
                        element: "h5",
                        className: "mb-3",
                        children: ["Priority :"],
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
                                children: ["Low"],
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
                                children: ["Medium"],
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
                                children: ["High"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  // Status
                  El({
                    element: "div",
                    className: "flex flex-col w-full",
                    children: [
                      El({
                        element: "h5",
                        className: "mb-3",
                        children: ["Status :"],
                      }),
                      El({
                        element: "div",
                        className: "flex gap-4 w-full",
                        children: [
                          // todo
                          El({
                            element: "div",
                            children: [
                              El({
                                element: "input",
                                className: "peer hidden",
                                id: "todo-status",
                                name: "status",
                                value: "Todo",
                                type: "radio",
                              }),
                              El({
                                element: "label",
                                className:
                                  "select-none cursor-pointer rounded-3xl border-2 border-red-600 py-1 px-3 font-bold text-red-600 peer-checked:bg-red-600 peer-checked:text-gray-100 peer-checked:border-red-600",
                                restAttrs: {
                                  for: "todo-status",
                                },
                                children: ["Todo"],
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
                                id: "doing-status",
                                name: "status",
                                value: "Doing",
                                type: "radio",
                              }),
                              El({
                                element: "label",
                                className:
                                  "select-none cursor-pointer rounded-3xl border-2 border-yellow-500 py-1 px-3 font-bold text-yellow-500 peer-checked:bg-yellow-500 peer-checked:text-gray-700 peer-checked:border-yellow-500",
                                restAttrs: {
                                  for: "doing-status",
                                },
                                children: ["Doing"],
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
                                id: "done-status",
                                name: "status",
                                value: "Done",
                                type: "radio",
                              }),
                              El({
                                element: "label",
                                className:
                                  "select-none cursor-pointer rounded-3xl border-2 border-green-800 py-1 px-3 font-bold text-green-800 peer-checked:bg-green-800 peer-checked:text-gray-100 peer-checked:border-green-800",
                                restAttrs: {
                                  for: "done-status",
                                },
                                children: ["Done"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              // Deadline
              El({
                element: "div",
                className: "flex flex-col items-center",
                children: [
                  El({
                    element: "h5",
                    className: "my-3",
                    children: ["::: Deadline :::"],
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
              }),
              // description
              El({
                element: "textarea",
                className:
                  "w-full resize-none border border-1 border-gray-300 rounded-md mt-5 px-1 py-1 outline-1 outline-purple-700",
                id: "textarea",
                restAttrs: {
                  name: "description",
                  rows: "5",
                  placeholder: "Description (Optional)",
                },
              }),
              // cancel & save
              El({
                element: "div",
                className: "flex justify-between mt-3",
                children: [
                  // cancel
                  El({
                    element: "button",
                    className:
                      "text-purple-500 border border-purple-500 rounded-lg w-32 h-10",
                    id: "cancel",
                    type: "button",
                    children: ["CANCEL"],
                  }),
                  // Save
                  El({
                    element: "button",
                    className: "bg-purple-500 text-white rounded-lg w-32 h-10",
                    type: "submit",
                    children: ["SAVE"],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
