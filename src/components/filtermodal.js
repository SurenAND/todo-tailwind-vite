import { El } from "./shared/el";

export const FilterModal = () => {
  return El({
    element: "div",
    className:
      "invisible absolute w-full h-full items-center justify-center z-[1000] inset-0 backdrop-blur-sm bg-slate-300 bg-opacity-30",
    id: "filter-modal",
    dataset: {
      close: "close",
    },
    children: [
      El({
        element: "div",
        className:
          "flex gap-6 flex-col absolute right-0 h-full md:w-4/12 lg:w-3/12 w-6/12 sm:w-5/12 bg-white py-6 px-4",
        children: [
          El({
            element: "div",
            className: "w-full flex justify-between",
            children: [
              El({
                element: "span",
                className: "text-lg",
                children: ["Filters"],
              }),
            ],
          }),
          El({
            element: "div",
            className: "w-full flex flex-col gap-4",
            children: [
              // priority
              El({
                element: "div",
                className: "w-full",
                children: [
                  El({
                    element: "p",
                    className: "mb-2",
                    children: ["Priority:"],
                  }),
                  El({
                    element: "select",
                    className: "w-full rounded-md",
                    dataset: {
                      value: "filterItem",
                    },
                    children: [
                      El({
                        element: "option",
                        restAttrs: {
                          value: "All",
                        },
                        children: "All",
                      }),
                      El({
                        element: "option",
                        restAttrs: {
                          value: "Low",
                        },
                        children: "Low",
                      }),
                      El({
                        element: "option",
                        restAttrs: {
                          value: "Medium",
                        },
                        children: "Medium",
                      }),
                      El({
                        element: "option",
                        restAttrs: {
                          value: "High",
                        },
                        children: "High",
                      }),
                    ],
                  }),
                ],
              }),
              // status
              El({
                element: "div",
                className: "w-full",
                children: [
                  El({
                    element: "p",
                    className: "mb-2",
                    children: ["Status:"],
                  }),
                  El({
                    element: "select",
                    className: "w-full rounded-md",
                    dataset: {
                      value: "filterItem",
                    },
                    children: [
                      El({
                        element: "option",
                        restAttrs: {
                          value: "All",
                        },
                        children: "All",
                      }),
                      El({
                        element: "option",
                        restAttrs: {
                          value: "Todo",
                        },
                        children: "Todo",
                      }),
                      El({
                        element: "option",
                        restAttrs: {
                          value: "Doing",
                        },
                        children: "Doing",
                      }),
                      El({
                        element: "option",
                        restAttrs: {
                          value: "Done",
                        },
                        children: "Done",
                      }),
                    ],
                  }),
                ],
              }),
              // deadline
              El({
                element: "div",
                className: "w-full",
                children: [
                  El({
                    element: "p",
                    className: "mb-2",
                    children: ["Deadline:"],
                  }),
                  El({
                    element: "input",
                    className: "w-full rounded-md",
                    restAttrs: {
                      type: "text",
                      placeholder: "YYYY/MM/DD",
                    },
                    dataset: {
                      value: "filterItem",
                      jdp: "",
                    },
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
