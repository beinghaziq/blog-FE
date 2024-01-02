import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

export const Post = () => {
  const { t } = useTranslation();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <h2>{t("text.car")}</h2>
    </div>
  );
};
