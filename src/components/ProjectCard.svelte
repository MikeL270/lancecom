<script lang="ts">
    import type { projectEntry } from "../ts/types";
    import Icon from '@iconify/svelte';
    import { tick } from 'svelte';
    import { MediaQuery } from 'svelte/reactivity';
    import { goto } from '$app/navigation';

    export let project: projectEntry;

    export let open: boolean = false;

    export let redirect: string | null = null;

    let dialogElement: HTMLDialogElement;

    function openDialog() {
        dialogElement?.showModal();
    }

    function closeDialog() {
        dialogElement?.close();
        
        if (redirect != undefined) {
            goto(redirect);
        } 
    }

    $: if (open) {
        tick().then(() => {
            openDialog()
        })
    }

</script>
    <article class="no-padding padding-bottom-small border small-height s6">
    <div class="grid no-space">
        <div class="s6">
            {#if project.image}
            <img class="small-height responsive" src={project.image} alt="project">
            {:else}
            <Icon class="small-height responsive" icon="ix:no-image"/>
            {/if}
        </div>
        <div class="s6 small-padding">
            <h5 class="center-align ">{project.name}</h5>
            <p>{project.brief}</p>
            <button 
                class="primary absolute bottom center bottom-margin responsive"
                onclick={openDialog}
            >Read More</button>
        </div>
    </div>
    <dialog bind:this={dialogElement} class="max small-padding center-align">
        <header class="top left-align round row relative">
            <nav>
                <button onclick={closeDialog} class="absolute left ">
                    <Icon icon="ic:sharp-arrow-back"/>
                    Back
                </button>
            </nav>
            <h1 class="center-align center absolute">{project.name}</h1>
        </header>
        <div class="responsive round dialog-responsive">
            <div>
                <img class="responsive large-height round" src="{project.image}" alt="project">
            </div>
            <div  class="padding surface-container-low">
                <ul class="list no-space">
                    <li>Started: {project.startDate.toLocaleString('en-US', {year: 'numeric'})}</li>
                    <li>Completed: {project.endDate.toLocaleString('en-US', {year: 'numeric'})}</li>
                </ul>
                {@html project.description}
            </div>
        </div>
    </dialog>
</article>
<style scoped>
    .dialog-responsive {
        margin-left: 5%;
        margin-right: 5%;
    }

    p {
        text-overflow: ellipsis;
    }



    h5 {
        font-size: 24px;
    }

    @media screen and (max-width: 436px) {
        p {
            display: none;
        }
    }

    


</style>
