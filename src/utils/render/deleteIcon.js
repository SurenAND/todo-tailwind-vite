import { confirmAndDelete } from "../delete/delete";
import { El } from "../el/el";

export function deleteIcon(task) {
  return El({
    element: "button",
    className: "bg-red-600 mx-1 rounded text-center",
    id: `${task.id}`,
    children: [
      El({
        element: "img",
        className: "w-5 my-1 mx-2",
        src: "./src/assets/delete.svg",
        alt: "delete",
        eventListener: [
          {
            event: "click",
            callback: (e) => {
              confirmAndDelete(e, task.id);
            },
          },
        ],
      }),
    ],
  });
}
