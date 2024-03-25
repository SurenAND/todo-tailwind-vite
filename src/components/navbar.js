import { El } from "./shared/el";

export const Navbar = () => {
  return El({
    element: "nav",
    className: "bg-purple-800 p-3 flex gap-2 justify-between items-center",
  });
};
