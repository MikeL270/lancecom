<script lang="ts">
  import favicon from "$lib/assets/favicon.ico";
  let { children } = $props();
  import logo from "$lib/assets/logo.webp";
  import Icon from "@iconify/svelte";
  import { MediaQuery } from "svelte/reactivity";
  import { page } from "$app/stores";
  import "../app.css";

  let shorterMobileNav = new MediaQuery("min-width: 512px");
  let desktopNav = new MediaQuery(`min-width: 1180px`);

  const routes = [
    {
      location: "/",
      name: "Home",
      icon: "material-symbols:home-rounded",
    },
    {
      location: "/qualifications",
      name: "Qualifications",
      icon: "tdesign:education-filled",
    },
    {
      location: "/portfolio",
      name: "Portfolio",
      icon: "ant-design:project-filled",
    },
    {
      location: "/skills",
      name: "Skills",
      icon: "carbon:skill-level-advanced",
    },
  ];

  let date = $state(new Date().getFullYear());

  let isDark = $state(true);

  $effect(() => {
    isDark = document.body.classList.contains("dark");
  });

  const toggleTheme = () => {
    isDark = !isDark;

    if (isDark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  };
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<header
  class="top fixed primary-container"
  class:row={desktopNav.current}
  class:center-align={!desktopNav.current}
>
  <img
    src={logo}
    alt="Lance Computer Logo"
    class="margin small-width"
    class:center={!desktopNav.current}
  />
  {#if desktopNav.current}
    <h1 class="nosifier-regular">Michael B. Lance</h1>
  {/if}
  {#if desktopNav.current}
    <div class="absolute right padding">
      <nav class="tabbed background middle-align no-round">
        {#each routes as route}
          <a
            href={route.location}
            class:primary={$page.url.pathname === route.location}
          >
            <Icon icon={route.icon} width="1.5rem" />
            <span>{route.name}</span>
          </a>
        {/each}
      </nav>
    </div>
  {:else}
    <nav class="tabbed center-align small-margin-bottom">
      {#each routes as route}
        <a
          href={route.location}
          class:primary={$page.url.pathname === route.location}
        >
          <Icon icon={route.icon} width="1.5rem" />
          {#if shorterMobileNav.current}
            <span>{route.name}</span>
          {/if}
        </a>
      {/each}
    </nav>
  {/if}
</header>
<main
  class="responsive scroll max large-margin"
  class:middle-align={desktopNav.current}
>
  {#key $page.url.pathname}
    <div class="vertical center-align active page bottom">
      {@render children()}
    </div>
  {/key}
</main>
<footer class="row center-align fixed">
  <span>&copy; {date} Michael Lance All rights reserved</span>
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/MikeL270"
  >
    <Icon icon="mdi:github" width="1.5rem" />
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://signal.me/#eu/-3t_GrVyo9HEADWiLAwzRvWGdIqF_ov222ft1Zm3haVZSyvBSUZNU4jp4Rxc7AaF"
  >
    <Icon icon="logos:signal" width="1.5rem" />
  </a>
</footer>
<button
  class="circle extra primary elevation"
  style="position: fixed; bottom: 2rem; right: 2rem; z-index: 99999;"
  onclick={toggleTheme}
>
  {#if isDark}
    <Icon icon="material-symbols:light-mode-rounded" width="0.5rem" />
  {:else}
    <Icon icon="material-symbols:dark-mode-rounded" width="0.5rem" />
  {/if}
</button>
