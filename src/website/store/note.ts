import { writable, get } from "svelte/store";

export const allNotes = writable([
  {
    id: "c2edd169-82d5-4ce6-84ea-dd9b3ee00c98",
    title: "Note Title 1",
    content: `Hi, I'm a note!`,
  },
  {
    id: "1f366b5e-ae9b-4814-9c19-1559e2663254",
    title: "Note Title 2",
    content: `Another _note_ here 🔥`,
  },
]);

export const currentNoteId = writable(null);
