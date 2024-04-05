import { closeModal, openModal } from "../modalAction/modalAction";
import { fetchTasks } from "../../api/axios";
let totalItems;
export async function pagination() {
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

  openModal(loading);
  ({ totalItems } = await fetchTasks(page, searchParam, perPage, filterUrl));
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

export async function getTotalPage(page, searchParam, perPage, filterUrl) {
  const { totalPage } = await fetchTasks(page, searchParam, perPage, filterUrl);
  return totalPage;
}
