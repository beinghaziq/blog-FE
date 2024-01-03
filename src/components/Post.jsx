import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";
import { counter } from "../selectors/counterSelector";
import { Button } from "./elements/Button"

export const Post = () => {
  const { t } = useTranslation();
  const count = useSelector(counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{t("heading.count")}: {count}</h1>
      <Button onClick={() => dispatch(increment())}>
        {t("button.increment")}
      </Button>
      <Button onClick={() => dispatch(decrement())}>
        {t("button.decrement")}
      </Button>
      <h2>{t("text.car")}</h2>
    </div>
  );
};
