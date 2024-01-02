import { useTranslation } from "react-i18next";

export const Post = () => {
  const { t } = useTranslation();

  return <h2>{`${t("text.car")}`}</h2>;
};
