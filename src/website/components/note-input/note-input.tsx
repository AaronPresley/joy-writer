import React, {
  FunctionComponent,
  ChangeEvent,
  RefObject,
  createRef,
} from "react";

import "./note-input.scss";

export interface NoteInputProps {
  inputDelay?: number;
  onChange?: (newValue: string) => void;
  defaultValue: string;
}

const NoteInput: FunctionComponent<NoteInputProps> = ({
  inputDelay = 500,
  onChange = (v) => console.log(`note value updated to ${v}`),
  defaultValue,
}) => {
  const inputRef: RefObject<HTMLDivElement> = createRef();
  let initValue = defaultValue;
  let inputTimer: NodeJS.Timeout;

  return (
    <div className="note-input-container">
      <div
        className="text-input"
        contentEditable
        onInput={(e: ChangeEvent<HTMLDivElement>) => {
          if (inputTimer !== null) clearTimeout(inputTimer);
          inputTimer = setTimeout(
            () => onChange(inputRef.current?.innerHTML || ""),
            inputDelay
          );
        }}
        ref={inputRef}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default NoteInput;
