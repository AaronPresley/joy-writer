import { ipcRenderer } from "electron";
import { createStore } from ".";

export interface State {
  hasCredentials: boolean;
  hasDirectory: boolean;
}

export interface Actions {
  getDirectories: () => Promise<Record<string, any>[]>;
  pullFromMain: () => Promise<void>;
  setCredentials: (s3Key: string, s3Secret: string) => Promise<void>;
  setDirectory: (s3Bucket: string) => Promise<void>;
}

export const initialState: State = {
  hasCredentials: false,
  hasDirectory: false,
};

export const useStorageTargetStore = createStore<State & Actions>(
  "dataTarget",
  (set, get) => ({
    ...initialState,

    getDirectories: async () => {
      const theList = ipcRenderer.sendSync("storage-target-get-buckets");
      return theList;
    },

    pullFromMain: async () => {
      const thisState = ipcRenderer.sendSync("storage-target-get");
      set({ ...thisState });
    },

    setCredentials: async (s3Key, s3Secret) => {
      const thisState = ipcRenderer.sendSync("storage-target-set-credentials", {
        s3Key,
        s3Secret,
      });
      set({ ...thisState });
    },

    setDirectory: async (s3Bucket) => {
      const thisState = ipcRenderer.sendSync("storage-target-set-directory", {
        s3Bucket,
      });
      set({ ...thisState });
    },
  })
);

export default useStorageTargetStore;
