
<script lang="ts">
    import me from '$lib/assets/me.webp';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>
<header>
    <h2>About Me</h2>
</header>	
<article class="no-padding round surface-container-lowest center-align border">
    <img class="responsive top-round" src="{me}" alt="Me with a node from ARCC's beartooth cluster">
    <div class="padding">
        <h2>Michael B. Lance</h2>
        <p> 
            I am student of Applied Software Development at the University of Wyoming in Laramie Wyoming.
            I have occaisionally been known to develop software projects. This website exists to document 
            my software development hijinks. The primary intent is to showcase my skillset, I have been
            advised to withold including my social security number here. Also, my head is no longer buzzed, 
            there just hasn't been a good picture taken of me in over a year.
        </p>
    </div>
</article>