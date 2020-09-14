import create, { StateCreator, SetState, GetState, StoreApi } from "zustand";
import produce from "immer";

const doLogStore = true;

export type Middleware<T extends Record<string, any>> = (
  config: StateCreator<T>
) => (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) => T;

export const createStore = <T extends Record<string, any>>(
  storeName: string,
  fn: StateCreator<T>
) => {
  // Logging each change
  const log: Middleware<T> = (config) => (set, get, api) =>
    config(
      (args) => {
        if (doLogStore)
          console.log(storeName, "SETTING", JSON.parse(JSON.stringify(args)));
        set(args);
      },
      get,
      api
    );

  // Ensuring we're not overwriting state
  const immer: Middleware<T> = (config) => (set, get, api) =>
    config(
      (args) => set(produce(get(), (draft) => Object.assign(draft, args)) as T),
      get,
      api
    );

  return create(immer(fn));
};
