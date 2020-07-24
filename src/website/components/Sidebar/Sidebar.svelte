<style type="text/scss">
  @import "./Sidebar.scss";
</style>

<script lang="ts">
  import { allNotes, currentNoteId } from '../../store/note.ts';
</script>

<div class="sidebar-container">
  <ul>
    {#each $allNotes as note (note.id)}
      <li class:active={$currentNoteId === note.id}>
        <span role="link" on:click={currentNoteId.set(note.id)}>{ note.title }</span>
      </li>
    {/each}
  </ul>
</div>
