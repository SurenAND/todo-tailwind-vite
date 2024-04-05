import { El } from "../el/el";

export function taskName(task) {
  return El({
    element: "td",
    className: "text-start border-l-2 border-b-2 py-4 pl-6",
    innerText: `${task.taskName}`,
  });
}
