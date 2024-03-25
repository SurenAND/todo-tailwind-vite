import { addModal } from "./components/addmodal";
import { deletePopup } from "./components/deletepopup";
import { filterModal } from "./components/filtermodal";
import { MainSec } from "./components/mainSec";
import { Navbar } from "./components/navbar";
import { El } from "./components/shared/el";
import { viewModal } from "./components/viewmodal";
export const App = () => {
  return El({
    element: "div",
    className: "flex flex-col h-screen relative font-Poppins",
    children: [
      Navbar(),
      MainSec(),
      addModal(),
      filterModal(),
      deletePopup(),
      viewModal(),
    ],
  });
};
