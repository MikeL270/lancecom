<script lang="ts">
    import { MediaQuery } from 'svelte/reactivity'; 

    const twoCol = new MediaQuery('min-width: 800px');
</script>
<h2 class="small-padding round center-align bottom-shadow border">About Me</h2>
<article class="no-padding bottom-shadow center-align border">
    <img class="responsive medium-height" src="/images/me.webp" alt="Me with a node from UWYO ARCC's beartooth cluster.">
    <div class="padding">
        <h3>Michael B. Lance</h3> 
        <p> 
            I am a student of Applied Software Development at the University of Wyoming where I work 
            as an undergraduate research assistant developing software for academic uses. I have a 
            borderline unhealthy obsession with nearly all things computing.
        </p>
    </div>
</article>
<article class="no-padding bottom-shadow border medium-height">
    <div class="grid no-space">
        <div class="s6">
            <img class="responsive medium-height" src="/images/projects.webp" alt="My first server box">
        </div>
        <div class="s6 padding center-align">
            <h3>Recent Projects</h3>
            <p class="left-align">
                Below is a list few of my most recent projects that I have taken the time to 
                post about here. 
            </p>
            <div class="left-align surface-container-low small-padding">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    </div>
</article>
