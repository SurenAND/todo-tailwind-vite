export function clearInputs(form) {
  const inputs = form.querySelectorAll("input, textarea");

  inputs.forEach((input) => {
    if (input.type !== "radio") {
      input.value = "";
    } else if (input.type === "radio") {
      input.checked = false;
    }
  });
}
