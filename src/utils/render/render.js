import { El } from "../el/el";
import { taskName } from "./taskName";
import { priority } from "./priority";
import { status } from "./status";
import { deadline } from "./deadline";
import { actions } from "./actions";

export function renderTasks(tasksFromApi) {
  let showNotFound = localStorage.getItem("showNotFound")
    ? JSON.parse(localStorage.getItem("showNotFound"))
    : "";

  const notFound = document.getElementById("notFound");
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  if (tasksFromApi.length > 0) {
    notFound.classList.add("hidden");
    tasksFromApi.map((task) => {
      const tr = El({
        element: "tr",
        id: `${task.id}`,
        className: "text-center border h-full w-full",
        children: [
          taskName(task),
          priority(task),
          status(task),
          deadline(task),
          actions(task),
        ],
      });
      tbody.append(tr);
    });
  } else if (showNotFound) {
    notFound.classList.remove("hidden");
    localStorage.setItem("showNotFound", JSON.stringify(false));
  }
}
