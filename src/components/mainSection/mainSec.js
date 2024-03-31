import { Pagination } from "./pagination";
import { Table } from "./table";
import { El } from "../shared/el";
import { NotFound } from "./notFound";

export const MainSec = () => {
  return El({
    element: "main",
    className: "h-screen",
    children: [Table(), NotFound(), Pagination()],
  });
};
