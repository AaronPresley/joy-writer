import React, { useState } from "react";
import "./writing.scss";

import { NoteTitle, NoteInput } from "../../components";

const WritingContainer = () => {
  const [title, setTitle] = useState<string>("Some Title");
  const [noteText, setNoteText] = useState<string>("hi thing");

  return (
    <div className="writing-container">
      {/* <NoteTitle title={title} afterUpdate={setTitle} /> */}
      <NoteInput defaultValue={noteText} onChange={setNoteText} />
    </div>
  );
};

export default WritingContainer;
