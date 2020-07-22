import React, { useState, FunctionComponent, RefObject, useEffect } from 'react';
import './note-title.scss';

export interface NoteTitleProps {
  title: string;
  afterUpdate?: (newTitle:string) => void;
}

const NoteTitle:FunctionComponent<NoteTitleProps> = ({
  title,
  afterUpdate = (newTitle) => console.log(`Title updated to ${newTitle}`),
}) => {
  const inputRef:RefObject<HTMLInputElement> = React.createRef();
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  
  const keyListener = (e:KeyboardEvent) => {
    switch (e.keyCode) {
      case 27:
        setIsEditing(false);
        break;
    
      case 13:
        afterUpdate(inputRef.current?.value || '');
        setIsEditing(false);
        break;
    }
  }
  
  useEffect(() => {
    if (isEditing) inputRef.current?.select();
  }, [isEditing])

  return (
    <div className="note-title-container">
      {!isEditing && (
        <h1
          onClick={() => { setIsEditing(true) }}
        >
          { title }
        </h1>
      )}

      {isEditing && (
        <input
          defaultValue={title}
          onBlur={() => {
            setIsEditing(false);
            inputRef.current?.removeEventListener('keyup', keyListener)
          }}
          onFocus={() => inputRef.current?.addEventListener('keyup', keyListener)}
          ref={inputRef}
          type="text"
        />
      )}
    </div>
  );
};
export default NoteTitle;
