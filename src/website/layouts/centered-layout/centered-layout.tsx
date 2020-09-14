import React, { FunctionComponent } from 'react';
import './centered-layout.scss';

export interface Props {
  className?: string
}

export const CenteredLayout: FunctionComponent<Props> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`centered-layout ${className}`}>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default CenteredLayout;
