import { El } from "../../utils";

export const Description = () => {
  return El({
    element: "textarea",
    className:
      "w-full resize-none border border-1 border-gray-300 rounded-md mt-5 px-1 py-1 outline-1 outline-purple-700",
    id: "textarea",
    restAttrs: {
      name: "description",
      rows: "5",
      placeholder: "Description (Optional)",
    },
  });
};
