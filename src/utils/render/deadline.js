import { El } from "../el/el";

export function deadline(task) {
  return El({
    element: "td",
    className: "border-l-2 border-b-2",
    children: [
      El({
        element: "span",
        className: "select-none rounded-3xl border-2 border-blue-400 py-1 px-3",
        innerText: `${task.taskDeadline}`,
      }),
    ],
  });
}
