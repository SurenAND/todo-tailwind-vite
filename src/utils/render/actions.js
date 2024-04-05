import { El } from "../el/el";
import { deleteIcon } from "./deleteIcon";
import { editIcon } from "./editIcon";
import { viewIcon } from "./viewIcon";

export function actions(task) {
  return El({
    element: "td",
    className: "border-l-2 border-b-2",
    children: [
      El({
        element: "div",
        className:
          "flex flex-col md:block items-center justify-center p-2 gap-1",
        children: [deleteIcon(task), editIcon(task), viewIcon(task)],
      }),
    ],
  });
}
