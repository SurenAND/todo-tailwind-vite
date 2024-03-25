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
      }),
    ],
  });
};
