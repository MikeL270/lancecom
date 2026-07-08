<script lang="ts">
  import { MediaQuery } from "svelte/reactivity";
  import { portfolioState } from "./portfolio/state.svelte";
  import { filterThreeNewest } from "../ts/filters";
  import type { projectEntry } from "../ts/types";
  import ProjectCard from "../components/ProjectCard.svelte";

  const twoCol = new MediaQuery("min-width: 1090px");
  let newestProjects = $derived(
    filterThreeNewest(portfolioState.projects) as projectEntry[],
  );
</script>

<div
  class="large-height middle-align"
  class:grid={twoCol.current}
  class:vertical={!twoCol.current}
>
  <div class="s6">
    <article
      class="no-padding top-round medium-elevate center-align large-height clip responsive"
    >
      <img
        class="responsive medium-height top-round"
        src="/images/me.webp"
        alt="Me with a node from UWYO ARCC's beartooth cluster."
      />
      <div class="padding">
        <h3>Biography</h3>
        <p>
          First student in the UWYO School of Computing's Applied Software
          Development program. Currently working as a Computation Research Aide
          Senior at Argonne National Laboratory in the Performance and
          Engineering Group of the Argonne Leadership Comupting Facility for the
          summer of 2026. Interested in High Performance computing and producing
          high quality and easy to use scientific software.
        </p>
      </div>
    </article>
  </div>
  <div class="s6">
    <article
      class="no-padding rounded medium-elevate center-align large-height clip"
    >
      <div class="padding large-height scroll">
        <h3>Project Showcase</h3>
        <p>
          I have worked on a fairly wide range of projects both professionally
          and personally. Under my own free will, and not because its required
          for my Inet 1650 final I have compiled my more interesting projects.
          Below is a list of my more recent endeavors.
        </p>
        <div class="left-align small-padding">
          {#each newestProjects as project}
            <ProjectCard {project} />
          {/each}
        </div>
      </div>
    </article>
  </div>
</div>
