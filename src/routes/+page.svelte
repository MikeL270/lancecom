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
        <h3>Biography</h3>
        <p class="large-text">
          First student in the UWYO School of Computing's Applied Software
          Development program. Currently working as a Computation Research Aide
          Senior at Argonne National Laboratory in the Performance and
          Engineering Group of the Argonne Leadership Comupting Facility for the
          summer of 2026. Interested in high performance computing and
          scientific software.
        </p>
      </div>
    </div>
  </div>
  <div class="s12 m6 max medium-elevate surface-container round">
    <div class="no-padding">
      <div class="max padding">
        <h3>Project Showcase</h3>
        <div class="left-align small-padding">
          {#each newestProjects as project}
            <ProjectCard {project} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
