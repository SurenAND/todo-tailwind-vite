import { El } from "../shared/el";

export const ViewDescription = () => {
  return El({
    element: "div",
    className:
      "w-full border-2 border-purple-500 rounded-md mt-5 px-1 py-1 text-center",
    id: "view-description",
    innerText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  });
};
