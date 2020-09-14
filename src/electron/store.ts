import Store, { Schema } from "electron-store";

interface MySchema {
  s3Key: string;
  s3Secret: string;
  s3Bucket: string;
}

export const schema: Schema<MySchema> = {
  s3Key: {
    type: "string",
  },
  s3Secret: {
    type: "string",
  },
  s3Bucket: {
    type: "string",
  },
};

export const store = new Store({ schema });
