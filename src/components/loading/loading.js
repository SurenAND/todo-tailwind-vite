import { El } from "../../utils";

export const Loading = () => {
  return El({
    element: "div",
    id: "loading",
    className:
      "absolute inset-0 backdrop-blur-sm bg-slate-300 bg-opacity-30 flex items-center justify-center gap-5 z-[1000] invisible",
    children: [
      El({
        element: "div",
        className:
          "h-8 w-8 bg-purple-800 rounded-full animate-bounce [animation-delay:-0.3s]",
      }),
      El({
        element: "div",
        className:
          "h-8 w-8 bg-purple-800 rounded-full animate-bounce [animation-delay:-0.15s]",
      }),
      El({
        element: "div",
        className: "h-8 w-8 bg-purple-800 rounded-full animate-bounce",
      }),
    ],
  });
};
