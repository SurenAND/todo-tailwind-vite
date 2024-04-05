import { fetchTasks } from "../../api/axios";
import {
  closeModal,
  getTotalPage,
  openModal,
  pagination,
  renderTasks,
} from "../../utils";
import { El } from "../../utils";

export const Pagination = () => {
  //
  window.addEventListener("mouseup", function (event) {
    const chevron = document.getElementById("chevron-down");
    const menu = document.getElementById("menu");
    const select = document.getElementById("select");
    if (select && event.target != select && event.target.parentNode != select) {
      select.classList.remove("select-clicked");
      chevron.classList.remove("rotate-180");
      menu.classList.add("hidden");
    }
  });

  function handlePerPage(event) {
    let option = event.target.innerText;
    const chevron = document.getElementById("chevron-down");
    const menu = document.getElementById("menu");
    const select = document.getElementById("select");
    const selected = document.getElementById("selected");
    const loading = document.getElementById("loading");

    selected.textContent = option;
    select.classList.remove("select-clicked");
    chevron.classList.remove("rotate-180");
    menu.classList.add("hidden");

    let perPage = localStorage.getItem("perPage")
      ? JSON.parse(localStorage.getItem("perPage"))
      : "";

    let page = localStorage.getItem("page")
      ? JSON.parse(localStorage.getItem("page"))
      : "";

    let searchParam = localStorage.getItem("searchParam")
      ? JSON.parse(localStorage.getItem("searchParam"))
      : "";

    let filterUrl = localStorage.getItem("filterUrl")
      ? JSON.parse(localStorage.getItem("filterUrl"))
      : "";

    perPage = +option;
    localStorage.setItem("perPage", JSON.stringify(perPage));
    openModal(loading);
    fetchTasks(page, searchParam, perPage, filterUrl).then((response) => {
      closeModal(loading);
      pagination();
      renderTasks(response.data);
    });
  }

  function handlePrevPage() {
    const loading = document.getElementById("loading");

    let perPage = localStorage.getItem("perPage")
      ? JSON.parse(localStorage.getItem("perPage"))
      : "";

    let page = localStorage.getItem("page")
      ? JSON.parse(localStorage.getItem("page"))
      : "";

    let searchParam = localStorage.getItem("searchParam")
      ? JSON.parse(localStorage.getItem("searchParam"))
      : "";

    let filterUrl = localStorage.getItem("filterUrl")
      ? JSON.parse(localStorage.getItem("filterUrl"))
      : "";

    if (page === 1) return;
    openModal(loading);
    fetchTasks(--page, searchParam, perPage, filterUrl).then((response) => {
      closeModal(loading);
      pagination();
      renderTasks(response.data);
    });
  }

  function handleNextPage() {
    const loading = document.getElementById("loading");

    let perPage = localStorage.getItem("perPage")
      ? JSON.parse(localStorage.getItem("perPage"))
      : "";

    let page = localStorage.getItem("page")
      ? JSON.parse(localStorage.getItem("page"))
      : "";

    let searchParam = localStorage.getItem("searchParam")
      ? JSON.parse(localStorage.getItem("searchParam"))
      : "";

    let filterUrl = localStorage.getItem("filterUrl")
      ? JSON.parse(localStorage.getItem("filterUrl"))
      : "";
    let totalPage = getTotalPage(page, searchParam, perPage, filterUrl);
    if (page >= totalPage) return;
    openModal(loading);
    fetchTasks(++page, searchParam, perPage, filterUrl).then((response) => {
      closeModal(loading);
      pagination();
      renderTasks(response.data);
    });
  }

  function handleDropDown() {
    const chevron = document.getElementById("chevron-down");
    const menu = document.getElementById("menu");
    chevron.classList.toggle("rotate-180");
    menu.classList.toggle("hidden");
  }

  return El({
    element: "div",
    className: "w-full flex justify-end p-3 select-none",
    id: "paginate",
    children: [
      El({
        element: "div",
        className: "flex gap-12 items-center justify-center",
        children: [
          // tasks per page
          El({
            element: "div",
            className: "flex gap-3 items-center justify-center",
            children: [
              El({
                element: "span",
                innerText: "Tasks per page:",
              }),
              El({
                element: "div",
                className: "min-w-4 relative",
                id: "dropdown",
                children: [
                  El({
                    element: "div",
                    className:
                      "w-16 p-2 font-bold text-sm flex justify-around cursor-pointer",
                    id: "select",
                    eventListener: [
                      {
                        event: "click",
                        callback: handleDropDown,
                      },
                    ],
                    children: [
                      El({
                        element: "span",
                        id: "selected",
                        innerText: "5",
                      }),
                      El({
                        element: "img",
                        className: "w-3",
                        id: "chevron-down",
                        src: "./src/assets/chevron-d.svg",
                        alt: "chevron-down",
                      }),
                    ],
                  }),
                  El({
                    element: "ul",
                    className:
                      "py-1 px-2 border border-solid border-purple-800 shadow-[0_0.5rem_1rem_border-purple-800] rounded-lg absolute top-10 w-24 z-10 hidden",
                    id: "menu",
                    children: [
                      El({
                        element: "li",
                        className:
                          "font-bold text-sm py-1 px-2 my-1 rounded-lg text-center cursor-pointer hover:bg-purple-400 hover:text-white",
                        innerText: "5",
                        eventListener: [
                          {
                            event: "click",
                            callback: handlePerPage,
                          },
                        ],
                      }),
                      El({
                        element: "li",
                        className:
                          "font-bold text-sm py-1 px-2 my-1 rounded-lg text-center cursor-pointer hover:bg-purple-400 hover:text-white",
                        innerText: "10",
                        eventListener: [
                          {
                            event: "click",
                            callback: handlePerPage,
                          },
                        ],
                      }),
                      El({
                        element: "li",
                        className:
                          "font-bold text-sm py-1 px-2 my-1 rounded-lg text-center cursor-pointer hover:bg-purple-400 hover:text-white",
                        innerText: "15",
                        eventListener: [
                          {
                            event: "click",
                            callback: handlePerPage,
                          },
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          // from - to of total
          El({
            element: "div",
            className: "text-sm",
            children: [
              El({
                element: "span",
                className: "font-medium mx-1",
                id: "start-item",
              }),
              "-",
              El({
                element: "span",
                className: "font-medium mx-1",
                id: "end-item",
              }),
              "of",
              El({
                element: "span",
                className: "font-medium mx-1",
                id: "total-items",
              }),
            ],
          }),
          // prev and next
          El({
            element: "div",
            className: "flex justify-center gap-5",
            children: [
              El({
                element: "img",
                className: "cursor-pointer",
                id: "prev",
                src: "./src/assets/chevron-l.svg",
                alt: "chevron-l",
                eventListener: [
                  {
                    event: "click",
                    callback: handlePrevPage,
                  },
                ],
              }),
              El({
                element: "img",
                className: "cursor-pointer",
                id: "next",
                src: "./src/assets/chevron-r.svg",
                alt: "chevron-r",
                eventListener: [
                  {
                    event: "click",
                    callback: handleNextPage,
                  },
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
