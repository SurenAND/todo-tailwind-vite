import { El } from "../el/el";

export function priority(task) {
  return El({
    element: "td",
    className: "border-l-2 border-b-2",
    children: [
      El({
        element: "span",
        className: `select-none rounded-3xl border-2 ${handlePriorityBorder(
          task.taskPriority
        )} ${handlePriorityBg(task.taskPriority)} ${handlePriorityText(
          task.taskPriority
        )} py-1 px-3 font-bold`,
        innerText: `${task.taskPriority}`,
      }),
    ],
  });
}

function handlePriorityBorder(priority) {
  return priority === "Low"
    ? "border-gray-300"
    : priority === "Medium"
    ? "border-yellow-500"
    : "border-red-600";
}

function handlePriorityBg(priority) {
  return priority === "Low"
    ? "bg-gray-300"
    : priority === "Medium"
    ? "bg-yellow-500"
    : "bg-red-600";
}

function handlePriorityText(priority) {
  return priority === "Low"
    ? "text-gray-700"
    : priority === "Medium"
    ? "text-gray-700"
    : "text-gray-100";
}
