import { El } from "../../utils";
import { closeModal } from "../../utils";
import { Form } from "./form";

export const AddModal = () => {
  function handleClose(e) {
    const modalBox = document.getElementById("modal-box");
    e.target.dataset.close ? closeModal(modalBox) : null;
  }

  return El({
    element: "div",
    className:
      "absolute inset-0 backdrop-blur-sm bg-slate-300 bg-opacity-30 flex items-center justify-center z-20 invisible",
    id: "modal-box",
    eventListener: [
      {
        event: "click",
        callback: handleClose,
      },
    ],
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
