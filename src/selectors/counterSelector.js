import { createSelector } from "reselect";

const counterReducer = (state) => state.counter;

export const counter = createSelector(counterReducer, ({ value }) => value);
