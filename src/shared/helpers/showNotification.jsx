import { toast } from 'react-toastify';


export const NotificationType = {
  NOTIFICATION: 'notification',
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning',
  INFO: 'info',
};

export const showNotification = ({
  message,
  type = NotificationType.ERROR,
  toastOptions = {},
}) => {
  toast(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type: type,
    progress: undefined,
    className: 'toast-message',
    closeButton: 'X',
    ...toastOptions,
  });
};
