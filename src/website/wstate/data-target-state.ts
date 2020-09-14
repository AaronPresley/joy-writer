import { createStore } from "./";

export interface State {
  hasStorageCredentials: boolean;
  hasStorageDirectory: boolean;
}

export interface Actions {
  setCredentials: (s3Key: string, s3Secret: string) => void;
  setFromEvent: (data: State) => void;
}

export const initialState: State = {
  hasStorageCredentials: false,
  hasStorageDirectory: false,
};

export const useDataTargetStore = createStore<State & Actions>(
  "dataTarget",
  (set, get) => ({
    ...initialState,
    setCredentials: (s3Key, s3Secret) => {},
    setFromEvent: (newData) => set({ ...newData }),
  })
);

export default useDataTargetStore;
