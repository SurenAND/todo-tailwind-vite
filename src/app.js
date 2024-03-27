import { AddModal } from "./components/addmodal/addmodal";
import { DeletePopup } from "./components/deletepopup/deletepopup";
import { FilterModal } from "./components/filtermodal/filtermodal";
import { MainSec } from "./components/mainSection/mainSec";
import { Navbar } from "./components/navbar/navbar";
import { El } from "./components/shared/el";
import { ViewModal } from "./components/viewmodal/viewmodal";

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
      AddModal(),
      FilterModal(),
      DeletePopup(),
      ViewModal(),
    ],
  });
};
