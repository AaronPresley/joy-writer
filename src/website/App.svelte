<style type="text/scss">
  @import "./App.scss";
</style>

<script lang="ts">
  import { ipcRenderer } from 'electron';
  import Writing from './containers/Writing.svelte';

  // ipcRenderer.send('some-example', 'thing1')
</script>

<Writing />
