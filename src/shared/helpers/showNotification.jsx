import { toast } from "react-toastify";


export const NotificationType = {
  NOTIFICATION: "notification",
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info",
};

export const showNotification = ({
  message,
  type = NotificationType.ERROR,
  toastOptions = {},
}) => {
  const Msg = () =>
    (
      <div>
        <strong className="title">
          check 
        </strong>
        <span className="meeting-title">kjsbdkb</span>
      </div>);

  toast(type === NotificationType.NOTIFICATION ? Msg : message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type: type,
    progress: undefined,
    className: "toast-message",
    closeButton: "X",
    ...toastOptions,
  });
};
