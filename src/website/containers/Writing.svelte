<style type="text/scss">
  .writing-container {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  }
</style>

<script lang="ts">
  import { Sidebar, NoteEditor } from '../components';
</script>

<div class="writing-container">
  <Sidebar />
  <NoteEditor />
</div>
