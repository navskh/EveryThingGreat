import Swal from "sweetalert2";

export function sweetalert(textData, iconType, callback) {
  const swalTailWind = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-primary",
    },
    buttonsStyling: false,
  });
  var text = "";
  if (iconType == "error") text = "";
  else if (iconType == "success") text = "";
  else if (iconType == "warning") text = "신중하게 생각해 주세요.";

  swalTailWind
    .fire({
      title: textData,
      text: text,
      icon: iconType,
      confirmButtonText: "Ok",
    })
    .then(function () {
      if (callback !== undefined) callback();
    });
}

export function sweetconfirm(textData, iconType) {
  const swalTailWind = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-primary mr-5",
      cancelButton: "btn btn-active btn-ghost",
    },
    buttonsStyling: false,
  });
  var text = "";
  if (iconType == "error") text = "";
  else if (iconType == "success") text = "조아써!";
  else if (iconType == "warning") text = "신중하게 생각해 주세요.";

  return swalTailWind.fire({
    title: textData,
    text: text,
    icon: iconType,
    confirmButtonText: "삭제",
    cancelButtonText: "취소",
    showCancelButton: true,
  });
}
