import { AddModal } from "./components/addmodal/addmodal";
import { DeletePopup } from "./components/deletepopup/deletepopup";
import { FilterModal } from "./components/filtermodal/filtermodal";
import { Loading } from "./components/loading/loading";
import { MainSec } from "./components/mainSection/mainSec";
import { Navbar } from "./components/navbar/navbar";
import { ViewModal } from "./components/viewmodal/viewmodal";
import { El } from "./utils";
import { pagination } from "./utils";

export const App = () => {
  // persian date picker
  jalaliDatepicker.startWatch();

  pagination();

  // global variables
  localStorage.setItem("toEdit", "");
  localStorage.setItem("isEdit", JSON.stringify(false));
  localStorage.setItem("editActive", JSON.stringify(false));
  localStorage.setItem("page", JSON.stringify(1));
  localStorage.setItem("perPage", JSON.stringify(5));
  localStorage.setItem("searchParam", "");
  localStorage.setItem("filterUrl", "");
  localStorage.setItem("showNotFound", JSON.stringify(false));

  return El({
    element: "div",
    className: "flex flex-col h-screen relative font-Poppins",
    children: [
      Loading(),
      Navbar(),
      AddModal(),
      FilterModal(),
      MainSec(),
      DeletePopup(),
      ViewModal(),
    ],
  });
};
