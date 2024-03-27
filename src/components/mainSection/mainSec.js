import { Pagination } from "./pagination";
import { Table } from "./table";
import { El } from "../shared/el";

export const MainSec = () => {
  return El({
    element: "main",
    className: "h-screen",
    children: [Table(), Pagination()],
  });
};
