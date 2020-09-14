import Store, { Schema } from "electron-store";

interface MySchema {
  s3CredsPath: string;
  s3Bucket: string;
}

export const schema: Schema<MySchema> = {
  s3CredsPath: {
    type: "string",
  },
  s3Bucket: {
    type: "string",
  },
};

export const store = new Store({ schema });
