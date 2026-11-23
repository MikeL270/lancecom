<script lang="ts">
  import { portfolioState } from "./portfolio/state.svelte";
  import { filterThreeNewest } from "../ts/filters";
  import type { projectEntry } from "../ts/types";
  import ProjectCard from "../components/ProjectCard.svelte";

  let newestProjects = $derived(
    filterThreeNewest(portfolioState.projects) as projectEntry[],
  );
</script>

<div class="grid max">
  <div class="s12 m6 max medium-elevate surface-container round">
    <div class="max no-padding large vertical transparent">
      <img
        class="fill no-round top-round"
        src="/images/me.webp"
        alt="Me with a node from UWYO ARCC's beartooth cluster."
      />
      <div class="padding">
        <h3>About Me</h3>
        <p class="large-text">
          <shield-font>
            First student in the UWYO School of Computing's Applied Software
            Development program. Recently worked as a Computation Research Aide
            Senior at Argonne National Laboratory in the Performance and
            Engineering Group of the Argonne Leadership Comupting Facility for the
            summer of 2026. Interested in high performance computing and
            scientific software.
          </shield-font>
        </p>
      </div>
    </div>
  </div>
  <div class="s12 m6 max medium-elevate surface-container round">
    <div class="no-padding">
      <div class="max padding">
        <h3>Recent Projects</h3>
        <div class="left-align small-padding">
          {#each newestProjects as project}
            <ProjectCard {project} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
