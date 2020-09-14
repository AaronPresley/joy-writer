import React, { FunctionComponent, useState } from 'react';
import { CenteredLayout } from '../../layouts';

export const SetStorageCredsContainer: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <CenteredLayout className="set-storage-container">
      <form>
        <h1>S3 Storage Info</h1>
        <p>Notes are stored in your desired S3 Bucket. Enter your S3 info below</p>

        <div>
          <label>S3 Key</label>
          <input type="text" disabled={isLoading} />
        </div>

        <div>
          <label>S3 Secret</label>
          <input type="password" disabled={isLoading} />
        </div>

        <button type="submit" disabled={isLoading}>Save</button>
      </form>
    </CenteredLayout>
  );
};

export default SetStorageCredsContainer;
