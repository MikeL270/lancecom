<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
    let { children } = $props();
	import logo from '$lib/assets/logo.webp'
	import Icon from '@iconify/svelte';
	import '../app.css';


    let date = $state(new Date().getFullYear());

	export const prerender = false;

</script>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<header class="row top primary-container">
	<img src="{logo}" alt="Lance Computer Logo" height="50px" class="absolute left margin">
	<h1 class="center no-padding">Michael B. Lance</h1>
</header>
<nav class="top middle-align small-blur top-shadow" >
	<a href="/">
		<Icon icon=material-symbols:home-rounded width="1.5rem"/>
		<span>Home</span>
	</a>
	<a href="/work-history">
		<Icon icon="material-symbols:work" width="1.5rem"/>
		<span>Work History</span>
	</a>
	<a href="/portfolio">
		<Icon icon="ant-design:project-filled" width="1.5rem"/>
		<span>portfolio</span>
	</a>
	<a href="/contact">
		<Icon icon="carbon:skill-level-advanced" width="1.5rem"/>
		<span>Skills</span>
	</a>
</nav>
<main class="responsive">
	{@render children()}
</main>
<footer class="middle-align center-align fixed small blur bottom-shadow">
	<span>© {date} All rights reserved  Michael Lance</span>
	<a href="https://github.com/MikeL270" class="small-margin">
		<Icon icon="mdi:github" width="1.5rem"/> 
	</a>
</footer>
<style>
	

	nav {
		border-bottom: solid 1px var(--primary-container);
	}

	footer {
		border-top: solid 1px var(--primary-container);
	}
</style>
