<script lang="ts">
    import favicon from '$lib/assets/favicon.ico';
    let { children } = $props();
	import logo from '$lib/assets/logo.webp'
	import Icon from '@iconify/svelte';
	import '../app.css';
	import { MediaQuery } from 'svelte/reactivity'; 

    let date = $state(new Date().getFullYear());
	const mobileHeader = new MediaQuery('min-width: 800px');
</script>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<header class="row top primary-container">
	<img src="{logo}" alt="Lance Computer Logo" height="50px" class="absolute left margin">
	<h1 class:center={mobileHeader.current}>Michael B. Lance</h1>
</header>
<nav class="top drawer center-align blur top-shadow">
	<a href="/" class="surface-container-low border">
		<Icon icon=material-symbols:home-rounded width="1.5rem"/>
		<span>Home</span>
	</a>
	<a href="/work-history" class="surface-container-low border">
		<Icon icon="tdesign:education-filled" width="1.5rem"/>
		<span>Employability</span>
	</a>
	<a href="/portfolio" class="surface-container-low border">
		<Icon icon="ant-design:project-filled" width="1.5rem"/>
		<span>portfolio</span>
	</a>
	<a href="/skills" class="surface-container-low border">
		<Icon icon="carbon:skill-level-advanced" width="1.5rem"/>
		<span>Skills</span>
	</a>
</nav>
<main class="responsive">
	{@render children()}
</main>
<footer class="row center-align transparent">
	<span>© {date} All rights reserved  Michael Lance</span>
	<a href="https://github.com/MikeL270" class="small-margin">
		<Icon icon="mdi:github" width="1.5rem"/> 
	</a>
</footer>
<style>
	nav {
		border-bottom: 1px solid var(--primary-container);
	}
	footer a {
		min-width: 0;
	}

	a {
		min-width: 150px;
		height: 100%
	}

	@media (max-width: 800px) {
		h1 {
			font-size: large;
			position: absolute;
			right: 0;
			padding: 1%;
		}
		a {
			min-width: 75px;
		}
	}
</style>
