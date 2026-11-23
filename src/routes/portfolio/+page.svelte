<script lang="ts">
  import Icon from "@iconify/svelte";
  import { portfolioState } from "./state.svelte";
  import ProjectCard from "../../components/ProjectCard.svelte";
</script>

<div class="field label prefix underline">
  <Icon icon="material-symbols:search" />
  <input type="text" id="search" />
  <label for="search">Search</label>
</div>
<div class="grid">
  {#each portfolioState.projects as project}
    <div class="s8 m16 l6">
      <ProjectCard {project} open={false} />
    </div>
  {/each}
</div>
