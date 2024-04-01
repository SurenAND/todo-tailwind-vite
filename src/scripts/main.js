import { debounce } from "lodash";
import { deleteTaskApi, editTaskApi, fetchTasks } from "../library/axios";
import {
  addToData,
  clearInputs,
  handlePriorityBg,
  handlePriorityBorder,
  handlePriorityText,
  handleStatusBg,
  handleStatusBorder,
  handleStatusText,
  preFillInputs,
} from "./components";
import { closeModal, openModal } from "./modalAction";
import { El } from "../components/shared/el";

// persian date picker
jalaliDatepicker.startWatch();

let isEdit = false;
let editActive = false;
let toEdit;
let page = 1;
let perPage = 5;
let searchParam = "";
let filterUrl = "";
let showNotFound = false;

const loading = document.getElementById("loading");
openModal(loading);
fetchTasks().then((response) => {
  closeModal(loading);
  renderTasks(response.data);
});

// addModal
const addBtn = document.getElementById("add");
const modalBox = document.getElementById("modal-box");

// close add modal
modalBox.addEventListener("click", (e) => {
  e.target.dataset.close ? closeModal(modalBox) : null;
});
// close with cancel btn
const cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", () => closeModal(modalBox));

// open add modal
addBtn.addEventListener("click", () => {
  openModal(modalBox);
});

// addModal form
const addForm = document.getElementById("form");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isEdit === false) {
    addToData(e.target);
  } else {
    isEdit = false;
    editActive = true;
    editRow(e, toEdit);
  }

  closeModal(modalBox);
});

//Edit the selected row
function editRow(e, selectedRowId) {
  if (editActive === false) {
    e.preventDefault();
    isEdit = true;

    const selectedRow = document.getElementById(`${selectedRowId}`);

    // get button id as index of the object that should edited
    const idToEdit = +selectedRow.id;
    toEdit = idToEdit;

    // Fetch all tasks and find the task to be edited
    openModal(loading);
    fetchTasks().then((response) => {
      closeModal(loading);
      const tasks = response.data;
      const taskToEdit = tasks.find((task) => task.id === idToEdit);
      preFillInputs(taskToEdit);
      openModal(modalBox, isEdit);
    });
  } else {
    // Get updated data from the form inputs
    const task = e.target.querySelector('input[name="task-name"]').value;
    const priority = e.target.querySelector(
      'input[name="priority"]:checked'
    ).value;
    const status = e.target.querySelector('input[name="status"]:checked').value;
    const deadline = e.target.querySelector('input[name="deadline"]').value;
    const desc = e.target.querySelector('textarea[name="description"]').value;

    // Fetch updated tasks, replace the specific task, and re-render the tasks
    openModal(loading);
    fetchTasks().then((response) => {
      closeModal(loading);
      const tasks = response.data;
      const taskToEdit = tasks.find((task) => task.id === toEdit);

      // Create a new task object with the updated data
      const newTask = {
        ...taskToEdit,
        taskName: task,
        taskPriority: priority,
        taskStatus: status,
        taskDeadline: deadline,
        taskDescription: desc,
      };

      editTaskApi(toEdit, newTask).then(() => {
        openModal(loading);
        fetchTasks().then((response) => {
          closeModal(loading);
          editActive = false;
          closeModal(modalBox);
          renderTasks(response.data);
        });
      });
    });
  }
}

// delete row
function confirmAndDelete(e, selectedRowId) {
  e.preventDefault();

  const deleteConfirmSec = document.getElementById("delete-section");
  openModal(deleteConfirmSec);

  const deleteBtn = document.getElementById("delete-content-delete");

  // Remove the previous event listener from the delete button
  deleteBtn.removeEventListener("click", handleDeleteClick);

  // Add the new event listener to the delete button
  deleteBtn.addEventListener("click", handleDeleteClick);

  function handleDeleteClick() {
    closeModal(deleteConfirmSec);
    // remove the selected section
    const selectedRow = document.getElementById(`${selectedRowId}`);
    selectedRow.remove();

    // get button id as index of the object that should removed
    const idToDelete = +selectedRow.id;
    deleteTaskApi(idToDelete).then(() => {
      // Render tasks after adding the new task
      closeModal(deleteConfirmSec);
      openModal(loading);
      fetchTasks().then((response) => {
        pagination();
        closeModal(loading);
        renderTasks(response.data);
      });
    });
  }

  // cancel button
  const cancelBtn = document.getElementById("delete-content-cancel");
  cancelBtn.addEventListener("click", () => {
    closeModal(deleteConfirmSec);
    deleteBtn.removeEventListener("click", handleDeleteClick);
  });

  window.addEventListener("click", (event) => {
    if (event.target === deleteConfirmSec) {
      closeModal(deleteConfirmSec);
      deleteBtn.removeEventListener("click", handleDeleteClick);
    }
  });
}

// view selected row
function viewRow(e, selectedRowId) {
  e.preventDefault();
  const viewBox = document.getElementById("view-box");

  const selectedRow = document.getElementById(`${selectedRowId}`);

  // get button id as index of the object that should show
  const idToShow = +selectedRow.id;

  // Fetch all tasks and find the task to be viewed
  openModal(loading);
  fetchTasks().then((response) => {
    closeModal(loading);
    const tasks = response.data;
    const taskToView = tasks.find((task) => task.id === idToShow);
    changeViewModal(taskToView);
    openModal(viewBox);
  });
  // close add modal
  viewBox.addEventListener("click", (e) => {
    e.target.dataset.close ? closeModal(viewBox) : null;
  });
}

