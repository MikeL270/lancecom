<script lang="ts">
  import type { projectEntry } from "../ts/types";
  import Icon from "@iconify/svelte";
  import { tick } from "svelte";
  import { goto } from "$app/navigation";

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
      openDialog();
    });
  }
</script>

<article class="no-padding border">
  <div class="grid no-space">
    <div class="s6">
      {#if project.image}
        <img
          class="small-height responsive"
          src={project.image}
          alt="project"
        />
      {:else}
        <Icon class="small-height responsive" icon="ix:no-image" />
      {/if}
    </div>
    <div class="s6 padding vertical">
      <div class="max">
        <h5>{project.name}</h5>
        <p
          class="max lines"
          style="-webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;"
        >
          {project.brief}
        </p>
        <nav>
          <button class="border round" onclick={openDialog}>Read More</button>
        </nav>
      </div>
    </div>
  </div>

  <dialog bind:this={dialogElement} class="max no-padding center-align">
    <article class="scroll no-round surface-container-low">
      <header class="top row primary-container bottom-margin">
        <nav>
          <button
            onclick={closeDialog}
            class="absolute left transparent circle no-padding"
          >
            <Icon
              icon="ant-design:close-circle-filled"
              class="error-container"
            />
          </button>
        </nav>
        <h3 class="center-align center absolute">{project.name}</h3>
      </header>
      <div class="responsive round dialog-responsive">
        <div class="no-round">
          <img
            class="responsive large-height top-round"
            src={project.image}
            alt="project"
          />
        </div>
        <div
          class="row middle-align left-align small-padding surface-container-lowest no-margin bottom-round"
        >
          {#each project.tags as tag}
            <div class="chip primary">
              <p class="bold">{tag}</p>
            </div>
          {/each}
        </div>
        <div
          class="row middle-align left-align small-padding no-margin bottom-margin"
        >
          <p class="bold">
            Started: {project.startDate.toLocaleString("en-US", {
              year: "numeric",
            })}
          </p>
          <p class="bold">
            Completed: {project.endDate.toLocaleString("en-US", {
              year: "numeric",
            })}
          </p>
        </div>
        <div class="padding surface-container-high round">
          {@html project.description}
        </div>
      </div>
    </article>
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
