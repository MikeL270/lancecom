<script lang="ts">
    import me from '$lib/assets/me.webp';
    import projects from '$lib/assets/projects.webp';
    import { MediaQuery } from 'svelte/reactivity'; 

    const twoCol = new MediaQuery('min-width: 800px');
</script>
<header>
    <h2>About Me</h2>
</header>
<div class:grid={twoCol.current}>
    <div class="s6 margin">
        <article class="no-padding surface-container-lowest center-align border">
            <img class="responsive small-height" src="{me}" alt="Me with a node from UWYO ARCC's beartooth cluster.">
            <div class="padding">
                <h3>Michael B. Lance</h3> 
                <p> 
                    I am a student of Applied Software Development at the University of Wyoming where I work 
                    as an undergraduate research assistant developing software for academic uses. I have a 
                    borderline unhealthy obsession with nearly all things computing.
                </p>
            </div>
        </article>

    </div>
    <div class="s6 margin">
        <article class="no-padding surface-container-lowest border">
            <div class="grid no-space">
                <div class="s6">
                    <img class="responsive" src="{projects}" alt="My first server box">
                </div>
                <div class="s6 padding center-align">
                    <h3>Recent Projects</h3>
                    <p class="left-align">
                        Below is a list few of my most recent projects that I have taken the time to 
                        post about here. 
                    </p>
                </div>
            </div>
            <div class="padding surface-container-low margin">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </article>
    </div>
</div>	
<style>
    
</style>