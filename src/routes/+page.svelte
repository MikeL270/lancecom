<script lang="ts">
    import { MediaQuery } from 'svelte/reactivity'; 
    import { portfolioState } from './portfolio/state.svelte';
    import { filterThreeNewest } from '../ts/filters';
    import type { projectEntry } from '../ts/types';
    import ProjectCard from '../components/ProjectCard.svelte';

    const twoCol = new MediaQuery('min-width: 1090px');
    let newestProjects = $derived(filterThreeNewest(portfolioState.projects) as projectEntry[])
</script>
<h2 class="small-padding center-align bottom-shadow border responsive">About Me</h2>
<div class="large-height middle-align" class:grid={twoCol.current} class:vertical={!twoCol.current}>
    <div class="s6">
        <article class="no-padding bottom-shadow center-align border large-height scroll">
            <img class="responsive medium-height" src="/images/me.webp" alt="Me with a node from UWYO ARCC's beartooth cluster.">
            <div class="padding">
                <h3>Michael B. Lance</h3> 
                <p> 
                    I am a student of Applied Software Development at the University of Wyoming where I work 
                    as an undergraduate research assistant developing software for academic uses. I enjoy 
                    working with computers and solving real problems. 
                </p>
            </div>
        </article>
    </div>
    <div class="s6">
        <article class="no-padding bottom-shadow center-align border large-height">
            <div class="padding large-height scroll">
                <h3>Recent Projects</h3>
                <p> 
                    I have worked on a fairly wide range of projects both professionally and personally. Under
                    my own free will, and not because its required for my Inet 1650 final I have compiled my more 
                    interesting projects. Below is a list of my more recent endeavors. 
                </p>
                <div class="left-align small-padding">
                    {#each newestProjects as project}
                        <ProjectCard project={project}/>
                    {/each}
                </div>
            </div>
        </article>
    </div>
</div>
