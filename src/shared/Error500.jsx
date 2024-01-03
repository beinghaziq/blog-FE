import { useTranslation } from "react-i18next";
import { Button } from "../components/elements/Button";

export const Error500 = () => {
  const { t } = useTranslation();

  return (
    <div id="content" className="main-container error-500-page">
      <div class="container">
        <div className="text-center">
          <img
            className="error-500"
            src="https://kmp-assets.s3.amazonaws.com/500.gif"
            alt="500 error"
          />
          <h1>{t("heading.ourFault")}</h1>
          <Button>
            {t("button.backToDashboard")}
          </Button>
        </div>
      </div>
    </div>
  );
};
