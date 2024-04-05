import { El } from "../../utils";
import { addToData, closeModal, editRow } from "../../utils";
import { Deadline } from "./deadline";
import { Description } from "./description";
import { Priority } from "./priority";
import { Status } from "./status";
import { TaskName } from "./taskname";

export const Form = () => {
  function HandleSubmit(e) {
    const modalBox = document.getElementById("modal-box");
    e.preventDefault();
    let toEdit = localStorage.getItem("toEdit")
      ? JSON.parse(localStorage.getItem("toEdit"))
      : "";

    let isEdit = localStorage.getItem("isEdit")
      ? JSON.parse(localStorage.getItem("isEdit"))
      : "";
    if (isEdit === false) {
      addToData(e.target);
    } else {
      localStorage.setItem("isEdit", JSON.stringify(false));
      localStorage.setItem("editActive", JSON.stringify(true));
      editRow(e, toEdit);
    }

    closeModal(modalBox);
  }

  function handleClose(e) {
    const modalBox = document.getElementById("modal-box");
    closeModal(modalBox);
  }

  return El({
    element: "form",
    className: "flex flex-col gap-4 w-full p-4 border-t-2 border-purple-700",
    id: "form",
    eventListener: [
      {
        event: "submit",
        callback: HandleSubmit,
      },
    ],
    children: [
      TaskName(),
      // priority & status
      El({
        element: "div",
        className: "flex justify-between",
        children: [Priority(), Status()],
      }),
      Deadline(),
      Description(),
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
            innerText: "CANCEL",
            eventListener: [
              {
                event: "click",
                callback: handleClose,
              },
            ],
          }),
          // Save
          El({
            element: "button",
            className: "bg-purple-500 text-white rounded-lg w-32 h-10",
            type: "submit",
            innerText: "SAVE",
          }),
        ],
      }),
    ],
  });
};