function changeViewModal(data) {
  const viewTaskName = document.getElementById("view-task-name");
  const viewPriority = document.getElementById("view-priority");
  const viewStatus = document.getElementById("view-status");
  const viewDeadline = document.getElementById("view-deadline");
  const viewDesc = document.getElementById("view-description");

  viewTaskName.innerText = data.taskName;
  viewPriority.innerText = data.taskPriority;
  viewStatus.innerText = data.taskStatus;
  viewDeadline.innerText = data.taskDeadline;
  if (data.taskDescription) {
    viewDesc.innerText = data.taskDescription;
  } else {
    viewDesc.innerText = "No Detail or Description";
  }
}

export function renderTasks(tasksFromApi) {
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
          El({
            element: "td",
            className: "text-start border-l-2 border-b-2 py-4 pl-6",
            innerText: `${task.taskName}`,
          }),
          El({
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
          }),
          El({
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
          }),
          El({
            element: "td",
            className: "border-l-2 border-b-2",
            children: [
              El({
                element: "span",
                className:
                  "select-none rounded-3xl border-2 border-blue-400 py-1 px-3",
                innerText: `${task.taskDeadline}`,
              }),
            ],
          }),
          El({
            element: "td",
            className: "border-l-2 border-b-2",
            children: [
              El({
                element: "div",
                className:
                  "flex flex-col md:block items-center justify-center p-2 gap-1",
                children: [
                  El({
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
                  }),
                  El({
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
                  }),
                  El({
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
                  }),
                ],
              }),
            ],
          }),
        ],
      });
      tbody.append(tr);
    });
  } else if (showNotFound) {
    notFound.classList.remove("hidden");
    showNotFound = false;
  }
}

// search
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keyup", debounce(handleSearch, 1000));

function handleSearch(e) {
  searchParam = e.target.value;
  openModal(loading);
  fetchTasks(1, searchParam).then((response) => {
    showNotFound = true;
    closeModal(loading);
    pagination();
    renderTasks(response.data);
  });
}

// dropDown Btn and pagination
const chevron = document.getElementById("chevron-down");
const select = document.getElementById("select");
const selected = document.getElementById("selected");
const menu = document.getElementById("menu");
const options = document.querySelectorAll("#menu li");

select.addEventListener("click", () => {
  chevron.classList.toggle("rotate-180");
  menu.classList.toggle("hidden");
});

window.addEventListener("mouseup", function (event) {
  if (event.target != select && event.target.parentNode != select) {
    select.classList.remove("select-clicked");
    chevron.classList.remove("rotate-180");
    menu.classList.add("hidden");
  }
});

options.forEach((option) => {
  option.addEventListener("click", (event) => {
    selected.textContent = option.textContent;
    select.classList.remove("select-clicked");
    chevron.classList.remove("rotate-180");
    menu.classList.add("hidden");

    handlePerPage(event.target.innerText);
  });
});

function handlePerPage(option) {
  perPage = +option;
  openModal(loading);
  fetchTasks(page, searchParam, perPage, filterUrl).then((response) => {
    closeModal(loading);
    pagination();
    renderTasks(response.data);
  });
}

let totalPage;
let totalItems;
export async function pagination() {
  openModal(loading);
  ({ totalItems, totalPage } = await fetchTasks(
    page,
    searchParam,
    perPage,
    filterUrl
  ));
  closeModal(loading);
  let startItem = (page - 1) * perPage + 1;
  let endItem = Math.min(startItem + perPage - 1, totalItems);

  const pageStartItem = document.getElementById("start-item");
  pageStartItem.innerText = endItem == 0 ? 0 : startItem;

  const pageEndItem = document.getElementById("end-item");
  pageEndItem.innerText = endItem;

  const pageTotalItems = document.getElementById("total-items");
  pageTotalItems.innerText = totalItems;
}
pagination();

const nextPage = document.getElementById("next");
nextPage.addEventListener("click", () => {
  handleNextPage();
});

const prevPage = document.getElementById("prev");
prevPage.addEventListener("click", () => {
  handlePrevPage();
});

function handlePrevPage() {
  if (page === 1) return;
  openModal(loading);
  fetchTasks(--page, searchParam, perPage, filterUrl).then((response) => {
    closeModal(loading);
    pagination();
    renderTasks(response.data);
  });
}
function handleNextPage() {
  if (page >= totalPage) return;
  openModal(loading);
  fetchTasks(++page, searchParam, perPage, filterUrl).then((response) => {
    closeModal(loading);
    pagination();
    renderTasks(response.data);
  });
}

// filter
const filterBtn = document.getElementById("filter");
const filterModal = document.getElementById("filter-modal");
const filterClear = document.getElementById("filter-clear");

filterBtn.addEventListener("click", () => {
  openModal(filterModal);
});

filterModal.addEventListener("click", handleFilter);
function handleFilter(e) {
  const targetf = e.target;
  if (targetf.dataset.close) {
    closeModal(filterModal);
    filterData();
  }
}

function filterData() {
  // get data
  const priority = filterModal.querySelector('input[name="priority"]:checked');
  const status = filterModal.querySelector('input[name="status"]:checked');
  const deadline = filterModal.querySelector('input[name="deadline"]');

  filterUrl = "";

  if (priority) {
    filterUrl += `&taskPriority=${priority.value}`;
  }
  if (status) {
    filterUrl += `&taskStatus=${status.value}`;
  }
  if (deadline.value !== "") {
    filterUrl += `&taskDeadline=${deadline.value}`;
  }
  openModal(loading);
  fetchTasks(page, searchParam, perPage, filterUrl).then((response) => {
    showNotFound = true;
    closeModal(loading);
    pagination();
    renderTasks(response.data);
  });
}

filterClear.addEventListener("click", () => {
  clearInputs(filterModal);
});
