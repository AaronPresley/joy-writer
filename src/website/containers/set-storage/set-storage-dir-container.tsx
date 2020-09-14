import React, { ChangeEvent, FormEvent, FunctionComponent, useEffect, useState } from 'react';
import { CenteredLayout } from '../../layouts';
import useStorageTargetStore from '../../wstate/storage-target-state';

export const SetStorageDirContainer: FunctionComponent = () => {
  const { getDirectories, setDirectory } = useStorageTargetStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buckets, setBuckets] = useState<Record<string, any>[]>([]);
  const [formData, setFormData] = useState<Record<string, any>>({
    s3Bucket: null,
  });

  useEffect(() => {
    getDirectories().then(theList => setBuckets(theList));
  }, []);

  const onFieldChange = (e: ChangeEvent<HTMLSelectElement>) => setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { s3Bucket } = formData;
    setDirectory(s3Bucket);
  };

  const canSubmit = !isLoading && formData.s3Key && formData.s3Secret;

  console.log(buckets);

  return (
    <CenteredLayout className="set-storage-container">
      <form onSubmit={onSubmit}>
        <h1>S3 Bucket</h1>
        <p>Choose which bucket to use for notes</p>

        <ul>
          <li>asdf</li>
          {buckets.map(b => {
            <li>{b.name}</li>
          })}

        </ul>
        <div>
          <label>Bucket</label>
          <select
            name="s3Bucket"
            value={formData.s3Bucket || ''}
            onChange={onFieldChange}
            disabled={isLoading}
          >
            <option>-- choose --</option>
            {buckets.map(b => {
              <option value="b.name">{b.name}</option>
            })}
          </select>
        </div>

        <button type="submit" disabled={canSubmit}>Save</button>
      </form>
    </CenteredLayout>
  );
};

export default SetStorageDirContainer;
