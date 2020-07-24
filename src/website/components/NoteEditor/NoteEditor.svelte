<style type="text/scss">
  @import "./NoteEditor.scss";
</style>

<script lang="ts">
  import { onDestroy } from 'svelte';
  import { allNotes, currentNoteId } from '../../store/note.ts';

  let currNote = null;
  
  const unsub = currentNoteId.subscribe(newId => {
    currNote = $allNotes.find(n => n.id === $currentNoteId)
  });

  onDestroy(unsub);
</script>

<div class="note-editor-container">
  {#if !$currentNoteId }
    Select a note to view it
  {:else}
    <h1>{ currNote.title }</h1>
    <textarea>{currNote.content}</textarea>
  {/if}
</div>
