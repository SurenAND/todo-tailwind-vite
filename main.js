import "./src/styles/index.css";
import "./src/persianDatePicker/jalalidatepicker.min.css";
import "./src/persianDatePicker/jalalidatepicker.min.js";
import "./src/scripts/main";
import { App } from "./src/app";
document.querySelector("#app").append(App());
