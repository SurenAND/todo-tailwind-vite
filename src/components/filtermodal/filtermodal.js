import { fetchTasks } from "../../api/axios";
import { El } from "../../utils";
import { closeModal, openModal, pagination, renderTasks } from "../../utils";
import { FilterClear } from "./clear";
import { FilterDeadline } from "./deadline";
import { FilterPriority } from "./priority";
import { FilterStatus } from "./status";

export const FilterModal = () => {
  function handleFilter(e) {
    const filterModal = document.getElementById("filter-modal");
    const targetf = e.target;
    if (targetf.dataset.close) {
      closeModal(filterModal);
      filterData();
    }
  }

  function filterData() {
    const loading = document.getElementById("loading");
    const filterModal = document.getElementById("filter-modal");

    let page = localStorage.getItem("page")
      ? JSON.parse(localStorage.getItem("page"))
      : "";

    let searchParam = localStorage.getItem("searchParam")
      ? JSON.parse(localStorage.getItem("searchParam"))
      : "";

    let perPage = localStorage.getItem("perPage")
      ? JSON.parse(localStorage.getItem("perPage"))
      : "";

    // get data
    const priority = filterModal.querySelector(
      'input[name="priority"]:checked'
    );
    const status = filterModal.querySelector('input[name="status"]:checked');
    const deadline = filterModal.querySelector('input[name="deadline"]');

    let filterUrl = "";

    if (priority) {
      filterUrl += `&taskPriority=${priority.value}`;
      localStorage.setItem("filterUrl", JSON.stringify(filterUrl));
    }
    if (status) {
      filterUrl += `&taskStatus=${status.value}`;
      localStorage.setItem("filterUrl", JSON.stringify(filterUrl));
    }
    if (deadline.value !== "") {
      filterUrl += `&taskDeadline=${deadline.value}`;
      localStorage.setItem("filterUrl", JSON.stringify(filterUrl));
    }
    openModal(loading);
    fetchTasks(page, searchParam, perPage, filterUrl).then((response) => {
      localStorage.setItem("showNotFound", JSON.stringify(true));
      closeModal(loading);
      pagination();
      renderTasks(response.data);
    });
  }

  return El({
    element: "div",
    className:
      "invisible absolute w-full h-full items-center justify-center z-[1000] inset-0 backdrop-blur-sm bg-slate-300 bg-opacity-30",
    id: "filter-modal",
    eventListener: [
      {
        event: "click",
        callback: handleFilter,
      },
    ],
    dataset: {
      close: "close",
    },
    children: [
      El({
        element: "div",
        className:
          "flex gap-20 flex-col items-center justify-center absolute right-0 h-full md:w-4/12 lg:w-3/12 w-6/12 sm:w-5/12 bg-white px-4",
        children: [
          El({
            element: "div",
            className: "flex justify-between",
            children: [
              El({
                element: "span",
                className:
                  "text-3xl text-purple-800 font-black uppercase p-3 text-center",
                innerText: "Filters",
              }),
            ],
          }),
          El({
            element: "div",
            className: "w-full flex flex-col gap-20",
            children: [
              FilterPriority(),
              FilterStatus(),
              FilterDeadline(),
              FilterClear(),
            ],
          }),
        ],
      }),
    ],
  });
};
