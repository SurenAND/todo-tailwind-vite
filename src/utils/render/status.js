import { El } from "../el/el";

export function status(task) {
  return El({
    element: "td",
    className: "border-l-2 border-b-2",
    children: [
      El({
        element: "span",
        className: `select-none rounded-3xl border-2 ${handleStatusBorder(
          task.taskStatus
        )} ${handleStatusBg(task.taskStatus)} ${handleStatusText(
          task.taskStatus
        )} py-1 px-3 font-bold`,
        innerText: `${task.taskStatus}`,
      }),
    ],
  });
}

function handleStatusBorder(status) {
  return status === "Todo"
    ? "border-red-600"
    : status === "Doing"
    ? "border-yellow-500"
    : "border-green-800";
}

function handleStatusBg(status) {
  return status === "Todo"
    ? "bg-red-600"
    : status === "Doing"
    ? "bg-yellow-500"
    : "bg-green-800";
}

function handleStatusText(status) {
  return status === "Todo"
    ? "text-gray-100"
    : status === "Doing"
    ? "text-gray-700"
    : "text-gray-100";
}
