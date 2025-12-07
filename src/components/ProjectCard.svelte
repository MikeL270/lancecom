<script lang="ts">
    import type { projectEntry } from "../modules/types";
    import Icon from '@iconify/svelte';

    export let project: projectEntry;

    let dialogElement: HTMLDialogElement;

    function openDialog() {
        dialogElement?.showModal();
    }

    function closeDialog() {
        dialogElement?.close();
    }
</script>
    <article class="no-padding border bottom-shadow s6">
    <div class="grid no-space">
        <div class="s6">
            {#if project.image}
            <img class="small-height responsive" src={project.image} alt="project">
            {:else}
            <Icon class="small-height responsive" icon="ix:no-image"/>
            {/if}
        </div>
        <div class="s6 relative padding">
            <h5 class="center-align small">{project.name}</h5>
            <p>{project.brief}</p>
            <button 
            class="responsive absolute bottom margin primary"
            onclick={openDialog}>Read More</button>
        </div>
    </div>
    <dialog bind:this={dialogElement} class="max relative">
        <header class="top left-align round row relative">
            <nav>
                <button onclick={closeDialog}>
                    Back to Portfolio
                </button>
            </nav>
            <h5 class="center-align center">The {project.name}</h5>
        </header>
        <div 
        class="grid  surface-container-lowest round middle center">
            <div class="s6">
                <img class="responsive medium-height round" src="{project.image}" alt="project">
            </div>
            <div class="s6 padding surface-container-low">
                
                {@html project.description}
            </div>
        </div>
    </dialog>
</article>
