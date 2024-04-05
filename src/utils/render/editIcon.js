import { editRow } from "../edit/edit";
import { El } from "../el/el";

export function editIcon(task) {
  return El({
    element: "button",
    className: "bg-blue-600 mx-1 rounded text-center",
    id: `${task.id}`,
    children: [
      El({
        element: "img",
        className: "w-5 my-1 mx-2",
        src: "./src/assets/edit.svg",
        alt: "edit",
        eventListener: [
          {
            event: "click",
            callback: (e) => {
              editRow(e, task.id);
            },
          },
        ],
      }),
    ],
  });
}
