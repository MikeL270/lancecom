<script lang="ts">
    import type { PageProps } from './$types';
    import ProjectCard from '../../components/ProjectCard.svelte';

    let { data }: PageProps = $props();

</script>
<h2 class="small-padding round center-align bottom-shadow border">Project Portfolio</h2>
<div class="grid">
    {#each data.projects as project}
        <ProjectCard {project}/>
    {/each}
</div>