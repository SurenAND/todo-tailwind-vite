import { fetchTasks } from "../../api/axios";
import { closeModal, openModal, pagination, renderTasks } from "../../utils";
import { El } from "../../utils";
import { debounce } from "lodash";

export const Search = () => {
  function handleSearch(e) {
    const loading = document.getElementById("loading");

    let searchParam = localStorage.getItem("searchParam")
      ? JSON.parse(localStorage.getItem("searchParam"))
      : "";

    searchParam = e.target.value;
    localStorage.setItem("searchParam", JSON.stringify(searchParam));
    openModal(loading);
    fetchTasks(1, searchParam).then((response) => {
      localStorage.setItem("showNotFound", JSON.stringify(true));
      closeModal(loading);
      pagination();
      renderTasks(response.data);
    });
  }

  return El({
    element: "div",
    className:
      "flex items-center bg-purple-600 p-2 px-5 gap-1 rounded-md w-full",
    children: [
      El({
        element: "img",
        className:
          "cursor-pointer text-center items-center justify-center mr-2",
        id: "search",
        src: "./src/assets/search.svg",
        alt: "search",
      }),
      El({
        element: "input",
        className:
          "focus:outline-none focus:ring-0 border-none text-white rounded bg-transparent placeholder:text-gray-400",
        type: "text",
        id: "search-input",
        placeholder: "Search",
        eventListener: [
          {
            event: "keyup",
            callback: debounce(handleSearch, 1000),
          },
        ],
      }),
    ],
  });
};
