import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { CenteredLayout } from '../../layouts';
import useStorageTargetStore from '../../wstate/storage-target-state';

export const SetStorageCredsContainer: FunctionComponent = () => {
  const { setCredentials } = useStorageTargetStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, any>>({
    s3Key: null,
    s3Secret: null,
  });

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { s3Key, s3Secret } = formData;
    setCredentials(s3Key, s3Secret);
  };

  const canSubmit = !isLoading && formData.s3Key && formData.s3Secret;

  return (
    <CenteredLayout className="set-storage-container">
      <form onSubmit={onSubmit}>
        <h1>S3 Storage Info</h1>
        <p>Notes are stored in your desired S3 Bucket. Enter your S3 info below</p>

        <div>
          <label>S3 Key</label>
          <input
            type="text"
            disabled={isLoading}
            name="s3Key"
            value={formData.s3Key || ''}
            onChange={onFieldChange}
          />
        </div>

        <div>
          <label>S3 Secret</label>
          <input
            type="password"
            disabled={isLoading}
            name="s3Secret"
            value={formData.s3Secret || ''}
            onChange={onFieldChange}
          />
        </div>

        <button type="submit" disabled={!canSubmit}>
          {isLoading ? <>Loading...</> : <>Next</>}
        </button>
      </form>
    </CenteredLayout>
  );
};

export default SetStorageCredsContainer;
