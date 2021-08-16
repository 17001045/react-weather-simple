import Swal from "sweetalert2";
export const SW_icons = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info",
  QUESTION: "question",
};

export class Sweetalert2 {
  static alert({ text, title, icon }) {
    return Swal.fire(title, text, icon);
  }
  static confim({ title, text, cancelButtonText, confirmButtonText, icon }) {
    return Swal.fire({
      title,
      text,
      icon: icon,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
    });
  }
}
