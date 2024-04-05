import { El } from "../el/el";
import { viewRow } from "../view/view";

export function viewIcon(task) {
  return El({
    element: "button",
    className: "bg-gray-500 mx-1 rounded text-center",
    id: `${task.id}`,
    children: [
      El({
        element: "img",
        className: "w-5 my-1 mx-2",
        src: "./src/assets/view.svg",
        alt: "view",
        eventListener: [
          {
            event: "click",
            callback: (e) => {
              viewRow(e, task.id);
            },
          },
        ],
      }),
    ],
  });
}
