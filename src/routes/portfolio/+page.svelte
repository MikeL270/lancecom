<script lang="ts">
    import { portfolioState } from './state.svelte';
    import ProjectCard from '../../components/ProjectCard.svelte';
    import { MediaQuery } from 'svelte/reactivity';
    let desktopNav = new MediaQuery(`min-width: 1180px`);

</script>
<h2 class="small-padding center-align bottom-shadow responsive border">Project Portfolio</h2>
<div class:grid={desktopNav.current}>
    {#each portfolioState.projects as project}
        <ProjectCard project={project} open={false}/>
    {/each}
</div>
