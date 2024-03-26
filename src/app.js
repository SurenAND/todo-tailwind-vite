import { AddModal } from "./components/addmodal";
import { DeletePopup } from "./components/deletepopup";
import { FilterModal } from "./components/filtermodal";
import { MainSec } from "./components/mainSec";
import { Navbar } from "./components/navbar";
import { El } from "./components/shared/el";
import { ViewModal } from "./components/viewmodal";
export const App = () => {
  return El({
    element: "div",
    className: "flex flex-col h-screen relative font-Poppins",
    children: [
      Navbar(),
      MainSec(),
      AddModal(),
      FilterModal(),
      DeletePopup(),
      ViewModal(),
    ],
  });
};
