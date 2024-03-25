import { Navbar } from "./components/navbar";
import { El } from "./components/shared/el";
export const App = () => {
  return El({
    element: "div",
    className: "flex flex-col h-screen relative font-Poppins",
    children: [Navbar()],
  });
};
