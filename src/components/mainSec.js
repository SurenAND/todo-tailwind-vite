import { El } from "./shared/el";

export const MainSec = () => {
  return El({
    element: "main",
    className: "h-screen",
    children: [
      // table
      El({
        element: "table",
        className: "w-full border-2 overflow-x-auto",
        children: [
          El({
            element: "thead",
            className: "font-medium",
            children: [
              El({
                element: "tr",
                children: [
                  El({
                    element: "td",
                    className: "border-l-2 border-b-2 py-4 pl-6",
                    children: ["Task Name"],
                  }),
                  El({
                    element: "td",
                    className: "text-center border-l-2 border-b-2",
                    children: ["Priority"],
                  }),
                  El({
                    element: "td",
                    className: "text-center border-l-2 border-b-2",
                    children: ["Status"],
                  }),
                  El({
                    element: "td",
                    className: "text-center border-l-2 border-b-2",
                    children: ["Deadline"],
                  }),
                  El({
                    element: "td",
                    className: "text-center border-l-2 border-b-2",
                    children: ["Actions"],
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
