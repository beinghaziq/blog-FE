import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";
import { counter } from "../selectors/counterSelector";
import { blogs } from "../selectors/blogSelector";
import { Button } from "./elements/Button"
import { fetchBlogs } from "../store/blogSlice";

export const Post = () => {
  const { t } = useTranslation();
  const count = useSelector(counter);
  const allBlogs = useSelector(blogs);
  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(fetchBlogs());
   }, [dispatch]);

  return (
    <div>
      { console.log(allBlogs) }
      <h1>{t("heading.count", { count })}</h1>
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
