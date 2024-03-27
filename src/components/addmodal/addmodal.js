import { El } from "../shared/el";
import { Form } from "./form";

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
            innerText: "Add New Task",
          }),
          Form(),
        ],
      }),
    ],
  });
};
