import i18n from "i18next";

export const parseResponseErrors = (error) => {
  let notificationString = i18n.t("shared.notifications.somethingWentWrong");

  if (!error) {
    return notificationString;
  }

  const isDefaultError = checkHasProperty(error, "message");
  const isErrorResponse = checkHasProperty(error, "response");

  if (typeof error === "string") {
    notificationString = error;
  } else if (isDefaultError && !isErrorResponse) {
    notificationString = error.message;
  } else if (!isDefaultError && !isErrorResponse) {
    notificationString = i18n.t("shared.notifications.serverNotResponding");
  } else if (typeof error.response.data?.base === "string") {
    notificationString = error.response.data.base;
  } else if (typeof error.response.data?.message === "string") {
    notificationString = error.response.data.message;
  } else if (typeof error.response.data?.error === "string") {
    notificationString = error.response.data.error;
  } else if (typeof error.response.data?.message === "object") {
    [notificationString] = error.response.data.message;
  }

  return notificationString;
};

export const checkHasProperty = (obj, propertyName) =>
  Object.prototype.hasOwnProperty.call(obj, propertyName);
