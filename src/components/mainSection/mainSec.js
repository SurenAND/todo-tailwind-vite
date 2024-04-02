import { Pagination } from "./pagination";
import { Table } from "./table";
import { El } from "../shared/el";
import { NotFound } from "./notFound";
import { Loading } from "../loading/loading";

export const MainSec = () => {
  return El({
    element: "main",
    className: "h-screen",
    children: [Loading(), Table(), NotFound(), Pagination()],
  });
};
