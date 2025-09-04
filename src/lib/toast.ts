import Swal from "sweetalert2";

export function showToast(
  icon: "success" | "error" | "warning" | "info",
  title: string,
) {
  Swal.fire({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    icon,
    title,
  });
}
